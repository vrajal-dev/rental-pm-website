import { site } from '@/config/site';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.contactEmail,
    areaServed: { '@type': 'Country', name: site.country },
    ...(site.socialLinks.length > 0
      ? { sameAs: site.socialLinks.map((s) => s.href) }
      : {}),
  };
}
