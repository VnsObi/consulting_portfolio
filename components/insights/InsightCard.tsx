import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { areaLabel, formatDate, type InsightCard as Card } from "@/lib/insight-format";

/** The article's own cover image. Callers render nothing when there isn't one. */
export function InsightCover({
  card,
  sizes,
  priority = false,
}: {
  card: Card;
  sizes: string;
  priority?: boolean;
}) {
  if (!card.coverImage) return null;
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

/**
 * Typographic card: the writing is the content, so cards carry no image.
 * Covers appear where they earn the space (the featured slot, the article).
 */
export default function InsightCard({ card }: { card: Card }) {
  return (
    <Link
      href={`/insights/${card.slug}`}
      className="group flex flex-col h-full bg-white rounded-xl border border-slate-200 p-6 md:p-7 hover:border-slate-400 transition-colors duration-300"
    >
      <InsightMeta card={card} />
      <h3 className="mt-4 text-xl font-semibold text-deep-slate leading-snug text-balance group-hover:text-midnight-blue transition-colors">
        {card.title}
      </h3>
      <p className="mt-3 text-slate-600 leading-relaxed flex-grow">{card.summary}</p>
      <span className="mt-6 text-midnight-blue font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
        Read article <ArrowRight size={16} />
      </span>
    </Link>
  );
}
