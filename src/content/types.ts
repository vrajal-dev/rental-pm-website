export type VisualKey =
  | 'dashboard'
  | 'tree'
  | 'proof'
  | 'phone'
  | 'isolation'
  | 'locale'
  | 'calendar'
  | 'ledger';

export interface Cta {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface CardItem {
  title: string;
  body: string;
  href?: string;
}

export type Section =
  | {
      kind: 'hero';
      eyebrow?: string;
      title: string;
      lead: string;
      ctas?: Cta[];
      visual?: VisualKey;
      note?: string;
    }
  | {
      kind: 'cards';
      title: string;
      intro?: string;
      columns?: 2 | 3 | 4;
      items: CardItem[];
      tone?: 'plain' | 'tinted';
    }
  | {
      kind: 'split';
      title: string;
      paragraphs: string[];
      bullets?: string[];
      visual: VisualKey;
      reverse?: boolean;
      link?: { label: string; href: string };
    }
  | {
      kind: 'steps';
      title: string;
      intro?: string;
      items: { title: string; body: string }[];
    }
  | {
      kind: 'checklist';
      title: string;
      intro?: string;
      items: string[];
      columns?: 1 | 2;
    }
  | {
      kind: 'table';
      title: string;
      intro?: string;
      columns: string[];
      rows: string[][];
    }
  | {
      kind: 'faq';
      title: string;
      items: { q: string; a: string }[];
    }
  | {
      kind: 'callout';
      title: string;
      body: string[];
      tone: 'info' | 'warning';
    }
  | {
      kind: 'prose';
      title?: string;
      blocks: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
    }
  | { kind: 'contact' }
  | { kind: 'cta'; title: string; body: string; ctas: Cta[] };

export interface PageContent {
  sections: Section[];
}
