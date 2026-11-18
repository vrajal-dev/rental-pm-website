import type { PageContent } from './types';

export const forPartners: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'For partners',
      title: 'Bring property businesses onto the platform.',
      lead: 'Partners onboard and support dormitories, apartments and short-stay operators in a territory. Partner terms are agreed directly.',
      ctas: [
        {
          label: 'Talk to us about partnering',
          href: '/contact/',
          variant: 'primary',
        },
        { label: 'See pricing model', href: '/pricing/', variant: 'secondary' },
      ],
      visual: 'ledger',
    },
    {
      kind: 'cards',
      title: 'What a partner does',
      columns: 3,
      items: [
        {
          title: 'Onboard clients',
          body: 'Enter business details, choose a plan and trial, and send an invitation email. The territory is derived from the business address.',
        },
        {
          title: 'Avoid duplicates',
          body: 'Duplicate clients are detected by registration number, TIN, email and mobile. In non-exclusive territories the first partner owns the client.',
        },
        {
          title: 'See your clients',
          body: 'A client list with plan, status, usage and renewal date.',
        },
        {
          title: 'Support them',
          body: 'Raise and track support tickets. Your name, logo and contact appear on the client’s support screen.',
        },
        {
          title: 'Work as a team',
          body: 'Partner sub-users with roles: Partner Admin, Partner Sales and Partner Support.',
        },
        {
          title: 'Read your statement',
          body: 'A read-only commission statement computed from verified subscription payments. Payouts are recorded by the platform’s Super Admin.',
        },
      ],
    },
    {
      kind: 'split',
      title: 'Territory rights',
      paragraphs: [
        'A partner agreement names a territory from the Philippine address hierarchy of region, province and city, whether the right is exclusive or non-exclusive, the term, and the revenue share.',
        'The platform blocks an exclusive right that overlaps an active right in the same territory, including parent and child territories.',
      ],
      visual: 'locale',
      reverse: true,
    },
    {
      kind: 'split',
      title: 'Privacy between partner and client',
      paragraphs: [
        'A partner has no access to a client’s operational data. The only way in is time-limited support access that the client grants.',
      ],
      visual: 'isolation',
    },
    {
      kind: 'callout',
      title: 'No numbers yet',
      body: [
        'This page publishes no commission rates, targets or earnings examples. They have not been decided, and the platform has no customers yet.',
      ],
      tone: 'warning',
    },
    {
      kind: 'cta',
      title: 'Interested in becoming a partner?',
      body: 'Tell us your territory and the kind of property businesses you know.',
      ctas: [{ label: 'Contact us', href: '/contact/', variant: 'primary' }],
    },
  ],
};
