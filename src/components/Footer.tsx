import Link from 'next/link';
import {
  companyNav,
  featureChildren,
  getRoute,
  legalNav,
} from '@/config/routes';
import { site } from '@/config/site';
import { ui } from '@/content/ui';
import { Container } from './Container';
import { Logo } from './logo';

const productPaths = [
  '/features/',
  '/how-it-works/',
  '/pricing/',
  '/security/',
  '/philippines/',
];
const audiencePaths = ['/for-tenants/', '/for-partners/'];

function LinkList({ items }: { items: { path: string; label: string }[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            className="text-muted hover:text-accent-strong hover:underline"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const product = productPaths.map(getRoute);
  const audiences = [...featureChildren, ...audiencePaths.map(getRoute)];
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-surface-2">
      <Container className="py-12">
        <nav
          aria-label={ui.footerNavLabel}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5"
        >
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-muted">{ui.footerBlurb}</p>
            {site.socialLinks.length > 0 && (
              <ul className="mt-3 flex gap-3 text-sm">
                {site.socialLinks.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              {ui.footerHeadings.product}
            </h2>
            <LinkList items={product} />
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              {ui.footerHeadings.audiences}
            </h2>
            <LinkList items={audiences} />
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              {ui.footerHeadings.company}
            </h2>
            <LinkList items={companyNav} />
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              {ui.footerHeadings.legal}
            </h2>
            <LinkList items={legalNav} />
            <p className="mt-3 text-xs text-muted">{ui.footerLegalNote}</p>
          </div>
        </nav>
        <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
          &copy; {year} {site.name}. {ui.copyright}
        </p>
      </Container>
    </footer>
  );
}
