import type { PageContent } from './types';

const early = { label: 'Book a demo', href: '/contact/' };

export const features: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Features',
      title: 'Everything a rental business does, in one platform.',
      lead: 'Everything the platform does, grouped by area.',
      ctas: [
        { ...early, variant: 'primary' },
        { label: 'How it works', href: '/how-it-works/', variant: 'secondary' },
      ],
      visual: 'tree',
    },
    {
      kind: 'split',
      title: 'A property tree that matches your building',
      paragraphs: [
        'Model a property as property, building, floor, unit, room and bed. Building and floor are optional, and a property can be a single bookable unit.',
        'Each level can be bookable whole, in parts, or both. Booking a parent blocks all its children, booking a child blocks the parent as a whole, and siblings stay available.',
      ],
      bullets: [
        'Private rooms or shared rooms by bed, with male, female or mixed rules',
        'Area, bedrooms, bathrooms, furnishing, inclusions, tags and photos',
        'Furniture and appliance inventory with condition',
        'Statuses from Vacant to Occupied, Cleaning, Under Maintenance and Blocked',
        'Manual blocks with a reason and a date range, plus a cleaning buffer',
      ],
      visual: 'tree',
    },
    {
      kind: 'cards',
      title: 'Rates and pricing',
      intro:
        'Prices are computed in one place on the server. The web and mobile apps display what it returns and never calculate prices themselves.',
      columns: 3,
      tone: 'tinted',
      items: [
        {
          title: 'Rent models',
          body: 'Per night, per month, or per year for a fixed term, with several rate plans per property node.',
        },
        {
          title: 'Stay rules',
          body: 'Minimum and maximum stay and minimum notice, plus weekday, weekend and seasonal rates.',
        },
        {
          title: 'Extras and discounts',
          body: 'Extra person charges, add-ons that are fixed or per unit, and long-stay discounts.',
        },
        {
          title: 'Deposits and advance',
          body: 'Deposit as a fixed amount, a percentage or a number of months, refundable or not, with an advance payment.',
        },
        {
          title: 'Taxes and fees',
          body: 'Taxes and fees per plan, shown as an itemised price.',
        },
        {
          title: 'Quotations',
          body: 'Quotes with a validity date and a permissioned manual override.',
        },
      ],
    },
    {
      kind: 'split',
      title: 'Bookings that cannot collide',
      paragraphs: [
        'Real-time conflict prevention works across the panel, the apps, share links and the booking page. When conflicting requests arrive together, exactly one succeeds.',
        'A booking moves through a clear lifecycle from Enquiry to Closed, with approval set to automatic or manual per unit type.',
      ],
      bullets: [
        'Day, week, month and timeline calendar views with drag to create or move',
        'Payment hold timer: an approved booking without proof expires and the unit is released',
        'Modification, extension, early termination and transfer between units or beds',
        'Group bookings across several units or beds',
        'Cancellation with policy-based charges and a refund record',
        'iCal export per unit',
      ],
      visual: 'calendar',
      reverse: true,
    },
    {
      kind: 'split',
      title: 'Payments verified from proof',
      paragraphs: [
        'There is no payment gateway. Every booking confirmation and invoice shows the bank, e-wallet or QR details the business entered, the amount and a reference number.',
        'Tenants upload proof as an image or PDF. Staff approve it in full or in part, reject it with a reason, or ask for clarification.',
      ],
      bullets: [
        'Duplicate detection on reference, image hash, and amount, date and channel',
        'Manual entry for cash, bank transfer, e-wallet and cheque payments',
        'Allocation to one or more invoices, with leftover money kept as tenant credit',
        'Receipts on verified payment and a statement of account per tenant',
        'Refunds recorded with method, reference and proof, subject to approval',
      ],
      visual: 'proof',
    },
    {
      kind: 'cards',
      title: 'Billing and utilities',
      columns: 3,
      items: [
        {
          title: 'Recurring invoices',
          body: 'A scheduler with a billing day and proration, for rent and other charges.',
        },
        {
          title: 'Late fees',
          body: 'Fixed, percentage or per day, with a grace period and a cap.',
        },
        {
          title: 'Invoice types',
          body: 'Booking, advance, rent, deposit demand, utility, damage charge, late fee and miscellaneous.',
        },
        {
          title: 'Deposit ledger',
          body: 'Demanded, received, applied, deducted and refunded, with deductions linked to inspection findings.',
        },
        {
          title: 'Meters',
          body: 'Electricity and water meters with photo readings in the Owner App, which works offline.',
        },
        {
          title: 'Utility billing',
          body: 'By consumption at a set rate, equal split, fixed monthly charge or included in rent.',
        },
      ],
    },
    {
      kind: 'cards',
      title: 'Contracts, inspections and maintenance',
      columns: 3,
      tone: 'tinted',
      items: [
        {
          title: 'Contract templates',
          body: 'Merge fields for rental agreements, leases, house rules, receipts, notices and final settlements, with PDF version history.',
        },
        {
          title: 'E-signature',
          body: 'Draw or type a signature and receive a signed PDF with an audit trail.',
        },
        {
          title: 'Inspections',
          body: 'Move-in, move-out and periodic checklists with photos, notes, condition ratings, inventory checks, meter readings and both signatures. Works offline.',
        },
        {
          title: 'Move-in and move-out workflows',
          body: 'Step-by-step flows from confirmed booking to Occupied, and from notice to deposit refund and Vacant.',
        },
        {
          title: 'Maintenance tickets',
          body: 'Category, priority, photos, assignee, due date, cost and a tenant-chargeable flag. A unit can be blocked automatically.',
        },
        {
          title: 'Housekeeping and keys',
          body: 'A housekeeping board with cleaning tasks, and a register of keys and access credentials.',
        },
      ],
    },
    {
      kind: 'cards',
      title: 'Communication, sharing and reports',
      columns: 3,
      items: [
        {
          title: 'Messaging',
          body: 'Tenant and business threads, context threads for bookings, invoices and tickets, read receipts and internal notes hidden from tenants.',
        },
        {
          title: 'Announcements',
          body: 'To all tenants, one property or selected tenants, with read tracking.',
        },
        {
          title: 'Share links and booking pages',
          body: 'Links and QR codes per property, room or bed, with live availability and a booking request button. Not search-indexed by default.',
        },
        {
          title: 'Dashboard',
          body: 'Today’s check-ins and check-outs, pending approvals, payments to verify, dues, vacancies and open tickets.',
        },
        {
          title: 'Reports',
          body: 'Occupancy, rent roll, lease expiry, revenue, bookings by source, overdue list and utility recovery.',
        },
        {
          title: 'Books',
          body: 'A double-entry ledger posted automatically, expenses, period lock, trial balance, profit and loss, and exports to Excel, CSV and PDF.',
        },
      ],
      tone: 'tinted',
    },
    {
      kind: 'split',
      title: 'Books that stay balanced',
      paragraphs: [
        'Invoices, payments, deposits, refunds and expenses post to a double-entry ledger in the same transaction as the business record. Entries are never edited; corrections are reversals.',
        'The reports include trial balance, profit and loss overall and per property, receivables ageing, deposit liability, collections by staff and a tax summary.',
      ],
      visual: 'ledger',
      reverse: true,
    },
    {
      kind: 'table',
      title: 'Who can do what',
      intro:
        'Permissions are a module plus an action (view, create, edit, delete, approve, export), scoped to all properties or selected ones. Default roles for the first release:',
      columns: ['Group', 'Default roles'],
      rows: [
        ['Platform', 'Super Admin, Platform Support'],
        ['Partner', 'Partner Admin, Partner Sales, Partner Support'],
        [
          'Client (the property business)',
          'Owner, Property Manager, Front Desk, Caretaker, Accountant',
        ],
        ['Tenant (the renter)', 'Individual tenant'],
      ],
    },
    {
      kind: 'callout',
      title: 'Not in the first release',
      body: [
        'No payment gateway: payments are recorded and verified by people. Philippines only, in pesos, in English and Filipino.',
        'Not included: company tenants, a public API, smart locks, waitlists, multi-currency, other countries and BIR Computerized Accounting System accreditation.',
      ],
      tone: 'warning',
    },
    {
      kind: 'cta',
      title: 'See whether it fits your business',
      body: 'Tell us how you rent and what you need most.',
      ctas: [{ ...early, variant: 'primary' }],
    },
  ],
};

