// Regenerates every logo and icon file in public/ from one geometry
// (src/config/logo-geometry.mjs) and the brand strings in src/config/site.ts.
//
//   node scripts/generate-brand.mjs
//
// Uses only Node built-ins (Node 22.18+ can import the .ts config directly;
// CI and dev use Node 26). SVGs are written as text. PNG and ICO icons are
// rasterised here with a tiny anti-aliased renderer, so no image library and
// no browser are needed for them. Only og-image.png needs headless Chrome (it
// contains text): set CHROME to its path if it is not at the macOS default.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { deflateSync } from 'node:zlib';
import { site } from '../src/config/site.ts';
import {
  FULL_GAP,
  FULL_SCALE,
  MARK,
  WORDMARK_ASCENT,
  WORDMARK_STROKE,
  WORDMARK_TOP,
  fullLogoSize,
  layoutWordmark,
} from '../src/config/logo-geometry.mjs';

const pub = new URL('../public/', import.meta.url).pathname;
const out = (name) => join(pub, name);

// Brand colours (keep in sync with src/app/globals.css and docs/BRAND.md).
const light = { bg: '#1f6b57', fg: '#ffffff', word: '#165040' };
const dark = { bg: '#5cc2a2', fg: '#0b1512', word: '#86d6bc' };

const xml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const pts = (p) => p.map((xy) => xy.join(' ')).join(' ');

function markSvgBody(c) {
  const s = `fill="none" stroke="${c.fg}" stroke-width="${MARK.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"`;
  return `<rect width="32" height="32" rx="${MARK.radius}" fill="${c.bg}"/><polyline points="${pts(MARK.roof)}" ${s}/><polyline points="${pts(MARK.check)}" ${s}/>`;
}

function wordSvgBody(layout, c) {
  const paths = layout.glyphs
    .map((g) => `<path d="${g.d}" transform="translate(${g.x} 0)"/>`)
    .join('');
  return `<g fill="none" stroke="${c.word}" stroke-width="${WORDMARK_STROKE}" stroke-linecap="round" stroke-linejoin="round">${paths}</g>`;
}

const layout = layoutWordmark(site.name);
if (!layout) {
  throw new Error(
    `The drawn wordmark has no glyph for a letter in "${site.name}". Add glyphs to src/config/logo-geometry.mjs.`,
  );
}
const pad = WORDMARK_STROKE / 2;
const full = fullLogoSize(site.name);
const midY = WORDMARK_TOP + WORDMARK_ASCENT / 2;

