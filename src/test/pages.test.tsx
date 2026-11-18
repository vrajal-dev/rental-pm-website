import { render } from '@testing-library/react';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { routes } from '@/config/routes';
import { site } from '@/config/site';
import { pageContent } from '@/content';

vi.mock('next/navigation', () => ({ usePathname: () => '/' }));

interface PageModule {
  default: ComponentType;
  metadata: Metadata;
}

const modules = import.meta.glob<PageModule>('../app/**/page.tsx', {
  eager: true,
});

/** '../app/features/page.tsx' -> '/features/' */
function pathOf(file: string): string {
  const p = file.replace('../app', '').replace('page.tsx', '');
  return p === '/' ? '/' : p;
}

const pages = Object.entries(modules).map(([file, mod]) => ({
  path: pathOf(file),
  mod,
}));

function titleOf(m: Metadata): string {
  const t = m.title;
  return typeof t === 'object' && t && 'absolute' in t
    ? String(t.absolute)
    : '';
}

describe('pages', () => {
  it('has a page file for every route and a route for every page file', () => {
    expect(pages.map((p) => p.path).sort()).toEqual(
      routes.map((r) => r.path).sort(),
    );
  });

  it('has content for every route', () => {
    for (const r of routes) {
      if (r.path === '/') continue; // home is rendered by its own page file
      expect(pageContent[r.path], r.path).toBeDefined();
    }
  });

  it.each(pages)('renders exactly one h1 on $path', ({ mod }) => {
    const { container } = render(<mod.default />);
    expect(container.querySelectorAll('h1')).toHaveLength(1);
    expect(container.querySelector('h1')?.textContent?.trim()).not.toBe('');
  });

  it.each(pages)('has complete metadata on $path', ({ path, mod }) => {
    const m = mod.metadata;
    expect(titleOf(m)).toBeTruthy();
    expect(m.description).toBeTruthy();
    expect(m.alternates?.canonical).toBe(path);
    expect(m.openGraph?.title).toBe(titleOf(m));
    expect(m.openGraph?.description).toBe(m.description);
  });

  it('has a unique title and description per page, with the brand in the title', () => {
    const titles = pages.map((p) => titleOf(p.mod.metadata));
    const descriptions = pages.map((p) => String(p.mod.metadata.description));
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
    for (const t of titles) expect(t).toContain(site.name);
  });

  it('includes Organization JSON-LD on the home page only', () => {
    for (const { path, mod } of pages) {
      const { container } = render(<mod.default />);
      const ld = container.querySelector('script[type="application/ld+json"]');
      if (path === '/') {
        const data = JSON.parse(ld?.textContent ?? '{}');
        expect(data['@type']).toBe('Organization');
        expect(data.name).toBe(site.name);
      } else {
        expect(ld).toBeNull();
      }
    }
  });

  it('contact page offers a mailto link built from the config and no form', () => {
    const contact = pages.find((p) => p.path === '/contact/');
    const { container } = render(contact ? <contact.mod.default /> : null);
    const links = [...container.querySelectorAll('a[href^="mailto:"]')];
    expect(links.length).toBeGreaterThan(0);
    for (const a of links) {
      expect(a.getAttribute('href')).toContain(site.contactEmail);
    }
    expect(container.querySelector('form')).toBeNull();
  });
});