export const dormitories: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Features / Dormitories',
      title: 'Dormitories and bedspaces, bed by bed.',
      lead: 'Shared rooms, mixed rules and monthly rent are the daily work of a dormitory or boarding house. This is how the platform handles them.',
      ctas: [
        { ...early, variant: 'primary' },
        { label: 'All features', href: '/features/', variant: 'secondary' },
      ],
      visual: 'tree',
    },
    {
      kind: 'cards',
      title: 'Workflows for dormitories',
      columns: 3,
      items: [
        {
          title: 'Rent by the bed',
          body: 'Rooms can be private or shared by bed. Each bed is a bookable node, and booking a bed blocks the room as a whole.',
        },
        {
          title: 'Gender rules',
          body: 'Set a room as male, female or mixed, so a booking cannot break the rule.',
        },
        {
          title: 'Monthly billing',
          body: 'Recurring invoices on a billing day with proration for part months, and late fees with a grace period and cap.',
        },
        {
          title: 'Utilities',
          body: 'Meter readings with photos from the Owner App, even offline, billed by consumption, equal split among occupants, a fixed charge or included in rent.',
        },
        {
          title: 'Inspections',
          body: 'Move-in and move-out checklists with photos, inventory check and both signatures, with before-and-after comparison.',
        },
        {
          title: 'Housekeeping',
          body: 'A board for clean, dirty, inspected and out of order, with cleaning tasks assigned to staff.',
        },
      ],
    },
    {
      kind: 'steps',
      title: 'A bed from enquiry to move-in',
      items: [
        {
          title: 'Request',
          body: 'A prospective tenant requests a bed from a share link, the booking page or the Tenant App, or staff create the booking.',
        },
        {
          title: 'Approve and pay',
          body: 'The booking is approved, payment details are shown, and the tenant uploads proof before the hold timer ends.',
        },
        {
          title: 'Sign and verify',
          body: 'The contract is e-signed, and advance and deposit payments are verified by staff.',
        },
        {
          title: 'Inspect and move in',
          body: 'A move-in inspection is done, keys are issued and the bed becomes Occupied.',
        },
      ],
    },
    {
      kind: 'split',
      title: 'Offline inspections for caretakers',
      paragraphs: [
        'The Owner App is designed to record inspections, check-ins, check-outs and meter readings with no signal. Photos are compressed and queued, and everything syncs when the phone reconnects, without duplicates.',
        'If the server rejects an item, the app shows it so the caretaker can fix it.',
      ],
      visual: 'phone',
    },
    {
      kind: 'cta',
      title: 'Run a dormitory or boarding house?',
      body: 'We would like to hear how you manage beds and rooms today.',
      ctas: [{ ...early, variant: 'primary' }],
    },
  ],
};

