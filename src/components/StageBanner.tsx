import Link from 'next/link';
import { ui } from '@/content/ui';
import { Container } from './Container';

export function StageBanner() {
  return (
    <div className="border-b border-line bg-warm-soft text-sm">
      <Container className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2">
        <p className="text-ink">{ui.stageBanner}</p>
        <Link
          href="/about/"
          className="font-semibold text-warm underline underline-offset-2"
        >
          {ui.stageBannerLink}
        </Link>
      </Container>
    </div>
  );
}
