import { site } from '@/config/site';
import type { PageContent } from './types';

export const about: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'About',
      title: 'A rental platform, built openly and not launched yet.',
      lead: `${site.name} is the working name of a rental property management platform for the Philippines. This page says where the project honestly stands.`,
      ctas: [{ label: 'Contact us', href: '/contact/', variant: 'primary' }],
    },
    {
      kind: 'split',
      title: 'Why it is being built',
      paragraphs: [
        'Many Philippine dormitories, apartments and short-stay operators run on messages, spreadsheets and paper. Payments arrive as screenshots, double bookings happen, and deposits and move-outs are argued over.',
        'The platform is meant to give them one place to list, book, collect, bill, check in and check out, and to give tenants a phone app for paying, asking and messaging.',
      ],
      visual: 'dashboard',
    },
    {
      kind: 'checklist',
      title: 'Where the project stands',
      items: [
        'In development. Not launched.',
        'No customers and no completed pilots.',
        'A pilot with a small number of businesses is planned before a wider release.',
        'The brand name is a placeholder and will change.',
        'Prices, partner terms and legal documents are not final.',
        'Regulatory and tax values need review by local counsel.',
      ],
      columns: 2,
    },
    {
      kind: 'split',
      title: 'How we write about it',
      paragraphs: [
        'This site shows no customer quotes, logos, statistics, prizes or availability promises, because none exist yet. We describe what the platform is built to do, and we say plainly what is not done.',
        'In our wording, a client is a property business, and a tenant is a renter.',
      ],
      visual: 'ledger',
      reverse: true,
    },
    {
      kind: 'cta',
      title: 'Want to shape it with us?',
      body: 'Early conversations are the most useful thing right now.',
      ctas: [
        {
          label: 'Request early access',
          href: '/contact/',
          variant: 'primary',
        },
      ],
    },
  ],
};
