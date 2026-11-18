import { site } from '@/config/site';
import type { PageContent } from './types';

export const home: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Built for the Philippines',
      title: 'Run every room, bed and rent payment from one place.',
      lead: `${site.name} is a rental management platform for Philippine dormitories, apartments and short-stay operators. Take bookings without double booking, verify payments from proof uploads, bill rent on schedule and keep the books straight.`,
      ctas: [
        {
          label: 'Book a demo',
          href: '/contact/',
          variant: 'primary',
        },
        {
          label: 'See how it works',
          href: '/how-it-works/',
          variant: 'secondary',
        },
      ],
      visual: 'dashboard',
      note: 'Illustration of the dashboard.',
    },
    {
      kind: 'cards',
      title: 'Who it is for',
      intro:
        'Property businesses, called clients in the platform, that rent out rooms, beds or whole units.',
      columns: 3,
      items: [
        {
          title: 'Dormitories and bedspaces',
          body: 'Book by bed, set private or shared rooms with gender rules, bill monthly and track meter readings and housekeeping.',
          href: '/features/dormitories/',
        },
        {
          title: 'Apartments and long-term rentals',
          body: 'Contracts with e-signature, recurring invoices, deposits, renewals and clear move-in and move-out steps.',
          href: '/features/apartments/',
        },
        {
          title: 'Short-stay operators',
          body: 'Nightly rates, a live availability calendar, share links and a booking page, with a payment hold timer.',
          href: '/features/short-stays/',
        },
      ],
    },
    {
      kind: 'cards',
      title: 'Key capabilities',
      intro: 'Everything you need to run rentals, end to end.',
      columns: 4,
      tone: 'tinted',
      items: [
        {
          title: 'Property tree',
          body: 'Property, building, floor, unit, room and bed, each bookable whole, in parts or both.',
        },
        {
          title: 'Bookings without double booking',
          body: 'Of many simultaneous requests for the same bed, exactly one succeeds.',
        },
        {
          title: 'Payment by proof',
          body: 'Tenants upload proof of a bank, e-wallet or cash payment. Staff verify it. No payment gateway.',
        },
        {
          title: 'Billing',
          body: 'Recurring invoices with proration, late fees, utility charges and a deposit ledger.',
        },
        {
          title: 'Contracts and inspections',
          body: 'Templates, e-signature, and move-in and move-out inspections with photos that work offline.',
        },
        {
          title: 'Maintenance',
          body: 'Tickets from tenants, staff or inspection findings, with costs that can be charged to a tenant.',
        },
        {
          title: 'Messaging',
          body: 'One thread between a tenant and the business, plus threads tied to a booking, invoice or ticket.',
        },
        {
          title: 'Reports and books',
          body: 'Occupancy, rent roll, overdue list and a double-entry books view with a trial balance.',
        },
      ],
    },
    {
      kind: 'steps',
      title: 'How it works in three steps',
      items: [
        {
          title: 'A partner onboards the business',
          body: 'Partners create the client, pick a plan and send an invitation. The owner completes the business profile and payment accounts.',
        },
        {
          title: 'The business sets up and takes bookings',
          body: 'Build the property tree, add rate plans and policies, then take requests from the panel, the apps, share links or a booking page.',
        },
        {
          title: 'Tenants pay, move in and stay',
          body: 'Tenants upload payment proof, sign the contract and move in after an inspection. Billing and reminders run from then on.',
        },
      ],
    },
    {
      kind: 'split',
      title: 'Made for how rentals work in the Philippines',
      paragraphs: [
        'Pesos only, the Asia/Manila time zone, English and Filipino, and manual payment verification instead of a payment gateway.',
        'Documents and settings are designed with the Data Privacy Act, BIR invoice requirements and rent-cap rules in mind. Regulatory values are treated as unverified until counsel confirms them.',
      ],
      bullets: [
        'Philippine peso (PHP) as the only currency',
        'Asia/Manila time for billing days and check-in dates',
        'English and Filipino in the apps',
      ],
      visual: 'locale',
      link: { label: 'More on the Philippines fit', href: '/philippines/' },
    },
    {
      kind: 'split',
      title: 'Security by design, honestly described',
      paragraphs: [
        'Each business sees only its own data. That is enforced in the application and again in the database with row-level security, and tests are designed to prove it.',
        'Every create, edit, delete and approval is written to an append-only audit log. Compliance review by counsel is still pending.',
      ],
      visual: 'isolation',
      reverse: true,
      link: { label: 'Read the security page', href: '/security/' },
    },
    {
      kind: 'split',
      title: 'A partner program for local businesses',
      paragraphs: [
        'Partners onboard property businesses in a territory, support them, and see a read-only commission statement based on verified subscription payments.',
        'Terms are agreed directly with each partner.',
      ],
      visual: 'ledger',
      link: { label: 'For partners', href: '/for-partners/' },
    },
    {
      kind: 'cta',
      title: 'Book a demo',
      body: 'See the platform on your own properties. Tell us about your business and we will reply by email.',
      ctas: [
        {
          label: 'Book a demo',
          href: '/contact/',
          variant: 'primary',
        },
        { label: 'Read the FAQ', href: '/faq/', variant: 'secondary' },
      ],
    },
  ],
};
