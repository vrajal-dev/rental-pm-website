import Link from 'next/link';
import type { Cta } from '@/content/types';

const base =
  'inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-base font-semibold transition-colors';
const variants = {
  primary:
    'bg-accent text-on-accent hover:bg-accent-strong hover:text-on-accent',
  secondary:
    'border border-line bg-surface text-ink hover:border-accent hover:text-accent-strong',
} as const;

export function Button({ label, href, variant = 'primary' }: Cta) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {label}
    </Link>
  );
}

export function ButtonRow({ ctas }: { ctas: Cta[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {ctas.map((cta) => (
        <Button key={cta.href + cta.label} {...cta} />
      ))}
    </div>
  );
}