function svg(viewBox, body, label, extra = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="${xml(label)}">${extra}${body}</svg>\n`;
}

function fullBody(c) {
  return `${markSvgBody(c)}<g transform="translate(${MARK.size + FULL_GAP + pad * FULL_SCALE} 16) scale(${FULL_SCALE}) translate(0 ${-midY})">${wordSvgBody(layout, c)}</g>`;
}

// --- SVG files -------------------------------------------------------------
writeFileSync(
  out('logo-mark.svg'),
  svg('0 0 32 32', markSvgBody(light), site.name),
);
writeFileSync(
  out('logo-wordmark.svg'),
  svg(
    `${-pad} ${WORDMARK_TOP - pad} ${layout.width + pad * 2} ${WORDMARK_ASCENT + pad * 2}`,
    wordSvgBody(layout, light),
    site.name,
  ),
);
writeFileSync(
  out('logo-full.svg'),
  svg(`0 0 ${full.width} ${full.height}`, fullBody(light), site.name),
);
writeFileSync(
  out('logo-full-dark.svg'),
  svg(`0 0 ${full.width} ${full.height}`, fullBody(dark), site.name),
);

// Favicon: swaps colours inside the SVG with prefers-color-scheme.
const favStyle = `<style>.b{fill:${light.bg}}.s{fill:none;stroke:${light.fg};stroke-width:${MARK.strokeWidth};stroke-linecap:round;stroke-linejoin:round}@media (prefers-color-scheme:dark){.b{fill:${dark.bg}}.s{stroke:${dark.fg}}}</style>`;
writeFileSync(
  out('favicon.svg'),
  svg(
    '0 0 32 32',
    `<rect class="b" width="32" height="32" rx="${MARK.radius}"/><polyline class="s" points="${pts(MARK.roof)}"/><polyline class="s" points="${pts(MARK.check)}"/>`,
    site.name,
    favStyle,
  ),
);

// --- PNG rasteriser --------------------------------------------------------
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

function distToSegment(px, py, [ax, ay], [bx, by]) {
  const dx = bx - ax;
  const dy = by - ay;
  const t = Math.max(
    0,
    Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)),
  );
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

function inRoundedSquare(x, y, size, r) {
  if (x < 0 || y < 0 || x > size || y > size) return false;
  const cx = Math.min(Math.max(x, r), size - r);
  const cy = Math.min(Math.max(y, r), size - r);
  return Math.hypot(x - cx, y - cy) <= r;
}

function inStroke(x, y, poly, w) {
  for (let i = 0; i < poly.length - 1; i++) {
    if (distToSegment(x, y, poly[i], poly[i + 1]) <= w / 2) return true;
  }
  return false;
}

/** opts: rounded (transparent corners), scale (mark size inside the square). */
function rasterMark(size, { rounded, scale }) {
  const bg = hex(light.bg);
  const fg = hex(light.fg);
  const N = 4; // 4x4 samples per pixel
  const data = Buffer.alloc(size * size * 4);
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let r = 0,
        g = 0,
        b = 0,
        a = 0;
      for (let sy = 0; sy < N; sy++) {
        for (let sx = 0; sx < N; sx++) {
          // Sample position in 32-unit mark space, before scaling about the centre.
          const x = ((px + (sx + 0.5) / N) / size) * 32;
          const y = ((py + (sy + 0.5) / N) / size) * 32;
          const covered = rounded
            ? inRoundedSquare(x, y, 32, MARK.radius)
            : true;
          if (!covered) continue;
          const mx = (x - 16) / scale + 16;
          const my = (y - 16) / scale + 16;
          const onFg =
            inStroke(mx, my, MARK.roof, MARK.strokeWidth) ||
            inStroke(mx, my, MARK.check, MARK.strokeWidth);
          const c = onFg ? fg : bg;
          r += c[0];
          g += c[1];
          b += c[2];
          a += 255;
        }
      }
      const n = N * N;
      const i = (py * size + px) * 4;
      if (a > 0) {
        const cov = a / 255; // number of covered samples
        data[i] = Math.round(r / cov);
        data[i + 1] = Math.round(g / cov);
        data[i + 2] = Math.round(b / cov);
        data[i + 3] = Math.round((cov / n) * 255);
      }
    }
  }
  return data;
}

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
function crc32(buf) {
  let c = 0xffffffff;
  for (const byte of buf) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}
function encodePng(size, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filter: none
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

const png = (size, opts) => encodePng(size, rasterMark(size, opts));
const standard = { rounded: true, scale: 1 };

writeFileSync(out('icon-192.png'), png(192, standard));
writeFileSync(out('icon-512.png'), png(512, standard));
// Maskable: full-bleed background, mark inside the 80% safe zone.
writeFileSync(
  out('icon-maskable-512.png'),
  png(512, { rounded: false, scale: 0.66 }),
);
// Apple rounds the corners itself, so the file is an opaque square.
writeFileSync(
  out('apple-touch-icon.png'),
  png(180, { rounded: false, scale: 0.8 }),
);

// favicon.ico with 16, 32 and 48 px PNG images (supported by all current browsers).
const icoSizes = [16, 32, 48];
const icoImages = icoSizes.map((s) => png(s, standard));
const header = Buffer.alloc(6);
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(icoSizes.length, 4);
let offset = 6 + 16 * icoSizes.length;
const entries = icoSizes.map((s, i) => {
  const e = Buffer.alloc(16);
  e[0] = s;
  e[1] = s;
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(icoImages[i].length, 8);
  e.writeUInt32LE(offset, 12);
  offset += icoImages[i].length;
  return e;
});
writeFileSync(
  out('favicon.ico'),
  Buffer.concat([header, ...entries, ...icoImages]),
);

// --- Open Graph image (needs headless Chrome for the tagline text) ---------
function wrap(text, max) {
  const lines = [];
  let line = '';
  for (const word of text.split(' ')) {
    if ((line + ' ' + word).trim().length > max) {
      lines.push(line);
      line = word;
    } else line = (line + ' ' + word).trim();
  }
  if (line) lines.push(line);
  return lines;
}
const ogScale = 4.2;
const tagLines = wrap(site.tagline, 44)
  .map(
    (l, i) =>
      `<text x="96" y="${400 + i * 58}" font-family="Georgia, 'Iowan Old Style', serif" font-size="46" fill="#1e2421">${xml(l)}</text>`,
  )
  .join('');
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#fbf8f3"/>
<rect y="610" width="1200" height="20" fill="${light.bg}"/>
<g transform="translate(96 150) scale(${ogScale})">${fullBody(light)}</g>
${tagLines}
<text x="96" y="545" font-family="-apple-system, 'Segoe UI', Arial, sans-serif" font-size="28" fill="#a94a22">In development. Not yet launched.</text>
</svg>`;
const tmp = mkdtempSync(join(tmpdir(), 'brand-'));
const ogFile = join(tmp, 'og.svg');
writeFileSync(ogFile, ogSvg);
const chrome =
  process.env.CHROME ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (existsSync(chrome)) {
  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--window-size=1200,630',
      `--screenshot=${out('og-image.png')}`,
      `file://${ogFile}`,
    ],
    { stdio: 'ignore' },
  );
  const head = readFileSync(out('og-image.png'));
  console.log(`og-image.png ${head.readUInt32BE(16)}x${head.readUInt32BE(20)}`);
} else {
  console.warn(
    'Chrome not found (set CHROME): og-image.png was NOT regenerated.',
  );
}
console.log('Brand assets written to public/.');
