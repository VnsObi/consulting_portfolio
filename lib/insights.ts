/**
 * Insights come from the Sanity project shared with the VNSIS website.
 * This site shows only articles with publishOnPersonal == true; the VNSIS
 * site has its own flag, so each article is routed from one CMS.
 *
 * Server-only: display helpers and types live in lib/insight-format.ts.
 */

import { createClient } from "@sanity/client";
import type { Insight, InsightCard } from "@/lib/insight-format";

/**
 * Set SANITY_PREVIEW_TOKEN locally to read unpublished drafts, e.g. to
 * review imported articles before publishing them in the Studio.
 */
const previewToken = process.env.SANITY_PREVIEW_TOKEN;

const client = createClient({
  // Public project values, not secrets. Env vars allow pointing elsewhere.
  projectId: process.env.SANITY_PROJECT_ID ?? "yb5nihr6",
  dataset: process.env.SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: !previewToken,
  perspective: previewToken ? "drafts" : "published",
  token: previewToken,
});

const ON_PERSONAL = `_type == "insight" && publishOnPersonal == true && defined(slug.current)`;

const CARD_FIELDS = `
  "slug": slug.current,
  title,
  summary,
  tag,
  format,
  readMinutes,
  publishedAt,
  "updatedAt": _updatedAt,
  canonicalSite,
  "coverImage": select(defined(coverImage.asset) => coverImage{
    "url": asset->url,
    alt,
    "width": asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height,
    "lqip": asset->metadata.lqip
  })
`;

const FULL_FIELDS = `
  ${CARD_FIELDS},
  researchQuestion,
  "body": body[]{
    ...,
    _type == "imageBlock" => {
      "url": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  },
  keyTakeaways,
  faq[]{ question, answer },
  references[]{ title, source, year, url },
  companionLinks[]{ kind, label, url },
  "seoTitle": seo.seoTitle,
  "seoDescription": seo.seoDescription
`;

export function getInsights(): Promise<InsightCard[]> {
  return client.fetch(
    `*[${ON_PERSONAL}] | order(publishedAt desc) { ${CARD_FIELDS} }`,
  );
}

export function getInsight(slug: string): Promise<Insight | null> {
  return client.fetch(
    `*[${ON_PERSONAL} && slug.current == $slug][0] { ${FULL_FIELDS} }`,
    { slug },
  );
}
