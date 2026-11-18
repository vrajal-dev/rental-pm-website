import { site } from '@/config/site';
import type { PageContent } from './types';

export const faq: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      lead: 'Straight answers, including where the answer is “not yet”.',
      ctas: [
        {
          label: 'Ask us something else',
          href: '/contact/',
          variant: 'primary',
        },
      ],
    },
    {
      kind: 'faq',
      title: 'The product',
      items: [
        {
          q: `Is ${site.name} available now?`,
          a: 'No. It is in development and has not launched. You can request early access.',
        },
        {
          q: 'Who is it for?',
          a: 'Property businesses in the Philippines that rent rooms, beds or units: dormitories, apartments and short-stay operators. We call these businesses clients.',
        },
        {
          q: 'What do tenants use?',
          a: 'A mobile app for Android and iOS to book, upload payment proof, sign contracts, raise requests and message the business. We call renters tenants.',
        },
        {
          q: 'Does the Owner App work offline?',
          a: 'It is designed to. Inspections, check-in and check-out, and meter readings can be recorded without signal and synced later without duplicates.',
        },
        {
          q: 'Which languages and currency?',
          a: 'English and Filipino, and Philippine pesos only, in the first release.',
        },
      ],
    },
    {
      kind: 'faq',
      title: 'Payments',
      items: [
        {
          q: 'Does it process payments?',
          a: 'No. There is no payment gateway. Tenants pay the business directly, for example by bank transfer, and upload proof. Staff verify it.',
        },
        {
          q: 'Can I see bank details and QR codes on invoices?',
          a: 'Yes, by design. The business enters its bank, e-wallet and QR details, and they appear with the amount and a reference number.',
        },
        {
          q: 'What if someone uploads the same proof twice?',
          a: 'The platform is designed to flag duplicates by reference, image hash, and amount, date and channel.',
        },
      ],
    },
    {
      kind: 'faq',
      title: 'Data and security',
      items: [
        {
          q: 'Can one business see another’s data?',
          a: 'It is designed not to. Isolation is enforced in the application and in the database with row-level security. See the security page.',
        },
        {
          q: 'Is it compliant with the Data Privacy Act?',
          a: 'We design with it in mind, but no counsel review is complete, so we do not claim compliance.',
        },
        {
          q: 'Is two-factor sign-in available?',
          a: 'Not yet. It is planned and must be built before launch.',
        },
        {
          q: 'Are the rent-cap and tax values correct?',
          a: 'They are stored as editable, dated values marked unverified until counsel confirms them.',
        },
      ],
    },
    {
      kind: 'faq',
      title: 'Partners and pricing',
      items: [
        {
          q: 'What is a partner?',
          a: 'A business that onboards and supports property businesses in a territory. See the partner page.',
        },
        { q: 'What does it cost?', a: 'Pricing is not published. Contact us.' },
        {
          q: 'How do I request early access?',
          a: 'Email us from the contact page. There is no web form yet.',
        },
      ],
    },
    {
      kind: 'cta',
      title: 'Still have a question?',
      body: 'Email us and we will answer honestly.',
      ctas: [{ label: 'Contact us', href: '/contact/', variant: 'primary' }],
    },
  ],
};
