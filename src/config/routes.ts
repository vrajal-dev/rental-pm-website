// The ONE route list. The header, footer, sitemap, metadata and tests all read
// it. Titles and descriptions are unique per page (a test enforces this).
// Titles do not contain the brand name: the layout appends it.

export type NavGroup = 'primary' | 'company' | 'legal' | 'none';

export interface RouteDef {
  path: string;
  label: string;
  title: string;
  description: string;
  nav: NavGroup;
  /** Shown under "Features" in the footer. */
  featureChild?: boolean;
  priority: number;
}

export const routes: RouteDef[] = [
  {
    path: '/',
    label: 'Home',
    title: 'Rental property management for the Philippines',
    description:
      'Software being built for Philippine dormitories, apartments and short-stay operators: bookings without double booking, payment proof verification, billing, inspections and books.',
    nav: 'none',
    priority: 1,
  },
  {
    path: '/features/',
    label: 'Features',
    title: 'Features overview',
    description:
      'What the platform is built to do: property tree, rate plans, bookings, payments by proof, billing, contracts, inspections, maintenance, messaging, reports and books.',
    nav: 'primary',
    priority: 0.9,
  },
  {
    path: '/features/dormitories/',
    label: 'Dormitories',
    title: 'Features for dormitories and bedspaces',
    description:
      'Bed-level booking, shared rooms with gender rules, monthly billing, utilities, inspections and housekeeping for dormitories and boarding houses.',
    nav: 'none',
    featureChild: true,
    priority: 0.8,
  },
  {
    path: '/features/apartments/',
    label: 'Apartments',
    title: 'Features for apartments and long-term rentals',
    description:
      'Contracts with e-signature, recurring invoices, deposits, renewals, move-in and move-out workflows and a rent roll for apartment and condominium landlords.',
    nav: 'none',
    featureChild: true,
    priority: 0.8,
  },
  {
    path: '/features/short-stays/',
    label: 'Short stays',
    title: 'Features for short-stay operators',
    description:
      'Nightly rates, a live availability calendar, share links and booking pages, a payment hold timer and cleaning buffers for apartelles, guesthouses and transient houses.',
    nav: 'none',
    featureChild: true,
    priority: 0.8,
  },
  {
    path: '/how-it-works/',
    label: 'How it works',
    title: 'How it works',
    description:
      'From a partner onboarding a business, to setting up properties, taking bookings, verifying payment proofs, billing rent and running move-in and move-out.',
    nav: 'primary',
    priority: 0.9,
  },
  {
    path: '/for-tenants/',
    label: 'For tenants',
    title: 'For tenants: the renter app',
    description:
      'The mobile app being built for renters: request a booking, see bank details and QR codes, upload payment proof, sign contracts, raise requests and message the business.',
    nav: 'primary',
    priority: 0.8,
  },
  {
    path: '/for-partners/',
    label: 'For partners',
    title: 'For partners: the partner program',
    description:
      'How partners onboard property businesses, hold territory rights and see commission statements. The partner program is being designed; terms are agreed directly.',
    nav: 'primary',
    priority: 0.8,
  },
  {
    path: '/pricing/',
    label: 'Pricing',
    title: 'Pricing: contact us',
    description:
      'Pricing is not published yet. Learn how plans and the revenue-share model are designed to work, and contact us for details.',
    nav: 'primary',
    priority: 0.8,
  },
  {
    path: '/security/',
    label: 'Security',
    title: 'Security and data protection',
    description:
      'Designed controls: per-business data isolation in the database, an append-only audit log, hashed passwords, rotating session tokens and a Data Privacy Act aligned design. Counsel review pending.',
    nav: 'primary',
    priority: 0.8,
  },
  {
    path: '/philippines/',
    label: 'Philippines',
    title: 'Built for the Philippines',
    description:
      'Pesos only, the Asia/Manila time zone, English and Filipino, manual payment proof, BIR-aware documents, Data Privacy Act alignment and rent-cap awareness under review.',
    nav: 'primary',
    priority: 0.8,
  },
  {
    path: '/about/',
    label: 'About',
    title: 'About the project',
    description:
      'Why this platform is being built, what stage it is at, and how we describe it honestly: in development, not yet launched, no customers yet.',
    nav: 'company',
    priority: 0.5,
  },
  {
    path: '/faq/',
    label: 'FAQ',
    title: 'Frequently asked questions',
    description:
      'Straight answers about the product stage, payments, languages, data, partners and early access.',
    nav: 'company',
    priority: 0.6,
  },
  {
    path: '/contact/',
    label: 'Contact',
    title: 'Request early access or a demo',
    description:
      'Email us to request early access or a conversation about a demo. There is no web form yet; the page tells you what to include.',
    nav: 'company',
    priority: 0.7,
  },
  {
    path: '/privacy/',
    label: 'Privacy Policy (draft)',
    title: 'Privacy Policy (draft)',
    description:
      'Draft placeholder text for the website privacy policy. It must be reviewed by counsel before launch and is not final.',
    nav: 'legal',
    priority: 0.2,
  },
  {
    path: '/terms/',
    label: 'Terms (draft)',
    title: 'Terms of Use (draft)',
    description:
      'Draft placeholder text for the website terms of use. It must be reviewed by counsel before launch and is not final.',
    nav: 'legal',
    priority: 0.2,
  },
];

export function getRoute(path: string): RouteDef {
  const route = routes.find((r) => r.path === path);
  if (!route) throw new Error(`Unknown route: ${path}`);
  return route;
}

export const primaryNav = routes.filter((r) => r.nav === 'primary');
export const companyNav = routes.filter((r) => r.nav === 'company');
export const legalNav = routes.filter((r) => r.nav === 'legal');
export const featureChildren = routes.filter((r) => r.featureChild);
