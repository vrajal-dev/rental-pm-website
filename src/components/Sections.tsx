import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Section } from '@/content/types';
import { contactCopy, contactMailto } from '@/content/contact';
import { site } from '@/config/site';
import { ButtonRow } from './Button';
import { Container } from './Container';
import { Visual } from './Visuals';

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
      {children}
    </h2>
  );
}

function Intro({ children }: { children?: ReactNode }) {
  if (!children) return null;
  return <p className="mt-3 max-w-2xl text-lg text-muted">{children}</p>;
}

function Wrap({
  children,
  tint = false,
}: {
  children: ReactNode;
  tint?: boolean;
}) {
  return (
    <section
      className={tint ? 'bg-surface-2 py-16 sm:py-20' : 'py-16 sm:py-20'}
    >
      <Container>{children}</Container>
    </section>
  );
}

function Hero({ s }: { s: Extract<Section, { kind: 'hero' }> }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-20">
      <Container
        className={
          s.visual ? 'grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]' : ''
        }
      >
        <div className="rise max-w-2xl">
          {s.eyebrow && (
            <p className="mb-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent-strong">
              {s.eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {s.title}
          </h1>
          <p className="mt-5 text-lg text-muted sm:text-xl">{s.lead}</p>
          {s.ctas && (
            <div className="mt-8">
              <ButtonRow ctas={s.ctas} />
            </div>
          )}
          {s.note && <p className="mt-4 text-sm text-muted">{s.note}</p>}
        </div>
        {s.visual && (
          <div className="rise mx-auto w-full max-w-md lg:max-w-none">
            <Visual name={s.visual} />
          </div>
        )}
      </Container>
    </section>
  );
}

function Cards({ s }: { s: Extract<Section, { kind: 'cards' }> }) {
  const cols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[s.columns ?? 3];
  return (
    <Wrap tint={s.tone === 'tinted'}>
      <H2>{s.title}</H2>
      <Intro>{s.intro}</Intro>
      <ul className={`mt-10 grid gap-5 ${cols}`}>
        {s.items.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-muted">{item.body}</p>
            {item.href && (
              <Link
                href={item.href}
                className="mt-4 inline-block font-semibold text-accent-strong underline underline-offset-4"
              >
                Learn more
                <span className="sr-only"> about {item.title}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

function Split({ s }: { s: Extract<Section, { kind: 'split' }> }) {
  return (
    <Wrap>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={s.reverse ? 'lg:order-2' : ''}>
          <H2>{s.title}</H2>
          <div className="mt-5 space-y-4 text-lg text-muted">
            {s.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {s.bullets && (
            <ul className="mt-5 space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <Tick />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {s.link && (
            <p className="mt-6">
              <Link
                href={s.link.href}
                className="font-semibold text-accent-strong underline underline-offset-4"
              >
                {s.link.label}
              </Link>
            </p>
          )}
        </div>
        <div className={s.reverse ? 'lg:order-1' : ''}>
          <div className="mx-auto max-w-md lg:max-w-none">
            <Visual name={s.visual} />
          </div>
        </div>
      </div>
    </Wrap>
  );
}

function Tick() {
  return (
    <svg
      className="mt-1 size-5 shrink-0 text-accent"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="m4 10.5 4 4 8-9"
        className="fill-none stroke-current"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Steps({ s }: { s: Extract<Section, { kind: 'steps' }> }) {
  return (
    <Wrap tint>
      <H2>{s.title}</H2>
      <Intro>{s.intro}</Intro>
      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((item, i) => (
          <li key={item.title} className="relative rounded-2xl bg-surface p-6">
            <span className="mb-3 grid size-9 place-items-center rounded-full bg-accent font-display text-lg font-semibold text-on-accent">
              {i + 1}
            </span>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-muted">{item.body}</p>
          </li>
        ))}
      </ol>
    </Wrap>
  );
}

function Checklist({ s }: { s: Extract<Section, { kind: 'checklist' }> }) {
  return (
    <Wrap tint>
      <H2>{s.title}</H2>
      <Intro>{s.intro}</Intro>
      <ul
        className={`mt-8 grid gap-3 ${s.columns === 2 ? 'sm:grid-cols-2' : ''}`}
      >
        {s.items.map((item) => (
          <li key={item} className="flex gap-3 rounded-xl bg-surface p-4">
            <Tick />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

function Table({ s }: { s: Extract<Section, { kind: 'table' }> }) {
  return (
    <Wrap>
      <H2>{s.title}</H2>
      <Intro>{s.intro}</Intro>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[20rem] text-left">
          <caption className="sr-only">{s.title}</caption>
          <thead className="bg-surface-2">
            <tr>
              {s.columns.map((c) => (
                <th key={c} scope="col" className="px-4 py-3 font-semibold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.rows.map((row) => (
              <tr key={row.join('|')} className="border-t border-line">
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th
                      key={cell}
                      scope="row"
                      className="px-4 py-3 font-semibold"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td key={cell} className="px-4 py-3 text-muted">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrap>
  );
}

function Faq({ s }: { s: Extract<Section, { kind: 'faq' }> }) {
  return (
    <Wrap>
      <div className="mx-auto max-w-3xl">
        <H2>{s.title}</H2>
        <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-surface">
          {s.items.map((item) => (
            <details key={item.q} className="group p-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 text-xl leading-none text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

function Callout({ s }: { s: Extract<Section, { kind: 'callout' }> }) {
  const tone =
    s.tone === 'warning'
      ? 'border-warm bg-warm-soft'
      : 'border-accent bg-accent-soft';
  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div
          role="note"
          className={`mx-auto max-w-4xl rounded-2xl border-l-8 p-6 sm:p-8 ${tone}`}
        >
          <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
          <div className="mt-3 space-y-3">
            {s.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Prose({ s }: { s: Extract<Section, { kind: 'prose' }> }) {
  return (
    <Wrap>
      <div className="mx-auto max-w-3xl space-y-8">
        {s.title && <H2>{s.title}</H2>}
        {s.blocks.map((b, i) => (
          <div key={b.heading ?? i}>
            {b.heading && (
              <h2 className="font-display text-2xl font-semibold">
                {b.heading}
              </h2>
            )}
            <div className="mt-3 space-y-3 text-muted">
              {b.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {b.bullets && (
              <ul className="mt-3 list-disc space-y-1 pl-6">
                {b.bullets.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function Contact() {
  return (
    <Wrap>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="font-display text-3xl font-semibold">Email us</h2>
          <p className="mt-3 text-muted">
            This opens your email app with a short template.
          </p>
          <p className="mt-6">
            <a
              href={contactMailto()}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-base font-semibold text-on-accent hover:bg-accent-strong"
            >
              {contactCopy.emailCta}
            </a>
          </p>
          <p className="mt-4 break-all text-sm text-muted">
            Or write to{' '}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-semibold text-accent-strong underline"
            >
              {site.contactEmail}
            </a>
            . {contactCopy.placeholderNote}
          </p>
          <h3 className="mt-8 text-lg font-semibold">
            {contactCopy.includeTitle}
          </h3>
          <ul className="mt-3 space-y-2">
            {contactCopy.includeItems.map((i) => (
              <li key={i} className="flex gap-3">
                <Tick />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-surface-2 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">
            {contactCopy.noFormTitle}
          </h2>
          <div className="mt-3 space-y-3 text-muted">
            {contactCopy.noFormBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  );
}

function CtaBand({ s }: { s: Extract<Section, { kind: 'cta' }> }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl bg-accent px-6 py-12 text-on-accent sm:px-12">
          <h2 className="font-display text-3xl font-semibold text-balance sm:text-4xl">
            {s.title}
          </h2>
          <p className="mt-3 max-w-2xl text-lg opacity-95">{s.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {s.ctas.map((c, i) => (
              <Link
                key={c.href + c.label}
                href={c.href}
                className={`inline-flex min-h-11 items-center rounded-lg px-5 py-2.5 font-semibold ${
                  i === 0
                    ? 'bg-bg text-ink hover:bg-surface-2'
                    : 'border border-on-accent/60 text-on-accent hover:bg-on-accent/10'
                }`}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SectionView({ section }: { section: Section }) {
  switch (section.kind) {
    case 'hero':
      return <Hero s={section} />;
    case 'cards':
      return <Cards s={section} />;
    case 'split':
      return <Split s={section} />;
    case 'steps':
      return <Steps s={section} />;
    case 'checklist':
      return <Checklist s={section} />;
    case 'table':
      return <Table s={section} />;
    case 'faq':
      return <Faq s={section} />;
    case 'callout':
      return <Callout s={section} />;
    case 'prose':
      return <Prose s={section} />;
    case 'contact':
      return <Contact />;
    case 'cta':
      return <CtaBand s={section} />;
  }
}

export function Sections({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s, i) => (
        <SectionView key={`${s.kind}-${i}`} section={s} />
      ))}
    </>
  );
}