export const apartments: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Features / Apartments',
      title: 'Apartments and long-term rentals, from contract to move-out.',
      lead: 'Leases, deposits, monthly rent, renewals and a careful move-out. This is how the platform supports landlords of apartments and condominium units.',
      ctas: [
        { ...early, variant: 'primary' },
        { label: 'All features', href: '/features/', variant: 'secondary' },
      ],
      visual: 'ledger',
    },
    {
      kind: 'cards',
      title: 'Workflows for apartments',
      columns: 3,
      items: [
        {
          title: 'Contracts with e-signature',
          body: 'Templates with merge fields, PDF generation with version history, and signing by drawing or typing, with a signed PDF and audit trail.',
        },
        {
          title: 'Recurring rent',
          body: 'Invoices created on a billing day with proration, plus reminders before, on and after the due date.',
        },
        {
          title: 'Deposit ledger',
          body: 'Demanded, received, applied, deducted and refunded. Deductions link to inspection findings, and the tenant can acknowledge or dispute them in the app.',
        },
        {
          title: 'Renewals',
          body: 'A renewal reminder and offer, accepted in the app, and notice to vacate from either side with notice period validation.',
        },
        {
          title: 'Rent roll and expiry',
          body: 'Reports for the rent roll, lease expiry, overdue list and revenue by property.',
        },
        {
          title: 'Rent-cap awareness',
          body: 'Rent increases for covered residential units can be checked against a configurable cap. The values are unverified until counsel confirms.',
        },
      ],
    },
    {
      kind: 'steps',
      title: 'The monthly tenancy, step by step',
      intro:
        'The move-in and move-out workflows the platform is designed around.',
      items: [
        {
          title: 'Booking confirmed',
          body: 'Documents are collected and the contract is e-signed.',
        },
        {
          title: 'Advance and deposit',
          body: 'Payment proofs are uploaded and verified by staff.',
        },
        {
          title: 'Move-in inspection',
          body: 'Photos, inventory, meter readings and both signatures, then keys are issued.',
        },
        {
          title: 'Living in the unit',
          body: 'Monthly invoices, reminders, maintenance tickets and messages.',
        },
        {
          title: 'Notice and final readings',
          body: 'Notice is validated against the notice period, followed by final meter readings.',
        },
        {
          title: 'Move-out and settlement',
          body: 'Final inspection, deductions, a settlement statement and the deposit refund, then the unit goes to Cleaning and Vacant.',
        },
      ],
    },
    {
      kind: 'split',
      title: 'Maintenance that reaches the invoice',
      paragraphs: [
        'Tickets can come from the tenant app, staff or inspection findings. A unit can be blocked automatically when repairs need it empty, and a tenant-chargeable cost flows to an invoice.',
      ],
      visual: 'proof',
      reverse: true,
    },
    {
      kind: 'cta',
      title: 'Manage apartments or condominium units?',
      body: 'Tell us about your portfolio and where the paperwork hurts most.',
      ctas: [{ ...early, variant: 'primary' }],
    },
  ],
};

