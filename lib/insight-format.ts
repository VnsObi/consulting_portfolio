/**
 * Insight types and display helpers. Kept apart from lib/insights.ts so
 * client components can use them without bundling the Sanity client.
 */

import type { PortableTextBlock } from "@portabletext/react";

export const PERSONAL_SITE = "https://evansobi.systems";
export const VNSIS_SITE = "https://www.vnsis.com";

export type CanonicalSite = "personal" | "vnsis";

export interface InsightImage {
  url: string;
  alt: string | null;
  width: number;
  height: number;
  lqip: string | null;
}

export interface InsightCard {
  slug: string;
  title: string;
  summary: string;
  tag: string;
  format: string | null;
  readMinutes: number;
  publishedAt: string;
  updatedAt: string;
  coverImage: InsightImage | null;
  canonicalSite: CanonicalSite | null;
}

export interface Insight extends InsightCard {
  researchQuestion: string | null;
  body: PortableTextBlock[];
  keyTakeaways: string[] | null;
  faq: { question: string; answer: string }[] | null;
  references:
    | { title: string; source: string | null; year: string | null; url: string | null }[]
    | null;
  companionLinks: { kind: string | null; label: string; url: string }[] | null;
  seoTitle: string | null;
  seoDescription: string | null;
}

/** Research areas, matching the VNSIS Studio's option list. */
const AREA_LABELS: Record<string, string> = {
  Healthcare: "Health Technology",
  AI: "AI Systems",
  Blockchain: "Blockchain & Trust",
  Web3: "Blockchain & Trust",
  FieldNotes: "Field Notes",
  Architecture: "Systems Architecture",
  Security: "Security & Infrastructure",
  Infrastructure: "Security & Infrastructure",
  Leadership: "Engineering Leadership",
};

export function areaLabel(tag: string): string {
  return AREA_LABELS[tag] ?? tag;
}

const FORMAT_LABELS: Record<string, string> = {
  "research-article": "Research Article",
  "architecture-paper": "Architecture Paper",
  "research-note": "Research Note",
  "technical-experiment": "Technical Experiment",
  framework: "Framework",
  "field-note": "Field Note",
};

export function formatLabel(format: string | null): string {
  return (format && FORMAT_LABELS[format]) ?? "Article";
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

/** Where the original lives. Defaults to this site. */
export function canonicalUrl(insight: Pick<Insight, "slug" | "canonicalSite">): string {
  return insight.canonicalSite === "vnsis"
    ? `${VNSIS_SITE}/insights/${insight.slug}`
    : `${PERSONAL_SITE}/insights/${insight.slug}`;
}

/** Same research area first, then most recent. */
export function pickRelated(
  all: InsightCard[],
  current: InsightCard,
  count: number,
): InsightCard[] {
  return all
    .filter((card) => card.slug !== current.slug)
    .sort(
      (a, b) =>
        Number(b.tag === current.tag) - Number(a.tag === current.tag) ||
        b.publishedAt.localeCompare(a.publishedAt),
    )
    .slice(0, count);
}
