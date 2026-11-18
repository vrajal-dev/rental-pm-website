import { site } from '@/config/site';
import { mailtoHref } from '@/lib/mailto';
import type { PageContent } from './types';

export const contactCopy = {
  emailCta: 'Email us to book a demo',
  subject: `Demo request: ${site.name}`,
  bodyTemplate: [
    'Hello,',
    '',
    'I would like to book a demo.',
    '',
    'Business name:',
    'Type of business (dormitory, apartment, short stay, other):',
    'City or province:',
    'Approximate number of units or beds:',
    'What I most need help with:',
    '',
    'Thank you',
  ].join('\n'),
  includeTitle: 'What to include in your email',
  includeItems: [
    'Your business name and what you rent out (dormitory, apartments, short stays, or other)',
    'The city or province you operate in',
    'Roughly how many units or beds you manage',
    'What you most need help with today',
    'Whether you are a property business, a tenant or a possible partner',
  ],
  noFormTitle: 'Why there is no form',
  noFormBody: [
    'We do not show a form that pretends to send. Email goes straight to a person.',
    'Your email is read by a person. We reply as soon as we can, and we do not promise a response time.',
  ],
  placeholderNote:
    'The email address shown is a placeholder and will be replaced.',
};

export function contactMailto(): string {
  return mailtoHref(contactCopy.subject, contactCopy.bodyTemplate);
}

export const contact: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Contact',
      title: 'Book a demo.',
      lead: `The best way to start is a short email telling us about your business. We will arrange a demo.`,
    },
    { kind: 'contact' },
  ],
};