export const shortStays: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Features / Short stays',
      title: 'Short stays, with a calendar that always shows what is free.',
      lead: 'Apartelles, guesthouses, hostels and transient houses need nightly rates, quick answers and no double bookings. This is how the platform helps.',
      ctas: [
        { ...early, variant: 'primary' },
        { label: 'All features', href: '/features/', variant: 'secondary' },
      ],
      visual: 'calendar',
    },
    {
      kind: 'cards',
      title: 'Workflows for short stays',
      columns: 3,
      items: [
        {
          title: 'Nightly rate plans',
          body: 'Per night pricing with weekday, weekend and seasonal rates, minimum and maximum stay, extra person charges and add-ons.',
        },
        {
          title: 'Live availability',
          body: 'A calendar with day, week, month and timeline views, filters, and drag to create or move a booking with a live conflict check.',
        },
        {
          title: 'Share links and a booking page',
          body: 'Share a property, room or bed by link or QR code. Visitors see live availability and send a booking request.',
        },
        {
          title: 'Approval and hold timer',
          body: 'Approve automatically or manually per unit type. An approved booking without payment proof expires and the unit is released.',
        },
        {
          title: 'Cleaning buffer',
          body: 'A buffer between stays, a housekeeping board and cleaning tasks.',
        },
        {
          title: 'Cancellations and refunds',
          body: 'Policy-based cancellation charges and a refund record, with approval for refunds.',
        },
      ],
    },
    {
      kind: 'steps',
      title: 'A short stay, start to finish',
      items: [
        {
          title: 'Visitor opens a share link',
          body: 'They see live availability and send a booking request.',
        },
        {
          title: 'Staff approve',
          body: 'Payment instructions are shown with the amount and a reference number.',
        },
        {
          title: 'Guest uploads proof',
          body: 'Staff verify it and the booking becomes Confirmed.',
        },
        {
          title: 'Check-in and check-out',
          body: 'Inspections with photos at arrival and departure, then the unit is cleaned and released.',
        },
      ],
    },
    {
      kind: 'split',
      title: 'One winner for every bed or room',
      paragraphs: [
        'Requests can arrive from the panel, the Owner App, the Tenant App, a share link and the booking page at the same moment. The platform is built so exactly one of the conflicting requests succeeds.',
        'Share pages are not search-indexed by default and are protected by bot protection and rate limiting.',
      ],
      visual: 'calendar',
      reverse: true,
    },
    {
      kind: 'cta',
      title: 'Run a short-stay property?',
      body: 'We would like to learn how you take bookings and payments today.',
      ctas: [{ ...early, variant: 'primary' }],
    },
  ],
};
