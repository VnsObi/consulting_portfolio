import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getInsights } from "@/lib/insights";
import InsightIndex from "@/components/insights/InsightIndex";

// New articles published in Sanity appear within five minutes, without a redeploy.
export const revalidate = 300;

export const metadata = {
  title: "Insights | Evans Obi",
  description:
    "Notes on systems architecture, infrastructure, security, and AI — written from production work rather than theory.",
  alternates: {
    canonical: "/insights",
  },
};

export default async function InsightsArchive() {
  const cards = await getInsights();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center min-h-11 text-slate-500 hover:text-midnight-blue transition-colors mb-4 group"
            >
              <ArrowLeft
                size={20}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-slate mb-6">
              Insights
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Notes on architecture, infrastructure, security, and AI systems —
              written from work I have actually shipped.
            </p>
          </div>

          <InsightIndex cards={cards} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
