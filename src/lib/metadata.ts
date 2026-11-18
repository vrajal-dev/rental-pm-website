import type { Metadata } from 'next';
import { getRoute } from '@/config/routes';
import { site } from '@/config/site';

const ogImage = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: site.name,
};

export function pageMetadata(path: string): Metadata {
  const route = getRoute(path);
  const fullTitle =
    path === '/'
      ? `${site.name}: ${route.title}`
      : `${route.title} | ${site.name}`;
  return {
    // `absolute` so the layout template is not applied twice.
    title: { absolute: fullTitle },
    description: route.description,
    alternates: { canonical: route.path },
    openGraph: {
      title: fullTitle,
      description: route.description,
      url: route.path,
      siteName: site.name,
      locale: site.locale,
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description: route.description,
    },
  };
}

/** The title string a page will have (used by tests). */
export function pageTitle(path: string): string {
  const meta = pageMetadata(path);
  const t = meta.title;
  return typeof t === 'object' && t !== null && 'absolute' in t
    ? String(t.absolute)
    : '';
}
