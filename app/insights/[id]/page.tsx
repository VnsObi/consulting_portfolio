import { getPostData } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const postData = await getPostData(id);

  return {
    title: `${postData.title} | Lastname.Consulting`,
    description: postData.summary,
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-white">
        <article className="max-w-3xl mx-auto px-6">
          <Link
            href="/#insights"
            className="inline-flex items-center text-slate-500 hover:text-midnight-blue transition-colors mb-8 group"
          >
            <ArrowLeft
              size={20}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            Back to Insights
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
              <time dateTime={postData.date}>{postData.date}</time>
              <span>•</span>
              <span>{postData.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-slate mb-6 leading-tight">
              {postData.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              {postData.summary}
            </p>
          </header>

          <div
            className="prose prose-lg text-slate-700 max-w-none 
              prose-headings:text-deep-slate prose-headings:font-bold
              prose-a:text-midnight-blue prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-deep-slate
              prose-blockquote:border-l-4 prose-blockquote:border-midnight-blue prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:bg-alabaster prose-blockquote:py-2 prose-blockquote:pr-4"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
