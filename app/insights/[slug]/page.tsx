import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleBody from "@/components/insights/ArticleBody";
import InsightCard from "@/components/insights/InsightCard";
import { getInsight, getInsights } from "@/lib/insights";
import {
  PERSONAL_SITE,
  areaLabel,
  canonicalUrl,
  formatDate,
  formatLabel,
  pickRelated,
} from "@/lib/insight-format";

interface Props {
  params: Promise<{ slug: string }>;
}

// Articles published after the last deploy render on first request, then cache.
export const revalidate = 300;

export async function generateStaticParams() {
  const cards = await getInsights();
  return cards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) return { title: "Insight not found" };

  const title = insight.seoTitle ?? insight.title;
  const description = insight.seoDescription ?? insight.summary;
  const cover = insight.coverImage;
  const images = cover
    ? [{ url: `${cover.url}?w=1200&fm=jpg&q=85`, alt: cover.alt ?? insight.title }]
    : undefined;

  return {
    title: `${title} | Evans Obi`,
    description,
    // Points to VNSIS when that is where the article was first published.
    alternates: { canonical: canonicalUrl(insight) },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: insight.publishedAt,
      modifiedTime: insight.updatedAt,
      authors: ["Evans Obi"],
      section: areaLabel(insight.tag),
      url: `${PERSONAL_SITE}/insights/${slug}`,
      siteName: "Evans Obi",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images?.map((image) => image.url),
    },
  };
}

const sectionHeading = "text-sm font-bold uppercase tracking-wider text-slate-500 mb-4";

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const [insight, all] = await Promise.all([getInsight(slug), getInsights()]);
  if (!insight) notFound();

  const related = pickRelated(all, insight, 3);
  const fromVnsis = insight.canonicalSite === "vnsis";
  const cover = insight.coverImage;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: insight.title,
    description: insight.summary,
    datePublished: insight.publishedAt,
    dateModified: insight.updatedAt,
    articleSection: areaLabel(insight.tag),
    image: cover ? `${cover.url}?w=1200&fm=jpg&q=85` : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl(insight) },
    author: { "@type": "Person", name: "Evans Obi", url: PERSONAL_SITE },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-white">
        <article>
          <header className="max-w-[42rem] mx-auto px-6">
            <Link
              href="/insights"
              className="inline-flex items-center min-h-11 text-slate-500 hover:text-midnight-blue transition-colors mb-8 group"
            >
              <ArrowLeft
                size={20}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              All insights
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-deep-slate leading-tight text-balance">
              {insight.title}
            </h1>

            {insight.researchQuestion && (
              <p className="mt-6 text-xl text-deep-slate font-medium leading-relaxed border-l border-midnight-blue pl-5">
                {insight.researchQuestion}
              </p>
            )}

            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              {insight.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
              <span className="font-semibold text-deep-slate">Evans Obi</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt)}</time>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{insight.readMinutes} min read</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              <span className="font-semibold text-midnight-blue">{areaLabel(insight.tag)}</span>
              <span aria-hidden="true" className="mx-2 text-slate-300">·</span>
              {formatLabel(insight.format)}
            </p>

            {fromVnsis && (
              <p className="mt-4 text-sm text-slate-500">
                Originally published by{" "}
                <a
                  href={canonicalUrl(insight)}
                  className="font-semibold text-midnight-blue hover:underline"
                >
                  VNSIS Technologies
                </a>
                .
              </p>
            )}
          </header>

          {cover && (
            <figure className="max-w-5xl mx-auto px-6 mt-12">
              <Image
                src={cover.url}
                alt={cover.alt ?? ""}
                width={cover.width}
                height={cover.height}
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
                className="w-full h-auto rounded-2xl border border-slate-200"
                {...(cover.lqip ? { placeholder: "blur" as const, blurDataURL: cover.lqip } : {})}
              />
            </figure>
          )}

          <div className="max-w-[42rem] mx-auto px-6 mt-12">
            {insight.keyTakeaways && insight.keyTakeaways.length > 0 && (
              <aside className="mb-12 rounded-xl bg-slate-50 border border-slate-200 p-6 md:p-8">
                <h2 className={sectionHeading}>Key takeaways</h2>
                <ul className="space-y-3">
                  {insight.keyTakeaways.map((point) => (
                    <li key={point} className="text-lg text-deep-slate leading-snug pl-5 relative">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-midnight-blue"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            <ArticleBody body={insight.body} />

            {insight.faq && insight.faq.length > 0 && (
              <section className="mt-16 pt-10 border-t border-slate-200">
                <h2 className={sectionHeading}>Questions this answers</h2>
                <dl className="space-y-6">
                  {insight.faq.map((item) => (
                    <div key={item.question}>
                      <dt className="text-lg font-semibold text-deep-slate">{item.question}</dt>
                      <dd className="mt-2 text-slate-700 leading-relaxed">{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {insight.companionLinks && insight.companionLinks.length > 0 && (
              <section className="mt-16 pt-10 border-t border-slate-200">
                <h2 className={sectionHeading}>Companion resources</h2>
                <ul className="flex flex-wrap gap-3">
                  {insight.companionLinks.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-deep-slate hover:border-slate-400 hover:bg-slate-50 transition-colors"
                      >
                        {link.label}
                        <ArrowUpRight size={16} />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {insight.references && insight.references.length > 0 && (
              <section className="mt-16 pt-10 border-t border-slate-200">
                <h2 className={sectionHeading}>References</h2>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                  {insight.references.map((ref) => (
                    <li key={ref.title}>
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-midnight-blue hover:underline"
                        >
                          {ref.title}
                        </a>
                      ) : (
                        <span className="font-medium text-deep-slate">{ref.title}</span>
                      )}
                      {[ref.source, ref.year].filter(Boolean).length > 0 && (
                        <span className="text-slate-500">
                          {" "}— {[ref.source, ref.year].filter(Boolean).join(", ")}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </article>

        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-deep-slate mb-10">
              More insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((card) => (
                <InsightCard key={card.slug} card={card} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
