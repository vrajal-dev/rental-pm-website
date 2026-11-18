import { site } from '@/config/site';

// UI strings shared by the layout. Page copy lives in the other content files.
export const ui = {
  skipLink: 'Skip to main content',
  stageBanner: `${site.name} is in development and has not launched. This site describes what the platform is being built to do.`,
  stageBannerLink: 'Read about the project stage',
  primaryCta: 'Request early access',
  demoCta: 'Request a demo',
  navLabel: 'Main',
  menuOpen: 'Menu',
  footerNavLabel: 'Footer',
  footerBlurb: `${site.tagline}. In development: no customers, no launch date.`,
  footerLegalNote:
    'Privacy Policy and Terms are drafts and have not been reviewed by counsel.',
  footerHeadings: {
    product: 'Product',
    audiences: 'Who it is for',
    company: 'Company',
    legal: 'Legal (draft)',
  },
  notFound: {
    title: 'Page not found',
    body: 'That page does not exist or has moved. Try one of these instead.',
    home: 'Go to the home page',
  },
  copyright: 'All rights reserved. Not yet launched.',
} as const;
