// Runs after `next build`. A static export cannot set HTTP headers, so this
// writes out/_headers (Netlify and Cloudflare Pages format) with a strict
// Content-Security-Policy. Next.js inlines a few bootstrap scripts into every
// page; instead of allowing all inline scripts, we allow exactly the ones in
// the built HTML by SHA-256 hash. Re-run on every build (the hashes change).
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = new URL('../out', import.meta.url).pathname;

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory()
      ? htmlFiles(p)
      : p.endsWith('.html')
        ? [p]
        : [];
  });
}

// One rule per page, listing only that page's inline script hashes. Hosts cap
// header line length (about 2000 characters on Cloudflare Pages), so a single
// rule with every hash would be too long.
const inline = /<(script|style)\b([^>]*)>([\s\S]*?)<\/\1>/g;
const common = [
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
];
const other = `  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
`;

function ruleFor(file) {
  const html = readFileSync(file, 'utf8');
  const scripts = new Set();
  const styles = new Set();
  for (const [, tag, attrs, body] of html.matchAll(inline)) {
    if (!body.trim()) continue;
    // JSON data blocks (JSON-LD) are never executed, so CSP does not apply.
    if (tag === 'script' && /type="application\/ld\+json"/.test(attrs))
      continue;
    const hash = `'sha256-${createHash('sha256').update(body).digest('base64')}'`;
    (tag === 'script' ? scripts : styles).add(hash);
  }
  const csp = [
    "default-src 'self'",
    `script-src 'self' ${[...scripts].join(' ')}`.trim(),
    `style-src 'self' ${[...styles].join(' ')}`.trim(),
    ...common,
  ].join('; ');
  return { csp, scripts: scripts.size, styles: styles.size };
}

let text = '';
let longest = 0;
for (const file of htmlFiles(outDir)) {
  const rel = file.slice(outDir.length).replace(/index\.html$/, '');
  const path = rel === '' ? '/' : rel;
  const { csp } = ruleFor(file);
  longest = Math.max(longest, csp.length);
  text += `${path.endsWith('.html') ? path : path}\n  Content-Security-Policy: ${csp}\n${other}\n`;
}

writeFileSync(join(outDir, '_headers'), text);
console.log(`Wrote out/_headers (longest CSP line: ${longest} characters).`);
