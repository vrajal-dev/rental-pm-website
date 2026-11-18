# Brand guide (working draft)

The name **Leasewell** is set once in `src/config/site.ts`. Two checks are still **pending**: a trademark search and domain selection. Do not treat the name or any domain as cleared. The URL and contact email in the config are flagged placeholders.

## Logo

- **Mark:** a rounded square holding a roof and a check mark (a home that is well leased). Geometry: `src/config/logo-geometry.mjs`.
- **Wordmark:** the name in a monoline, round-capped letter set drawn by hand in the same file (no font is used). A name with a letter that is not drawn falls back to live text in the components, and `pnpm generate:brand` refuses to run until the glyph is added.
- **Combined:** mark plus wordmark, vertically centred. Component: `src/components/logo.tsx` (`LogoMark`, `LogoWordmark`, `LogoFull`, `Logo` = linked header/footer version). The accessible name comes from the config.

## Colours

| Role                             | Token             | Light     | Dark      |
| -------------------------------- | ----------------- | --------- | --------- |
| Accent (mark, buttons)           | `--accent`        | `#1f6b57` | `#5cc2a2` |
| Accent, strong (wordmark, links) | `--accent-strong` | `#165040` | `#86d6bc` |
| Mark strokes, text on accent     | `--on-accent`     | `#ffffff` | `#0b1512` |
| Accent tint                      | `--accent-soft`   | `#dcebe4` | `#1d3a31` |
| Warm highlight                   | `--warm`          | `#a94a22` | `#e8916a` |
| Page background                  | `--bg`            | `#fbf8f3` | `#111614` |
| Text                             | `--ink`           | `#1e2421` | `#edefea` |

Tokens are defined in `src/app/globals.css`. Keep the hex values in `scripts/generate-brand.mjs` in sync with them.

## Clear space and size

- Clear space: keep at least half the height of the mark free on all sides of the combined logo.
- Minimum size: mark alone 16 px; combined logo 24 px high (about 140 px wide).

## Do and don't

- Do use `logo-full.svg` on light backgrounds and `logo-full-dark.svg` on dark ones.
- Do keep the mark and wordmark in the accent greens only.
- Don't stretch, rotate, outline or add shadows or gradients.
- Don't recolour the mark with the warm colour or place it on a busy photo.
- Don't use the logo in a way that implies customers, certification or endorsement. The product is not launched.

## Files

`public/`: `favicon.svg` (switches colours with `prefers-color-scheme`), `favicon.ico` (16, 32, 48), `apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `og-image.png` (1200x630), `logo-mark.svg`, `logo-wordmark.svg`, `logo-full.svg`, `logo-full-dark.svg`.

## Regenerating everything

```bash
pnpm generate:brand
```

This runs `scripts/generate-brand.mjs` (Node 22.18+, built-in modules only). It rewrites the SVGs, rasterises the PNG icons and the ICO itself (no image library), and renders `og-image.png` through headless Chrome. If Chrome is not at the macOS default path, set `CHROME=/path/to/chrome`. Without Chrome the OG image is skipped and the rest is still written. After changing the name, tagline or colours, run it and commit the results.
