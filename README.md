# rental-pm-website

Static marketing website for a rental property management platform aimed at the Philippines (dormitories, apartments, short-stay operators). The current brand name is **Leasewell**, set in one config file.

> **The product is not launched.** There are no customers and no pilots. The site says so, and contains no testimonials, logos, statistics, prices or compliance claims. See [Honesty rules](#honesty-rules).

Built with Next.js 16 (App Router, `output: 'export'`), React 19, Tailwind CSS v4, TypeScript strict. Content comes from `rental-pm-api/docs/REQUIREMENTS.md`.

## Commands

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm test           # Vitest + Testing Library
pnpm build          # static site in out/, then writes out/_headers
pnpm format
pnpm generate:brand # regenerate logo and icon files (see docs/BRAND.md)
```

Requires Node 22+ (22.18+ for `generate:brand`) and pnpm 12.15.0. To preview the build: `cd out && python3 -m http.server 8765`.

## Pages

`/`, `/features` (+ `/dormitories`, `/apartments`, `/short-stays`), `/how-it-works`, `/for-tenants`, `/for-partners`, `/pricing`, `/security`, `/philippines`, `/about`, `/faq`, `/contact`, `/privacy` and `/terms` (drafts), a custom 404, `sitemap.xml`, `robots.txt` and `manifest.webmanifest`. The sitemap, navigation, footer and metadata are all built from one list: `src/config/routes.ts`.

## Rename the brand

Change `name` (and `tagline`, `description`) in `src/config/site.ts`, then run `pnpm generate:brand` and commit the regenerated files in `public/`. The header, footer, titles, JSON-LD, manifest, OG image and copy all read the config. The drawn wordmark covers only some letters; if the new name needs others, add glyphs in `src/config/logo-geometry.mjs` (the generator tells you). A test fails if the brand name is typed anywhere outside the config.

## Placeholders and pending checks

- **Brand name:** Leasewell was chosen by the owner. A **trademark check has NOT been done**, and **no domain has been chosen or verified**. Do not treat either as cleared.
- **Domain / URL:** `https://www.example.com` in `site.url` is a placeholder (example.com is reserved for documentation). Set the real URL before deploying: canonical links, the sitemap and Open Graph all use it.
- **Contact email:** `hello@example.com` in `site.contactEmail` is a placeholder (TODO in the config). It feeds the mailto links on `/contact`, the JSON-LD and the draft legal pages.
- **Legal text:** `/privacy` and `/terms` are DRAFT placeholders that must be reviewed by counsel before launch.
- **Pricing:** no prices exist; `/pricing` says "contact us" and explains the revenue-share model without numbers.
- **Tagline:** a draft.
- **Contact form:** there is none, because there is no backend. `site.contactFormEndpoint` is `null`; when an endpoint exists, set it and render a form on `/contact`.
- **Filipino:** copy is English only; content is separated into `src/content/` to make a translation possible.

## Honesty rules

No fake testimonials, customer logos, statistics, "trusted by", awards, certifications, uptime or SLA claims, invented prices, or "bank-grade" language. No claims about two-factor sign-in, SMS, one-time passcodes, GCash, Maya or payment gateways: none are built, and payments are manual proof uploads. The Security page lists only controls that exist in the API code or are clearly labelled as designed or planned, and promises no compliance sign-off. `src/test/honesty.test.ts` enforces this on all copy; its allow-list (terms allowed only in a negated or "planned" sentence) is documented there.

## Deploying as a static site

`pnpm build` produces `out/`. Upload it to any static host (Cloudflare Pages, Netlify, S3 plus a CDN, nginx). Folder URLs such as `/features/` map to `out/features/index.html`; `404.html` is the not-found page.

**Security headers.** A static export cannot set HTTP headers, and a CSP in a `<meta>` tag cannot express `frame-ancestors` and would need the hashes to change each build. So:

- `scripts/csp-headers.mjs` runs after `next build` and writes `out/_headers` (Netlify and Cloudflare Pages format): one rule per page with a strict CSP listing the SHA-256 hash of each inline script Next.js emits on that page, no `unsafe-inline`, no external origins, plus `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy`. Per-page rules keep each header line under host length limits.
- `public/_headers` is a committed, simpler example (it allows inline scripts); the build output replaces it.
- On other hosts (nginx, S3 and CloudFront), copy the same headers from `out/_headers` into the host configuration.
- The CSP was generated from the built HTML; verify it in the browser console on the first deploy.

The site sets no cookies and loads no third-party scripts, fonts, images or analytics.

## Dependencies (exact versions, same as `rental-pm-admin`)

| Package                                                                 | Version                 | Why                       |
| ----------------------------------------------------------------------- | ----------------------- | ------------------------- |
| next                                                                    | 16.4.6                  | Framework, static export  |
| react, react-dom                                                        | 19.3.1                  | UI                        |
| tailwindcss, @tailwindcss/postcss                                       | 4.3.5                   | Styling and design tokens |
| typescript                                                              | 5.9.3                   | Strict typing             |
| @types/node, @types/react, @types/react-dom                             | 24.19.2, 19.3.0, 19.3.0 | Types                     |
| eslint, eslint-config-next                                              | 9.39.5, 16.4.6          | Linting (flat config)     |
| prettier                                                                | 3.10.1                  | Formatting                |
| vitest                                                                  | 4.1.12                  | Test runner               |
| jsdom                                                                   | 31.0.1                  | DOM for tests             |
| @testing-library/react, @testing-library/dom, @testing-library/jest-dom | 16.3.3, 10.4.2, 7.0.1   | Component tests           |

No other dependencies. Logo and icon generation use only Node built-ins plus headless Chrome for the OG image.

## Layout

```
src/config/   site.ts (brand), routes.ts, logo-geometry.mjs
src/content/  copy per page, typed sections
src/components/  header, footer, logo, section renderer, illustrations
src/app/      routes, layout, sitemap, robots, manifest, not-found
src/test/     page, navigation, brand and honesty tests
scripts/      generate-brand.mjs, csp-headers.mjs
public/       logo and icon assets, _headers
docs/BRAND.md colours, clear space, regeneration
```
