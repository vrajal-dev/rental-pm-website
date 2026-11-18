import type { PageContent } from './types';

export const forTenants: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'For tenants',
      title: 'Your rentals, payments and requests in one app.',
      lead: 'The Tenant App is for renters in the Philippines. Book, pay by proof, sign, ask for repairs and message your landlord from your phone.',
      ctas: [
        {
          label: 'Book a demo',
          href: '/contact/',
          variant: 'primary',
        },
        {
          label: 'For property businesses',
          href: '/features/',
          variant: 'secondary',
        },
      ],
      visual: 'phone',
      note: 'Illustration of the Tenant App.',
    },
    {
      kind: 'cards',
      title: 'What the Tenant App does',
      columns: 3,
      items: [
        {
          title: 'One login, many rentals',
          body: 'Switch between the businesses you rent from and see a combined summary of rentals and dues.',
        },
        {
          title: 'Book',
          body: 'Request a booking from a share link or a business’s catalog.',
        },
        {
          title: 'Pay by proof',
          body: 'See bank details and QR codes, upload proof of payment, and keep your history, receipts and statements.',
        },
        {
          title: 'Contracts',
          body: 'View, e-sign and download your contract.',
        },
        {
          title: 'Requests',
          body: 'Raise maintenance, renewal, extension, transfer and notice to vacate requests.',
        },
        { title: 'Utilities', body: 'See meter readings and utility bills.' },
        {
          title: 'Messages',
          body: 'Chat with each business, with context threads for a booking, invoice or ticket.',
        },
        {
          title: 'Notices',
          body: 'Read announcements and notifications from the business.',
        },
        {
          title: 'Profile and documents',
          body: 'Keep your ID documents in your own profile and share them with each business only with your consent.',
        },
      ],
    },
    {
      kind: 'split',
      title: 'Your data stays yours',
      paragraphs: [
        'You own your profile and documents. A business sees them only after you consent, and you can revoke that. A business never sees your activity with another business.',
        'The app is designed to let you access, correct, delete and export your data.',
      ],
      bullets: [
        'Consent is given per business and can be withdrawn',
        'Expiry reminders for documents that lapse',
        'ID and bank numbers are masked unless a person has permission to see them',
      ],
      visual: 'isolation',
      link: { label: 'Security and privacy', href: '/security/' },
    },
    {
      kind: 'steps',
      title: 'A typical rental in the app',
      items: [
        {
          title: 'Request',
          body: 'Open a share link and send a booking request.',
        },
        {
          title: 'Pay',
          body: 'Pay the business using the details shown, then upload your proof.',
        },
        {
          title: 'Sign and move in',
          body: 'Sign the contract in the app and attend the move-in inspection.',
        },
        {
          title: 'Stay',
          body: 'Get invoices and reminders, read your meters, and message the business.',
        },
      ],
    },
    {
      kind: 'callout',
      title: 'Not a payment app',
      body: [
        'The platform does not move money. You pay the business directly, for example by bank transfer, and upload proof. The business verifies it.',
      ],
      tone: 'info',
    },
    {
      kind: 'cta',
      title: 'Renting from a business that might use this?',
      body: 'Ask them to get in touch, or tell us you are interested.',
      ctas: [{ label: 'Contact us', href: '/contact/', variant: 'primary' }],
    },
  ],
};
