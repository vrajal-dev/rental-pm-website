import { site } from '@/config/site';
import { mailtoHref } from '@/lib/mailto';
import type { PageContent } from './types';

export const contactCopy = {
  emailCta: 'Email us to request early access',
  subject: `Early access request: ${site.name}`,
  bodyTemplate: [
    'Hello,',
    '',
    'I would like to request early access or a demo.',
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
    'No backend exists yet to receive a web form, and we will not show a form that pretends to send. Email is the honest channel for now.',
    'Your email is read by a person. We reply as soon as we can, and we do not promise a response time.',
  ],
  placeholderNote:
    'The email address shown is a placeholder and will be replaced before launch.',
};

export function contactMailto(): string {
  return mailtoHref(contactCopy.subject, contactCopy.bodyTemplate);
}

export const contact: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Contact',
      title: 'Request early access or a demo.',
      lead: `${site.name} is in development. The best way to start is a short email telling us about your business.`,
    },
    { kind: 'contact' },
    {
      kind: 'callout',
      title: 'A note about stage',
      body: [
        'There is no product to demo to the public yet. A demo request starts a conversation about what is being built and when it could fit your business.',
      ],
      tone: 'info',
    },
  ],
};
