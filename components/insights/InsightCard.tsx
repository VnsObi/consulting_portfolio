import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { areaLabel, formatDate, type InsightCard as Card } from "@/lib/insight-format";

/** Cover fallback when an article has no image: one tone per research area. */
const AREA_TONE: Record<string, string> = {
  Healthcare: "from-teal-900 to-slate-900",
  AI: "from-blue-900 to-slate-900",
  Blockchain: "from-violet-900 to-slate-900",
  Web3: "from-violet-900 to-slate-900",
  Architecture: "from-slate-700 to-slate-900",
  Security: "from-rose-900 to-slate-900",
  Infrastructure: "from-rose-900 to-slate-900",
  Leadership: "from-emerald-900 to-slate-900",
  FieldNotes: "from-amber-900 to-slate-900",
};

export function InsightCover({
  card,
  sizes,
  priority = false,
}: {
  card: Card;
  sizes: string;
  priority?: boolean;
}) {
  if (card.coverImage) {
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
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 bg-gradient-to-br ${AREA_TONE[card.tag] ?? "from-slate-700 to-slate-900"} flex items-end p-6`}
    >
      <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">
        {areaLabel(card.tag)}
      </span>
    </div>
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
      className="group flex flex-col h-full bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[16/9] bg-slate-100">
        <InsightCover card={card} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px" />
      </div>
      <div className="flex flex-col flex-grow p-6 md:p-7">
        <InsightMeta card={card} />
        <h3 className="mt-3 text-xl font-bold text-deep-slate leading-snug group-hover:text-midnight-blue transition-colors">
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
