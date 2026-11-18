import { about } from './about';
import { contact } from './contact';
import { faq } from './faq';
import { apartments, dormitories, features, shortStays } from './features';
import { home } from './home';
import { howItWorks } from './how-it-works';
import { privacy, terms } from './legal';
import { philippines } from './philippines';
import { pricing } from './pricing';
import { security } from './security';
import { forPartners } from './partners';
import { forTenants } from './tenants';
import type { PageContent } from './types';

/** Content per route path (same keys as src/config/routes.ts). */
export const pageContent: Record<string, PageContent> = {
  '/': home,
  '/features/': features,
  '/features/dormitories/': dormitories,
  '/features/apartments/': apartments,
  '/features/short-stays/': shortStays,
  '/how-it-works/': howItWorks,
  '/for-tenants/': forTenants,
  '/for-partners/': forPartners,
  '/pricing/': pricing,
  '/security/': security,
  '/philippines/': philippines,
  '/about/': about,
  '/faq/': faq,
  '/contact/': contact,
  '/privacy/': privacy,
  '/terms/': terms,
};
