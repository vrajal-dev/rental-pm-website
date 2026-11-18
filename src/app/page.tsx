import { Sections } from '@/components/Sections';
import { home } from '@/content/home';
import { organizationJsonLd } from '@/lib/jsonld';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('/');

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Data block built from the site config; not user input.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()).replace(/</g, '\\u003c'),
        }}
      />
      <Sections sections={home.sections} />
    </>
  );
}
