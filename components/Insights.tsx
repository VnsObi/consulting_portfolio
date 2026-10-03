import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { InsightCard as Card } from "@/lib/insight-format";
import InsightCard from "@/components/insights/InsightCard";

export default function Insights({ cards }: { cards: Card[] }) {
  if (cards.length === 0) return null;

  return (
    <section className="py-24 bg-alabaster" id="insights">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-deep-slate mb-4">
              Insights
            </h2>
            <p className="text-lg text-slate-600">
              The engineering principles underneath the work — written from
              systems I have actually shipped.
            </p>
          </div>
          <Link
            href="/insights"
            className="text-midnight-blue font-semibold inline-flex items-center gap-2 min-h-11 hover:gap-3 transition-all"
          >
            Read all articles <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <InsightCard key={card.slug} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
