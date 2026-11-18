# rental-pm-website: rules for AI agents and developers

Static marketing website for the rental property management platform (working brand: see `src/config/site.ts`). Follows the team conventions of `rental-pm-admin`: Node 22+, pnpm 12.15.0, Next.js 16, Tailwind v4, TypeScript strict, ESLint 9, Prettier, Vitest + Testing Library. Pin exact versions. Do not add a dependency without explaining why and what the alternatives are.

## Honesty rules (hard)

The product is live and the site is a normal marketing site (call to action: "Book a demo"). Do not describe it as in development, unlaunched or "early access". Still never invent proof. Never write:

- testimonials, customer logos or quotes, "trusted by", statistics, percentages, awards, certifications, "bank-grade", uptime or SLA claims, invented prices or commission numbers;
- claims about 2FA, one-time passcodes, SMS, Google or Apple sign-in, GCash, Maya or any payment gateway. None exist. Payments are recorded and verified by hand from proof uploads.
- compliance claims. Data Privacy Act alignment is an intention; regulatory values are unverified until counsel confirms; counsel review is pending.

Describe features as what the platform does. Source of truth for features is `rental-pm-api/docs/REQUIREMENTS.md` (M1 to M17). Do not invent features. `src/test/honesty.test.ts` scans all copy and fails on banned words; its allow-list is documented in that file.

Legal pages (`/privacy`, `/terms`) are clearly marked DRAFT placeholders for counsel.

## Vocabulary

- **client** = the property business (the customer). **tenant** = the renter. Never use "tenant" for multi-tenancy; say client isolation.

## Structure

- Brand strings only in `src/config/site.ts` (name, tagline, description, URL, contact email, socials). Never type the brand name elsewhere (a test enforces it). Logo geometry: `src/config/logo-geometry.mjs`.
- Routes only in `src/config/routes.ts` (nav, footer, sitemap, metadata and tests read it). A new page needs a route entry, `src/content/<page>.ts`, an entry in `src/content/index.ts` and an `app/<path>/page.tsx`.
- Copy lives in `src/content/` (typed `Section` data), not in components, so a Filipino version can be added later.
- No `style` props, third-party scripts, analytics, cookies, external images or hotlinked assets. Use Tailwind classes and the CSS tokens in `globals.css` (light and dark).
- The contact page has no form because there is no backend. Do not add a form that pretends to submit.

## Before saying you are done

`pnpm lint && pnpm typecheck && pnpm test && pnpm build`. Fix every failure. Never disable lint rules, use `any`, or add `@ts-ignore`. Commits follow Conventional Commits.
