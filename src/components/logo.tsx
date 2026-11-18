import Link from 'next/link';
import {
  FULL_GAP,
  FULL_SCALE,
  MARK,
  WORDMARK_ASCENT,
  WORDMARK_STROKE,
  WORDMARK_TOP,
  fullLogoSize,
  layoutWordmark,
} from '@/config/logo-geometry.mjs';
import { site } from '@/config/site';

// Colours come from the CSS tokens in globals.css, so every variant follows
// light and dark mode. The accessible name always comes from the site config.

interface VariantProps {
  className?: string;
  /** Hide from assistive tech (use when the surrounding link has the name). */
  decorative?: boolean;
}

function a11y(decorative?: boolean) {
  return decorative
    ? ({ 'aria-hidden': true, focusable: 'false' } as const)
    : ({ role: 'img', 'aria-label': site.name } as const);
}

function MarkShapes() {
  const pts = (p: number[][]) => p.map((xy) => xy.join(' ')).join(' ');
  return (
    <>
      <rect
        width={MARK.size}
        height={MARK.size}
        rx={MARK.radius}
        className="fill-accent"
      />
      <polyline
        points={pts(MARK.roof)}
        className="fill-none stroke-on-accent"
        strokeWidth={MARK.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points={pts(MARK.check)}
        className="fill-none stroke-on-accent"
        strokeWidth={MARK.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

function WordmarkShapes({
  layout,
}: {
  layout: NonNullable<ReturnType<typeof layoutWordmark>>;
}) {
  return (
    <g
      className="fill-none stroke-accent-strong"
      strokeWidth={WORDMARK_STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {layout.glyphs.map((g, i) => (
        <path key={i} d={g.d} transform={`translate(${g.x} 0)`} />
      ))}
    </g>
  );
}

export function LogoMark({ className = 'size-8', decorative }: VariantProps) {
  return (
    <svg
      viewBox={`0 0 ${MARK.size} ${MARK.size}`}
      className={className}
      {...a11y(decorative)}
    >
      <MarkShapes />
    </svg>
  );
}

export function LogoWordmark({
  className = 'h-6 w-auto',
  decorative,
}: VariantProps) {
  const layout = layoutWordmark(site.name);
  if (!layout) {
    // The name has a letter the drawn set lacks: fall back to live text.
    return (
      <span
        className={`font-display text-xl font-semibold text-accent-strong ${className}`}
      >
        {site.name}
      </span>
    );
  }
  const pad = WORDMARK_STROKE / 2;
  const w = layout.width + pad * 2;
  return (
    <svg
      viewBox={`${-pad} ${WORDMARK_TOP - pad} ${w} ${WORDMARK_ASCENT + pad * 2}`}
      className={className}
      {...a11y(decorative)}
    >
      <WordmarkShapes layout={layout} />
    </svg>
  );
}

export function LogoFull({
  className = 'h-8 w-auto',
  decorative,
}: VariantProps) {
  const layout = layoutWordmark(site.name);
  const size = fullLogoSize(site.name);
  if (!layout || !size) {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <LogoMark decorative />
        <span className="font-display text-xl font-semibold text-accent-strong">
          {site.name}
        </span>
      </span>
    );
  }
  const pad = WORDMARK_STROKE / 2;
  // Centre the wordmark's ascender-to-baseline band on the mark.
  const midY = WORDMARK_TOP + WORDMARK_ASCENT / 2;
  return (
    <svg
      viewBox={`0 0 ${size.width} ${size.height}`}
      className={className}
      {...a11y(decorative)}
    >
      <MarkShapes />
      <g
        transform={`translate(${MARK.size + FULL_GAP + pad * FULL_SCALE} ${MARK.size / 2}) scale(${FULL_SCALE}) translate(0 ${-midY})`}
      >
        <WordmarkShapes layout={layout} />
      </g>
    </svg>
  );
}

/** Header and footer logo: the combined variant as a link to the home page. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}, home`}
      className={`inline-flex items-center rounded ${className ?? ''}`}
    >
      <LogoFull decorative />
    </Link>
  );
}
