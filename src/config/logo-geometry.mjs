// Hand-drawn logo geometry, shared by the React logo component and by
// scripts/generate-brand.mjs. Plain JS so Node can import it without a build.
// No fonts are used: the wordmark is a monoline letter set drawn here, so it
// looks the same everywhere. A letter that is not in the set below makes
// layoutWordmark() return null, and the component falls back to live text.

/** The mark lives in a 32 x 32 box: a rounded square, a roof and a check. */
export const MARK = {
  size: 32,
  radius: 8,
  strokeWidth: 3.4,
  roof: [
    [5, 16],
    [16, 7],
    [27, 16],
  ],
  check: [
    [10.5, 21],
    [14.5, 25],
    [22, 17],
  ],
};

export const WORDMARK_STROKE = 2.4;
const GAP = 4.6;

// Baseline y = 20, x-height top y = 10, ascender top y = 4.
const GLYPHS = {
  L: { w: 8, d: 'M0 4V20H8' },
  l: { w: 0, d: 'M0 4V20' },
  e: { w: 10, d: 'M0 15H10A5 5 0 1 0 8.54 18.54' },
  a: { w: 10, d: 'M10 15A5 5 0 1 0 0 15A5 5 0 1 0 10 15M10 10V20' },
  s: {
    w: 10,
    d: 'M9 11.8C7.5 10 1.5 9.8 1.5 13C1.5 16 9.5 15.2 9.5 18C9.5 21 2.5 21 0.5 18.4',
  },
  w: { w: 12, d: 'M0 10L3 20L6 12.5L9 20L12 10' },
};

/**
 * Lay out a word in the monoline set.
 * Returns { width, glyphs: [{ x, d }] } (x in glyph units, ink starts at
 * -WORDMARK_STROKE/2) or null when a letter is not drawn.
 */
export function layoutWordmark(text) {
  let x = 0;
  const glyphs = [];
  for (const ch of text) {
    const g = GLYPHS[ch];
    if (!g) return null;
    glyphs.push({ x, d: g.d });
    x += g.w + GAP;
  }
  const width = x - GAP;
  return { width, glyphs };
}

/** Wordmark height in glyph units (ascender top to baseline). */
export const WORDMARK_ASCENT = 16;
export const WORDMARK_TOP = 4;

/** Scale of the wordmark next to the mark in the combined logo. */
export const FULL_SCALE = 1.3;
export const FULL_GAP = 11;

export function fullLogoSize(text) {
  const w = layoutWordmark(text);
  if (!w) return null;
  const pad = WORDMARK_STROKE / 2;
  const width = MARK.size + FULL_GAP + (w.width + pad * 2) * FULL_SCALE;
  return { width: Math.ceil(width), height: MARK.size };
}
