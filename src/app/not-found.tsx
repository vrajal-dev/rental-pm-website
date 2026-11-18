import Link from 'next/link';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { primaryNav } from '@/config/routes';
import { ui } from '@/content/ui';

export const metadata = { title: ui.notFound.title, robots: { index: false } };

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">
        {ui.notFound.title}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{ui.notFound.body}</p>
      <div className="mt-8">
        <Button label={ui.notFound.home} href="/" />
      </div>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        {primaryNav.map((r) => (
          <li key={r.path}>
            <Link
              href={r.path}
              className="font-semibold text-accent-strong underline"
            >
              {r.label}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
