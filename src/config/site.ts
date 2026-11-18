// The ONE place for brand strings. To rename the product, change `name` here
// (and the other values below when they are decided). Nothing else in the repo
// may contain the brand name as a literal (a test enforces this).
export const site = {
  // Chosen by the owner: Leasewell (English, not Philippine-themed).
  // TODO: trademark and domain checks are still PENDING. Do not treat the name
  // or any domain as cleared until they are done.
  name: 'Leasewell',
  // DRAFT tagline; change freely.
  tagline:
    'Rental management for Philippine dormitories, apartments and short stays',
  description:
    'Software for dormitories, apartments and short-stay operators in the Philippines: bookings without double booking, manual payment verification, billing, inspections and books. In development.',
  // PLACEHOLDER: the domain is NOT chosen or verified. example.com is reserved
  // for documentation. Set the real production URL once a domain is secured.
  url: 'https://www.example.com',
  // TODO: replace with the real contact mailbox before launch.
  contactEmail: 'hello@example.com',
  locale: 'en_PH',
  language: 'en',
  country: 'Philippines',
  // No social accounts exist yet. Add { label, href } entries when they do;
  // the footer and the Organization JSON-LD pick them up.
  socialLinks: [] as { label: string; href: string }[],
  // The contact page has no form because no backend exists. When one does,
  // set the endpoint here and render a form on /contact (see README).
  contactFormEndpoint: null as string | null,
} as const;

export type Site = typeof site;
