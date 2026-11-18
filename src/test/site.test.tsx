import { render, screen } from '@testing-library/react';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import type { ComponentType } from 'react';
import { describe, expect, it, vi } from 'vitest';
import robots from '@/app/robots';
import sitemap from '@/app/sitemap';
import manifest from '@/app/manifest';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Logo, LogoFull, LogoMark, LogoWordmark } from '@/components/logo';
import { companyNav, legalNav, primaryNav, routes } from '@/config/routes';
import { site } from '@/config/site';
import { layoutWordmark } from '@/config/logo-geometry.mjs';

vi.mock('next/navigation', () => ({ usePathname: () => '/' }));

const modules = import.meta.glob<{ default: ComponentType }>(
  '../app/**/page.tsx',
  { eager: true },
);

const routePaths = new Set(routes.map((r) => r.path));

function internalHrefs(container: HTMLElement): string[] {
  return (
    [...container.querySelectorAll('a[href]')]
      .map((a) => a.getAttribute('href') ?? '')
      .filter((h) => h.startsWith('/'))
      .map((h) => h.split('#')[0] ?? h)
      // Outside a Next build, Link drops the trailing slash that the config adds.
      .map((h) => (h.endsWith('/') ? h : `${h}/`))
  );
}

describe('sitemap and robots', () => {
  it('lists every route exactly once, from the config URL', () => {
    const urls = sitemap().map((e) => e.url);
    expect(urls).toHaveLength(routes.length);
    expect(new Set(urls).size).toBe(urls.length);
    for (const r of routes) {
      expect(urls).toContain(new URL(r.path, site.url).toString());
    }
  });

  it('robots points to the sitemap', () => {
    expect(robots().sitemap).toBe(new URL('/sitemap.xml', site.url).toString());
  });
});

describe('navigation', () => {
  it('header and footer links all resolve to real routes', () => {
    const header = render(<Header />);
    const footer = render(<Footer />);
    const hrefs = [
      ...internalHrefs(header.container),
      ...internalHrefs(footer.container),
    ];
    expect(hrefs.length).toBeGreaterThan(10);
    for (const h of hrefs) expect(routePaths.has(h), h).toBe(true);
  });

  it('header has a link for each primary route and the footer links the draft legal pages', () => {
    const header = render(<Header />);
    const headerHrefs = internalHrefs(header.container);
    for (const r of primaryNav) expect(headerHrefs).toContain(r.path);
    header.unmount();
    const footer = render(<Footer />);
    const footerHrefs = internalHrefs(footer.container);
    for (const r of [...companyNav, ...legalNav]) {
      expect(footerHrefs).toContain(r.path);
    }
  });

  it('every internal link inside every page resolves to a real route', () => {
    for (const mod of Object.values(modules)) {
      const { container, unmount } = render(<mod.default />);
      for (const h of internalHrefs(container)) {
        expect(routePaths.has(h), h).toBe(true);
      }
      unmount();
    }
  });
});

describe('brand comes from the config', () => {
  it('has a name and the Logo uses it', () => {
    expect(site.name.length).toBeGreaterThan(0);
    render(<Logo />);
    expect(
      screen.getByRole('link', { name: `${site.name}, home` }),
    ).toBeInTheDocument();
  });

  it('every logo variant is accessibly named from the config', () => {
    render(
      <>
        <LogoMark />
        <LogoWordmark />
        <LogoFull />
      </>,
    );
    expect(screen.getAllByRole('img', { name: site.name })).toHaveLength(3);
  });

  it('the drawn wordmark covers the configured name', () => {
    expect(layoutWordmark(site.name)).not.toBeNull();
  });

  it('the name appears on the home page, in the footer and in the manifest', () => {
    const Home = modules['../app/page.tsx']?.default;
    expect(Home).toBeDefined();
    const { container } = render(Home ? <Home /> : null);
    expect(container.textContent).toContain(site.name);
    const footer = render(<Footer />);
    expect(footer.container.textContent).toContain(site.name);
    expect(manifest().name).toBe(site.name);
  });

  it('no source file outside the config hard-codes the brand name', () => {
    const root = join(process.cwd(), 'src');
    const offenders: string[] = [];
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const p = join(dir, name);
        if (statSync(p).isDirectory()) walk(p);
        else if (/\.(ts|tsx|css|mjs)$/.test(name)) {
          if (p.endsWith(join('config', 'site.ts'))) continue;
          if (p.includes(join('src', 'test'))) continue;
          const text = readFileSync(p, 'utf8');
          if (text.includes(site.name) || /Brand P|Leasewell/.test(text)) {
            offenders.push(p);
          }
        }
      }
    };
    walk(root);
    expect(offenders).toEqual([]);
  });
});
