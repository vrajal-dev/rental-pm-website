import type { PageContent } from './types';

export const philippines: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'The Philippines',
      title: 'Built for how rentals work here.',
      lead: 'The platform is designed for the Philippines only, with local currency, time, language and paperwork in mind. Rules and tax values are treated as unverified until local counsel confirms them.',
      ctas: [
        {
          label: 'Request early access',
          href: '/contact/',
          variant: 'primary',
        },
        { label: 'Security', href: '/security/', variant: 'secondary' },
      ],
      visual: 'locale',
    },
    {
      kind: 'cards',
      title: 'Local fit, point by point',
      columns: 3,
      items: [
        {
          title: 'Philippine pesos',
          body: 'PHP is the only currency in the first release. Money is stored in whole centavos, never as decimals that can drift.',
        },
        {
          title: 'Asia/Manila time',
          body: 'Times are stored in UTC and shown in the business’s time zone, which defaults to Asia/Manila. Billing days and check-in dates follow that time zone.',
        },
        {
          title: 'English and Filipino',
          body: 'The mobile apps are built for English and Filipino, with no hard-coded text.',
        },
        {
          title: 'Manual payment proof',
          body: 'Tenants pay the business directly and upload proof. Staff verify it. No payment gateway is involved.',
        },
        {
          title: 'Philippine addresses',
          body: 'A territory master with region, province and city powers partner territory rights, and address autocomplete is planned for forms.',
        },
        {
          title: 'Property types',
          body: 'House, apartment, condominium unit, boarding house, dormitory, bedspace, apartelle, transient house, guesthouse, hostel and office unit.',
        },
      ],
    },
    {
      kind: 'split',
      title: 'BIR-aware documents',
      paragraphs: [
        'The design covers invoice formats with the required fields, VAT and percentage tax computation, and exportable books, with VAT or non-VAT status and withholding tax types in the business’s tax settings.',
        'BIR Computerized Accounting System accreditation is not in the first release, and all tax rules need review by local tax counsel before launch.',
      ],
      visual: 'ledger',
      reverse: true,
    },
    {
      kind: 'split',
      title: 'Rent-cap awareness, under review',
      paragraphs: [
        'For covered residential units, the platform is designed to check rent increases against a configurable cap, and to warn when a business’s deposit or advance settings exceed the configured limits.',
        'The cap, deposit and advance limits, VAT and withholding rates are stored as editable, dated values, and each is marked unverified until counsel confirms it. We do not present any of them as current law.',
      ],
      visual: 'calendar',
    },
    {
      kind: 'split',
      title: 'Data Privacy Act and electronic contracts',
      paragraphs: [
        'Privacy is designed around consent, a privacy notice, data subject rights, a breach procedure and a data processing agreement. Electronic contracts and signatures are designed with an audit trail in line with the E-Commerce Act.',
        'All of this is subject to verification by local counsel before release.',
      ],
      visual: 'isolation',
      reverse: true,
      link: { label: 'Security page', href: '/security/' },
    },
    {
      kind: 'callout',
      title: 'Counsel review is pending',
      body: [
        'Data Privacy Act, Rent Control, BIR, E-Commerce and messaging rules have not been verified by counsel. Treat this page as a statement of design intent.',
      ],
      tone: 'warning',
    },
    {
      kind: 'cta',
      title: 'Operate in the Philippines?',
      body: 'We would like to hear about your local needs.',
      ctas: [{ label: 'Contact us', href: '/contact/', variant: 'primary' }],
    },
  ],
};
