import { site } from '@/config/site';
import type { PageContent } from './types';

export const howItWorks: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'How it works',
      title: 'From onboarding to move-out, one flow.',
      lead: `This is the journey ${site.name} is designed around, from a partner signing up a property business to a tenant moving out and getting a settlement.`,
      ctas: [
        {
          label: 'Request early access',
          href: '/contact/',
          variant: 'primary',
        },
        { label: 'Features', href: '/features/', variant: 'secondary' },
      ],
      visual: 'dashboard',
    },
    {
      kind: 'steps',
      title: '1. A partner onboards the client',
      intro:
        'Partners are local businesses that sign up and support property businesses. In the platform, the property business is the client.',
      items: [
        {
          title: 'Create the client',
          body: 'The partner enters business details, picks a plan and trial, and sends an invitation by email.',
        },
        {
          title: 'Checks run',
          body: 'The territory comes from the business address and must fall under the partner’s active right. Duplicate clients are detected by registration number, TIN, email and mobile.',
        },
        {
          title: 'Owner joins',
          body: 'The owner accepts the invitation, completes the business profile and adds payment receiving accounts.',
        },
      ],
    },
    {
      kind: 'split',
      title: '2. The client sets up properties',
      paragraphs: [
        'The owner builds the property tree with buildings, floors, units, rooms and beds, or imports it from an Excel or CSV file with a validation report.',
        'Then come rate plans, deposits, policies for cancellation, refunds, late fees and house rules, document numbering and tax settings, and the team with roles and property scope.',
      ],
      bullets: [
        'Business profile, time zone and payment accounts',
        'Excel and CSV import for properties, units, rooms, beds, tenants, active leases and opening balances',
        'Document numbering series without gaps',
      ],
      visual: 'tree',
    },
    {
      kind: 'split',
      title: '3. Tenants book and pay by proof',
      paragraphs: [
        'A request arrives from a share link, the booking page, the Tenant App or staff. Staff approve it, or it is approved automatically for the unit type.',
        'The tenant sees the bank, e-wallet or QR details with the amount and a reference number, pays outside the platform, and uploads proof. Staff verify it, and the booking is Confirmed.',
      ],
      bullets: [
        'A hold timer releases the unit if no proof arrives in time',
        'Duplicate proofs are flagged',
        'Staff can approve in full or in part, reject with a reason, or ask a question',
      ],
      visual: 'proof',
      reverse: true,
    },
    {
      kind: 'steps',
      title: '4. Billing, move-in and move-out',
      items: [
        {
          title: 'Contract and move-in',
          body: 'The contract is e-signed, advance and deposit are verified, and a move-in inspection is done before keys are issued.',
        },
        {
          title: 'Monthly billing',
          body: 'Recurring invoices, utility charges and late fees are generated, and tenants get reminders and receipts.',
        },
        {
          title: 'Renewal or notice',
          body: 'A renewal offer is accepted in the app, or notice to vacate is validated against the notice period.',
        },
        {
          title: 'Move-out',
          body: 'Final readings and inspection, deductions linked to findings, a settlement statement and the deposit refund.',
        },
      ],
    },
    {
      kind: 'split',
      title: 'And through it all',
      paragraphs: [
        'Messaging keeps the conversation with each tenant in one thread, maintenance tickets move through staff, and the dashboard shows what needs attention today.',
        'Every posting lands in a double-entry ledger, so the books can be reviewed at any time.',
      ],
      visual: 'ledger',
      link: { label: 'See all features', href: '/features/' },
    },
    {
      kind: 'callout',
      title: 'A note on stage',
      body: [
        'This describes the designed flow. The platform is in development and has not launched, so some steps are not yet available to try.',
      ],
      tone: 'info',
    },
    {
      kind: 'cta',
      title: 'Want to follow along?',
      body: 'Request early access and tell us which step matters most to you.',
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
