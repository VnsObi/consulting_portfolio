import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { areaLabel, formatDate, type InsightCard as Card } from "@/lib/insight-format";

/**
 * Stand-in until a cover is added in Sanity: a blueprint sheet in ink with a
 * faint grid and the research area, so cards stay even without inventing art.
 */
function CoverPlaceholder({ card }: { card: Card }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-end bg-deep-slate p-6 bg-[linear-gradient(rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-[size:24px_24px]"
    >
      <span className="font-display text-xl text-white/85">{areaLabel(card.tag)}</span>
    </div>
  );
}

/** The article's own cover image, or the blueprint placeholder until one exists. */
export function InsightCover({
  card,
  sizes,
  priority = false,
}: {
  card: Card;
  sizes: string;
  priority?: boolean;
}) {
  if (!card.coverImage) return <CoverPlaceholder card={card} />;
  return (
    <Image
      src={card.coverImage.url}
      alt={card.coverImage.alt ?? ""}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
      {...(card.coverImage.lqip
        ? { placeholder: "blur" as const, blurDataURL: card.coverImage.lqip }
        : {})}
    />
  );
}

export function InsightMeta({ card }: { card: Card }) {
  return (
    <div className="text-sm text-slate-500">
      <p className="font-semibold text-midnight-blue">{areaLabel(card.tag)}</p>
      <p className="mt-1">
        <time dateTime={card.publishedAt}>{formatDate(card.publishedAt)}</time>
        <span aria-hidden="true" className="mx-2 text-slate-300">·</span>
        {card.readMinutes} min read
      </p>
    </div>
  );
}

export default function InsightCard({ card }: { card: Card }) {
  return (
    <Link
      href={`/insights/${card.slug}`}
      className="group flex flex-col h-full bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-400 transition-colors duration-300"
    >
      <div className="relative aspect-[16/9] bg-deep-slate">
        <InsightCover
          card={card}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
        />
      </div>
      <div className="flex flex-col flex-grow p-6 md:p-7">
        <InsightMeta card={card} />
        <h3 className="mt-4 text-xl font-semibold text-deep-slate leading-snug text-balance group-hover:text-midnight-blue transition-colors">
          {card.title}
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed flex-grow">{card.summary}</p>
        <span className="mt-6 text-midnight-blue font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
          Read article <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
