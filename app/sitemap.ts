import { MetadataRoute } from "next";
import { getInsights } from "@/lib/insights";
import { PERSONAL_SITE } from "@/lib/insight-format";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = PERSONAL_SITE;

  // Articles whose original lives on VNSIS belong in VNSIS's sitemap, not this one.
  const insights = (await getInsights()).filter(
    (card) => card.canonicalSite !== "vnsis",
  );
  const insightUrls = insights.map((card) => ({
    url: `${baseUrl}/insights/${card.slug}`,
    lastModified: new Date(card.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...insightUrls,
  ];
}
