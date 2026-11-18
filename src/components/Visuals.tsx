import type { VisualKey } from '@/content/types';

// Decorative, CSS and SVG drawn illustrations of planned screens and ideas.
// They contain no numbers or statistics on purpose, and use the colour tokens,
// so they follow light and dark mode. All are hidden from assistive tech.

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]"
    >
      {children}
    </div>
  );
}

function Bar({
  w,
  tone = 'accent',
}: {
  w: string;
  tone?: 'accent' | 'warm' | 'line';
}) {
  const color =
    tone === 'accent' ? 'bg-accent' : tone === 'warm' ? 'bg-warm' : 'bg-line';
  return <div className={`h-2.5 rounded-full ${color} ${w}`} />;
}

function Dashboard() {
  const tiles = ['Check-ins today', 'Payments to verify', 'Open tickets'];
  return (
    <Frame>
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3 py-2">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="ml-3 text-xs text-muted">
          Dashboard (illustration)
        </span>
      </div>
      <div className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr]">
        <div className="space-y-3 border-r border-line bg-surface-2 p-3">
          <div className="h-2.5 rounded bg-accent" />
          <div className="h-2.5 rounded bg-line" />
          <div className="h-2.5 rounded bg-line" />
          <div className="h-2.5 rounded bg-line" />
          <div className="h-2.5 rounded bg-line" />
        </div>
        <div className="space-y-4 p-4">
          <div className="grid grid-cols-3 gap-2">
            {tiles.map((t, i) => (
              <div key={t} className="rounded-lg border border-line p-2">
                <p className="text-[0.62rem] leading-tight text-muted sm:text-xs">
                  {t}
                </p>
                <div className="mt-2">
                  <Bar
                    w={i === 1 ? 'w-3/4' : 'w-1/2'}
                    tone={i === 1 ? 'warm' : 'accent'}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-line p-3">
            <p className="mb-2 text-xs text-muted">Beds this week</p>
            {[
              ['w-1/2', 'ml-0'],
              ['w-1/3', 'ml-1/4'],
              ['w-2/5', 'ml-1/2'],
              ['w-1/4', 'ml-2/3'],
            ].map(([w, ml], i) => (
              <div key={i} className="mb-2 h-3 rounded bg-surface-2">
                <div
                  className={`h-3 rounded ${w} ${ml} ${i === 2 ? 'bg-warm' : 'bg-accent'}`}
                />
              </div>
            ))}
          </div>
          <div className="space-y-2 rounded-lg border border-line p-3">
            <p className="text-xs text-muted">Payment proofs waiting</p>
            {['w-4/5', 'w-3/5'].map((w) => (
              <div key={w} className="flex items-center gap-2">
                <span className="size-5 rounded bg-accent-soft" />
                <Bar w={w} tone="line" />
                <span className="ml-auto rounded bg-accent-soft px-2 text-[0.65rem] font-semibold text-accent-strong">
                  Verify
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function TreeVisual() {
  const levels = ['Property', 'Building', 'Floor', 'Unit', 'Room', 'Bed'];
  return (
    <Frame>
      <div className="p-5">
        <p className="mb-3 text-xs text-muted">Property tree</p>
        <ol className="space-y-2">
          {levels.map((l, i) => (
            <li
              key={l}
              className={`flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm ${
                i === levels.length - 1
                  ? 'bg-accent-soft font-semibold'
                  : 'bg-surface'
              }`}
              // Indent by level with classes (the CSP forbids inline styles).
              data-level={i}
            >
              <span
                className={`${['ml-0', 'ml-3', 'ml-6', 'ml-9', 'ml-12', 'ml-14'][i]} flex items-center gap-2`}
              >
                <span className="size-2 rounded-full bg-accent" />
                {l}
                {(l === 'Building' || l === 'Floor') && (
                  <span className="text-xs font-normal text-muted">
                    optional
                  </span>
                )}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-muted">
          Booking a parent blocks its children. Siblings stay free.
        </p>
      </div>
    </Frame>
  );
}

function ProofVisual() {
  const steps = [
    ['Invoice', 'Bank, e-wallet or QR details and a reference'],
    ['Proof uploaded', 'Image or PDF from the tenant'],
    ['Verified', 'Approve, reject or ask a question'],
    ['Receipt', 'Issued on verified payment'],
  ];
  return (
    <Frame>
      <ol className="space-y-0 p-5">
        {steps.map(([t, d], i) => (
          <li key={t} className="relative flex gap-3 pb-5 last:pb-0">
            {i < steps.length - 1 && (
              <span className="absolute left-[0.8rem] top-7 h-[calc(100%-1.5rem)] w-px bg-line" />
            )}
            <span
              className={`z-10 grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                i === 2 ? 'bg-warm text-bg' : 'bg-accent text-on-accent'
              }`}
            >
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-semibold">{t}</p>
              <p className="text-xs text-muted">{d}</p>
            </div>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

function PhoneVisual() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-56 rounded-[2rem] border-4 border-ink/80 bg-surface p-3 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.5)]"
    >
      <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-line" />
      <div className="space-y-3">
        <div className="rounded-xl bg-accent-soft p-3">
          <p className="text-[0.7rem] font-semibold text-accent-strong">
            Rent due
          </p>
          <div className="mt-2">
            <Bar w="w-2/3" />
          </div>
          <p className="mt-2 inline-block rounded bg-accent px-2 py-0.5 text-[0.65rem] font-semibold text-on-accent">
            Upload proof
          </p>
        </div>
        <div className="rounded-xl border border-line p-3">
          <p className="text-[0.7rem] text-muted">Messages</p>
          <div className="mt-2 space-y-1.5">
            <div className="h-2 w-4/5 rounded-full bg-line" />
            <div className="ml-auto h-2 w-3/5 rounded-full bg-accent" />
            <div className="h-2 w-2/3 rounded-full bg-line" />
          </div>
        </div>
        <div className="rounded-xl border border-line p-3">
          <p className="text-[0.7rem] text-muted">Request maintenance</p>
          <div className="mt-2">
            <Bar w="w-1/2" tone="warm" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IsolationVisual() {
  return (
    <Frame>
      <div className="p-5">
        <p className="mb-3 text-xs text-muted">Client isolation</p>
        <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-3">
          <div className="rounded-lg border border-line bg-accent-soft p-3">
            <p className="text-xs font-semibold text-accent-strong">
              Business A
            </p>
            <div className="mt-3 space-y-2">
              <Bar w="w-full" />
              <Bar w="w-3/4" />
              <Bar w="w-1/2" />
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="w-1.5 rounded-full bg-warm" />
          </div>
          <div className="rounded-lg border border-line bg-surface-2 p-3">
            <p className="text-xs font-semibold text-muted">Business B</p>
            <div className="mt-3 space-y-2">
              <Bar w="w-full" tone="line" />
              <Bar w="w-2/3" tone="line" />
              <Bar w="w-3/5" tone="line" />
            </div>
          </div>
        </div>
        <p className="mt-4 rounded-lg bg-warm-soft p-2 text-xs text-ink">
          Wall between businesses: row-level security in the database
        </p>
        <p className="mt-2 rounded-lg border border-line p-2 text-xs text-muted">
          Audit log: append-only
        </p>
      </div>
    </Frame>
  );
}

function LocaleVisual() {
  const chips = [
    ['₱', 'Philippine peso'],
    ['Asia/Manila', 'Time zone'],
    ['EN · FIL', 'Languages'],
    ['BIR', 'Document aware'],
  ];
  return (
    <Frame>
      <div className="grid grid-cols-2 gap-3 p-5">
        {chips.map(([big, small]) => (
          <div
            key={big}
            className="rounded-xl border border-line bg-surface-2 p-4"
          >
            <p className="font-display text-xl font-semibold text-accent-strong sm:text-2xl">
              {big}
            </p>
            <p className="mt-1 text-xs text-muted">{small}</p>
          </div>
        ))}
        <p className="col-span-2 rounded-lg bg-warm-soft p-3 text-xs text-ink">
          Regulatory values: unverified until counsel confirms.
        </p>
      </div>
    </Frame>
  );
}

function CalendarVisual() {
  const rows = [
    ['Bed 1', 'ml-0 w-2/5', 'accent'],
    ['Bed 2', 'ml-1/4 w-1/3', 'accent'],
    ['Bed 3', 'ml-1/2 w-2/5', 'warm'],
    ['Bed 4', 'ml-[10%] w-1/4', 'accent'],
  ] as const;
  return (
    <Frame>
      <div className="p-5">
        <p className="mb-3 text-xs text-muted">Availability timeline</p>
        <div className="space-y-2.5">
          {rows.map(([label, pos, tone]) => (
            <div key={label} className="flex items-center gap-3">
              <span className="w-10 shrink-0 text-xs text-muted">{label}</span>
              <div className="h-5 grow rounded bg-surface-2">
                <div
                  className={`h-5 rounded ${pos} ${tone === 'warm' ? 'bg-warm' : 'bg-accent'}`}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          Two requests for one bed: exactly one is accepted.
        </p>
      </div>
    </Frame>
  );
}

function LedgerVisual() {
  return (
    <Frame>
      <div className="p-5">
        <p className="mb-3 text-xs text-muted">Double-entry ledger</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-line p-3">
            <p className="text-xs font-semibold text-accent-strong">Debit</p>
            <div className="mt-3 space-y-2">
              <Bar w="w-full" />
              <Bar w="w-2/3" />
            </div>
          </div>
          <div className="rounded-lg border border-line p-3">
            <p className="text-xs font-semibold text-warm">Credit</p>
            <div className="mt-3 space-y-2">
              <Bar w="w-full" tone="warm" />
              <Bar w="w-2/3" tone="warm" />
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted">
          Corrections are reversals, never edits.
        </p>
      </div>
    </Frame>
  );
}

const visuals: Record<VisualKey, () => React.JSX.Element> = {
  dashboard: Dashboard,
  tree: TreeVisual,
  proof: ProofVisual,
  phone: PhoneVisual,
  isolation: IsolationVisual,
  locale: LocaleVisual,
  calendar: CalendarVisual,
  ledger: LedgerVisual,
};

export function Visual({ name }: { name: VisualKey }) {
  const Component = visuals[name];
  return <Component />;
}
