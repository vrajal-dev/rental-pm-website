import { site } from '@/config/site';
import type { PageContent } from './types';

export const about: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'About',
      title: 'A rental platform built for Philippine property businesses.',
      lead: `${site.name} is the working name of a rental property management platform for the Philippines.`,
      ctas: [{ label: 'Contact us', href: '/contact/', variant: 'primary' }],
    },
    {
      kind: 'split',
      title: 'Why we built it',
      paragraphs: [
        'Many Philippine dormitories, apartments and short-stay operators run on messages, spreadsheets and paper. Payments arrive as screenshots, double bookings happen, and deposits and move-outs are argued over.',
        'The platform gives them one place to list, book, collect, bill, check in and check out, and to give tenants a phone app for paying, asking and messaging.',
      ],
      visual: 'dashboard',
    },
    {
      kind: 'checklist',
      title: 'What we stand for',
      items: [
        'Built for Philippine dormitories, apartments and short stays.',
        'Pesos, Asia/Manila time, English and Filipino.',
        'Manual payment verification from proof uploads, with no payment gateway.',
        'Each business sees only its own data.',
        'Plain wording: a client is a property business, a tenant is a renter.',
        'Regulatory and tax values are reviewed with local counsel.',
      ],
      columns: 2,
    },
    {
      kind: 'split',
      title: 'How we talk about it',
      paragraphs: [
        'We describe what the platform does in plain words, without inflated claims, and we say clearly what it does not do.',
        'In our wording, a client is a property business, and a tenant is a renter.',
      ],
      visual: 'ledger',
      reverse: true,
    },
    {
      kind: 'cta',
      title: 'Want to see it in action?',
      body: 'Book a demo and we will walk you through it.',
      ctas: [
        {
          label: 'Book a demo',
          href: '/contact/',
          variant: 'primary',
        },
      ],
    },
  ],
};
