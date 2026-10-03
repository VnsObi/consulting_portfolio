"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { areaLabel, type InsightCard as Card } from "@/lib/insight-format";
import InsightCard, { InsightCover, InsightMeta } from "./InsightCard";

function Featured({ card }: { card: Card }) {
  return (
    <Link
      href={`/insights/${card.slug}`}
      className="group grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-400 transition-colors duration-300"
    >
      {/* Covers are designed at 16:9; keep that ratio so nothing is cropped. */}
      <div className="flex items-center bg-deep-slate">
        <div className="relative aspect-[16/9] w-full">
          <InsightCover card={card} sizes="(max-width: 1024px) 100vw, 640px" priority />
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12">
        <InsightMeta card={card} />
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-deep-slate leading-tight text-balance group-hover:text-midnight-blue transition-colors">
          {card.title}
        </h2>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-[65ch]">
          {card.summary}
        </p>
        <span className="mt-8 text-midnight-blue font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
          Read article <ArrowRight size={18} />
        </span>
      </div>
    </Link>
  );
}

export default function InsightIndex({ cards }: { cards: Card[] }) {
  const [area, setArea] = useState("all");
  const areas = [...new Set(cards.map((card) => card.tag))];
  const filtered = area === "all" ? cards : cards.filter((card) => card.tag === area);
  // The newest article is featured only on the unfiltered view.
  const featured = area === "all" ? filtered[0] : undefined;
  const grid = featured ? filtered.slice(1) : filtered;

  if (cards.length === 0) {
    return (
      <p className="text-lg text-slate-600">
        No articles published yet. Check back soon.
      </p>
    );
  }

  return (
    <>
      {areas.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by research area">
          {["all", ...areas].map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={area === value}
              onClick={() => setArea(value)}
              className={`px-4 min-h-11 rounded-lg text-sm font-semibold border transition-colors ${
                area === value
                  ? "bg-deep-slate text-white border-deep-slate"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-deep-slate"
              }`}
            >
              {value === "all" ? "All" : areaLabel(value)}
            </button>
          ))}
        </div>
      )}

      {featured && (
        <div className="mb-10">
          <Featured card={featured} />
        </div>
      )}

      {grid.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grid.map((card) => (
            <InsightCard key={card.slug} card={card} />
          ))}
        </div>
      )}
    </>
  );
}
