import { site } from '@/config/site';
import type { PageContent, Section } from './types';

const draftNotice: Section = {
  kind: 'callout',
  title: 'DRAFT: not final, not legal advice',
  body: [
    'This text is a placeholder. It must be reviewed and rewritten by qualified counsel before it is relied on. Do not rely on it.',
  ],
  tone: 'warning',
};

export const privacy: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Draft',
      title: 'Privacy Policy (draft)',
      lead: `Placeholder text for the ${site.name} website. Last drafted for development only.`,
    },
    draftNotice,
    {
      kind: 'prose',
      blocks: [
        {
          heading: 'What this website collects',
          paragraphs: [
            'This website is a static site. It sets no cookies and loads no analytics or third-party scripts.',
            'If you email us, we receive your email address and whatever you write. [Counsel to confirm wording on purpose, legal basis, retention and sharing.]',
          ],
        },
        {
          heading: 'The platform itself',
          paragraphs: [
            'A dedicated privacy notice, consent records and data processing agreement are to be written with counsel in line with the Philippine Data Privacy Act. [Placeholder.]',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'Contact us to ask what we hold about you or to ask us to delete it. [Counsel to complete data subject rights, the data protection officer contact and National Privacy Commission details.]',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [`${site.contactEmail} (placeholder address).`],
        },
      ],
    },
  ],
};

export const terms: PageContent = {
  sections: [
    {
      kind: 'hero',
      eyebrow: 'Draft',
      title: 'Terms of Use (draft)',
      lead: `Placeholder text for the ${site.name} website. Last drafted for development only.`,
    },
    draftNotice,
    {
      kind: 'prose',
      blocks: [
        {
          heading: 'About this site',
          paragraphs: [
            'Descriptions on this site are general and features may change.',
          ],
        },
        {
          heading: 'Use of the site',
          paragraphs: [
            'You may read this site and contact us. [Counsel to add acceptable use, intellectual property, disclaimers, limitation of liability and governing law.]',
          ],
        },
        {
          heading: 'The platform',
          paragraphs: [
            'Terms of service for the platform, including subscription and partner terms, do not exist yet and will be written with counsel. [Placeholder.]',
          ],
        },
      ],
    },
  ],
};
