import { describe, expect, it } from 'vitest';
import { routes } from '@/config/routes';
import { site } from '@/config/site';
import * as about from '@/content/about';
import * as contact from '@/content/contact';
import * as faq from '@/content/faq';
import * as features from '@/content/features';
import * as home from '@/content/home';
import * as how from '@/content/how-it-works';
import * as legal from '@/content/legal';
import * as partners from '@/content/partners';
import * as philippines from '@/content/philippines';
import * as pricing from '@/content/pricing';
import * as security from '@/content/security';
import * as tenants from '@/content/tenants';
import * as ui from '@/content/ui';

// Collect every string in the content modules, routes and site config.
function strings(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => strings(v, out));
  else if (value && typeof value === 'object') {
    Object.values(value).forEach((v) => strings(v, out));
  }
  return out;
}

const all = strings([
  about,
  contact,
  faq,
  features,
  home,
  how,
  legal,
  partners,
  philippines,
  pricing,
  security,
  tenants,
  ui,
  routes,
  site,
]).filter((s) => !s.startsWith('/') && !s.startsWith('mailto:'));

// Words that must never appear, even negated: the product has no customers,
// no audit, no certification, and no such integrations.
const NEVER: RegExp[] = [
  /trusted by/i,
  /testimonial/i,
  /certified/i,
  /\bSLA\b/,
  /99\.9/,
  /bank-grade/i,
  /gcash/i,
  /\bmaya\b/i,
  /\b2FA\b/,
  /\bSMS\b/,
  /\bOTP\b/,
  /award/i,
  /uptime/i,
  /guarantee/i,
  /ISO ?27001/i,
  /SOC ?2/i,
  /PCI/,
  /military/i,
  /\d\s?%/, // no statistics or percentages
  /\d+\+? (customers|clients|users|businesses|properties)/i,
];

// Terms that may appear only in a sentence that also says they are NOT
// available or are planned. ALLOWED_IF_NEGATED documents the allow-list.
const NEGATION =
  /\b(no|not|never|without|isn't|yet|still|pending|planned|deferred|instead of|neither)\b/i;
const ALLOWED_IF_NEGATED: RegExp[] = [
  /payment gateway/i,
  /two-factor/i,
  /Google and Apple/i,
  /penetration test/i,
  /compl(y|iance|iant)/i,
  /legal review/i,
];

function sentences(text: string): string[] {
  return text.split(/(?<=[.!?:])\s+/);
}

describe('honesty rules', () => {
  it('scans a meaningful amount of copy', () => {
    expect(all.length).toBeGreaterThan(300);
  });

  it.each(NEVER.map((r) => [r.source, r] as const))(
    'never uses banned claim %s',
    (_, re) => {
      const hits = all.filter((s) => re.test(s));
      expect(hits).toEqual([]);
    },
  );

  it('only mentions allow-listed claims inside a negated or planned sentence', () => {
    const bad: string[] = [];
    for (const text of all) {
      for (const sentence of sentences(text)) {
        for (const term of ALLOWED_IF_NEGATED) {
          const isQuestion = sentence.trim().endsWith('?');
          if (term.test(sentence) && !isQuestion && !NEGATION.test(sentence))
            bad.push(sentence);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('marks the legal pages as drafts for counsel review', () => {
    const text = strings(legal).join(' ');
    expect(text).toMatch(/DRAFT/);
    expect(text).toMatch(/counsel/i);
  });

  it('says the product has not launched, on the home page copy and the banner', () => {
    expect(strings(home).join(' ')).toMatch(/in development/i);
    expect(ui.ui.stageBanner).toMatch(/has not launched/i);
  });

  it('publishes no prices on the pricing page', () => {
    expect(strings(pricing).join(' ')).not.toMatch(
      /[₱$]\s?\d|PHP\s?\d|\d[\d,]*\s?(pesos|php)/i,
    );
  });
});
