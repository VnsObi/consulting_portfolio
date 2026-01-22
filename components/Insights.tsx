"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { PostData } from "@/lib/posts";

interface InsightsProps {
  posts: PostData[];
}

export default function Insights({ posts }: InsightsProps) {
  return (
    <section className="py-24 bg-alabaster" id="insights">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-deep-slate mb-4">
              Insights
            </h2>
            <p className="text-lg text-slate-600">
              Perspectives on technology strategy, operations, and resilience.
            </p>
          </div>
          <Link
            href="/insights"
            className="text-midnight-blue font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Read all articles <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group cursor-pointer h-full"
            >
              <Link
                href={`/insights/${post.id}`}
                className="block p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 text-sm text-slate-400 mb-4 font-medium uppercase tracking-wide">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-deep-slate mb-3 group-hover:text-midnight-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {post.summary}
                </p>

                <div className="text-midnight-blue font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
