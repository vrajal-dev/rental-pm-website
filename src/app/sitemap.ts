import type { MetadataRoute } from 'next';
import { routes } from '@/config/routes';
import { site } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: new URL(r.path, site.url).toString(),
    priority: r.priority,
  }));
}
