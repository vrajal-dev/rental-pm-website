import type { PageContent } from './types';

export const security: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Security',
      title: 'Security designed in, described plainly.',
      lead: 'This page lists controls the platform is designed with and that exist in its code today. It is not an audit report, and it does not promise compliance sign-off. Counsel and security review are still pending.',
      ctas: [
        {
          label: 'Ask a security question',
          href: '/contact/',
          variant: 'primary',
        },
        {
          label: 'The Philippines fit',
          href: '/philippines/',
          variant: 'secondary',
        },
      ],
      visual: 'isolation',
    },
    {
      kind: 'split',
      title: 'Each business sees only its own data',
      paragraphs: [
        'Every operational record carries the owning client’s ID. Queries are scoped by the application, and the database enforces the same rule with PostgreSQL row-level security, so a mistake in application code should not expose another business’s rows.',
        'The design includes tests that remove the application filter and check that the database still blocks the read. A record that belongs to another business is reported as not found.',
      ],
      bullets: [
        'Client isolation in three layers: column, service and database policy',
        'The application connects to the database as a role that cannot bypass row-level security',
        'Partners cannot see a client’s operational data without time-limited support access that the client grants',
      ],
      visual: 'isolation',
    },
    {
      kind: 'cards',
      title: 'Designed controls',
      columns: 3,
      tone: 'tinted',
      items: [
        {
          title: 'Append-only audit log',
          body: 'Every create, edit, delete and approval is recorded with user, time, device, and before and after values. The application’s database role has no permission to change or delete audit rows. The design retains them for seven years.',
        },
        {
          title: 'Passwords hashed with argon2',
          body: 'Passwords are stored as argon2id hashes. Sign-in gives the same answer for unknown, pending and wrong-password accounts to avoid revealing which emails exist.',
        },
        {
          title: 'Sessions and tokens',
          body: 'Web sessions use an httpOnly cookie with only a hash of the token stored. Mobile uses short-lived access tokens with rotating refresh tokens and reuse detection.',
        },
        {
          title: 'Rate limiting',
          body: 'Sign-in, refresh, password reset and similar endpoints are rate limited. Public share pages and booking requests are designed to be limited and bot-protected.',
        },
        {
          title: 'Immutable books',
          body: 'Ledger entries are never edited. Corrections are posted as reversals, in the same transaction as the business record.',
        },
        {
          title: 'Masked sensitive data',
          body: 'ID and bank account numbers are masked in responses unless the caller has permission to see them in full, and sensitive data is kept out of logs.',
        },
        {
          title: 'Safe file handling',
          body: 'Uploads and downloads are designed to use pre-signed, expiring links served from a separate domain, with type and size checks.',
        },
        {
          title: 'Validated input',
          body: 'Every request is validated against a schema, unknown fields are dropped, and database access uses parameterised queries.',
        },
        {
          title: 'Roles and scope',
          body: 'Access is deny by default. Each action needs a permission, and checks cover the specific record and the property scope, not only the role.',
        },
      ],
    },
    {
      kind: 'cards',
      title: 'Privacy by design',
      columns: 2,
      items: [
        {
          title: 'Tenant consent',
          body: 'A tenant owns their profile and ID documents and shares them with each business only with consent, which can be revoked. A business never sees a tenant’s activity with another business.',
        },
        {
          title: 'Data subject rights',
          body: 'The Tenant App is designed so people can access, correct, delete and export their data.',
        },
      ],
    },
    {
      kind: 'callout',
      title: 'What is not done yet',
      body: [
        'Two-factor sign-in is planned and is not built yet. Until it is, accounts sign in with email and password only. It is required to be built and switched on before launch for platform, partner and owner accounts.',
        'Google and Apple sign-in, and mobile one-time passcodes, are not built either.',
        'No penetration test, independent audit or legal review has been completed. A penetration test, a backup restore test and counsel review are planned before launch.',
      ],
      tone: 'warning',
    },
    {
      kind: 'split',
      title: 'Data Privacy Act alignment, as an intention',
      paragraphs: [
        'The design aims to align with the Philippine Data Privacy Act: consent records, a privacy notice, data subject rights in the app, a breach procedure, a data processing agreement between the platform and its clients, and registration with the National Privacy Commission.',
        'These are goals that local counsel must verify. Nothing here is a statement that the platform complies.',
      ],
      visual: 'locale',
      reverse: true,
      link: { label: 'Draft privacy policy', href: '/privacy/' },
    },
    {
      kind: 'cta',
      title: 'Have a security or privacy question?',
      body: 'Email us. We will answer honestly, including when the answer is not yet.',
      ctas: [{ label: 'Contact us', href: '/contact/', variant: 'primary' }],
    },
  ],
};
