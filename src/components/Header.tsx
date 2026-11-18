'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { primaryNav } from '@/config/routes';
import { ui } from '@/content/ui';
import { Logo } from './logo';
import { Container } from './Container';

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();

  const links = primaryNav.map((route) => {
    const active = isActive(pathname, route.path);
    return (
      <li key={route.path}>
        <Link
          href={route.path}
          aria-current={active ? 'page' : undefined}
          className={`block whitespace-nowrap rounded-md px-2.5 py-2 text-[0.95rem] font-medium hover:text-accent-strong ${
            active
              ? 'text-accent-strong underline decoration-2 underline-offset-8'
              : 'text-ink'
          }`}
        >
          {route.label}
        </Link>
      </li>
    );
  });

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label={ui.navLabel} className="hidden xl:block">
          <ul className="flex items-center gap-0.5">{links}</ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact/"
            className="hidden min-h-10 items-center whitespace-nowrap rounded-lg bg-accent px-4 text-[0.95rem] font-semibold text-on-accent hover:bg-accent-strong sm:inline-flex"
          >
            {ui.primaryCta}
          </Link>

          {/* A <details> works without JavaScript and with the keyboard.
              key={pathname} remounts it after navigation, which closes it. */}
          <details key={pathname} className="relative xl:hidden">
            <summary
              className="flex min-h-10 cursor-pointer items-center rounded-lg border border-line px-3 text-[0.95rem] font-semibold"
              aria-label={ui.menuOpen}
            >
              {ui.menuOpen}
              <svg
                className="ml-2"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  d="M1 3h12M1 7h12M1 11h12"
                  className="stroke-current"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <nav
              aria-label={`${ui.navLabel} (menu)`}
              className="absolute right-0 mt-2 w-64 rounded-xl border border-line bg-surface p-2 shadow-lg"
            >
              <ul>{links}</ul>
              <div className="mt-2 border-t border-line p-2">
                <Link
                  href="/contact/"
                  className="flex min-h-11 items-center justify-center rounded-lg bg-accent px-4 text-base font-semibold text-on-accent"
                >
                  {ui.primaryCta}
                </Link>
              </div>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
