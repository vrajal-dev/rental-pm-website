import type { PageContent } from './types';

export const pricing: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Pricing',
      title: 'Contact us for pricing.',
      lead: 'Pricing has not been decided and is not published. This page explains how plans and the revenue-share model are designed to work, without numbers.',
      ctas: [{ label: 'Contact us', href: '/contact/', variant: 'primary' }],
    },
    {
      kind: 'cards',
      title: 'How plans are designed',
      columns: 3,
      items: [
        {
          title: 'One Philippine price list',
          body: 'Plans are priced monthly or yearly in pesos, from one price list for the Philippines.',
        },
        {
          title: 'Limits and features',
          body: 'A plan sets limits on units and beds, team users, properties and storage, and switches features on or off.',
        },
        {
          title: 'A trial period',
          body: 'Each plan can carry a trial length, set when a partner onboards a client.',
        },
      ],
    },
    {
      kind: 'split',
      title: 'The revenue-share model',
      paragraphs: [
        'In the first release the only billing model is revenue share. A partner agreement sets a revenue share percentage, and the partner’s commission statement is computed from verified subscription payments.',
        'Whether this is the right model for the business is still an open question on our side, so treat it as the current design, not a final offer.',
      ],
      bullets: [
        'Subscriptions are paid by bank transfer and verified by a person',
        'Upgrades take effect immediately with proration; downgrades take effect at the next cycle',
        'After a due date there is a grace period, then read-only mode with no new bookings, then suspension',
        'Tenants keep view access to their own records even then',
        'A full export of the client’s data is available on request',
      ],
      visual: 'ledger',
    },
    {
      kind: 'faq',
      title: 'Pricing questions',
      items: [
        {
          q: 'What does it cost?',
          a: 'We have not published prices. Contact us and we will talk about your business and the plan limits you need.',
        },
        {
          q: 'Is there a free trial?',
          a: 'Plans are designed to have a trial period, but the length is not decided. Ask us when you contact us.',
        },
        {
          q: 'Do tenants pay anything?',
          a: 'The plans are for property businesses. Tenant pricing is not part of the current design.',
        },
        {
          q: 'How do I pay?',
          a: 'Subscription invoices are designed to be paid by bank transfer and verified manually. There is no online card payment.',
        },
        {
          q: 'What happens if I pay late?',
          a: 'After the due date there is a grace period, then read-only mode, then suspension. Your tenants can still view their own records.',
        },
        {
          q: 'Can I take my data with me?',
          a: 'The platform is designed to provide a full export of a client’s data on request.',
        },
      ],
    },
    {
      kind: 'cta',
      title: 'Ask about early access pricing',
      body: 'Send us a short note about your business and we will reply by email.',
      ctas: [{ label: 'Contact us', href: '/contact/', variant: 'primary' }],
    },
  ],
};
