import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Insights | Lastname.Consulting",
  description:
    "Perspectives on technology strategy, operations, and resilience.",
};

export default function InsightsArchive() {
  const allPosts = getSortedPostsData();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-slate-500 hover:text-midnight-blue transition-colors mb-6 group"
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
              In-depth analysis and strategies for building resilient technical
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <Link
                key={post.id}
                href={`/insights/${post.id}`}
                className="block p-8 bg-white rounded-xl border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg h-full flex flex-col"
              >
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-deep-slate mb-3 group-hover:text-midnight-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {post.summary}
                </p>
                <span className="text-midnight-blue font-semibold text-sm group-hover:underline">
                  Read article &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
