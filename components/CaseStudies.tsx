"use client";

import { motion } from "framer-motion";

export default function CaseStudies() {
  const cases = [
    {
      title: "SaaS Operations Platform",
      problem: "Team burnout from 12hr shifts managing manual inventory",
      decision: "Unified dashboard with automated reconciliation",
      outcome: "Teams got their weekends back. Error rates dropped 98%.",
      tags: ["Automation", "Multi-tenant", "SaaS"],
    },
    {
      title: "Security & Protocol Architecture",
      problem: "Constant anxiety over data breaches",
      decision: "Zero-trust architecture with seamless SSO",
      outcome: "Peace of mind. Zero incidents. Audits passed effortlessly.",
      tags: ["Security", "Compliance", "Financial"],
    },
    {
      title: "Offline-First Mobile System",
      problem: "Field agents couldn't work when the internet failed",
      decision: "Robust local-first sync engine",
      outcome: "Revenue didn't stop when the connection did.",
      tags: ["Offline-First", "Sync", "Resilience"],
    },
  ];

  return (
    <section className="py-24 px-6 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-deep-slate mb-4">
            Impact, Not Just Output
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories of how technology changed daily operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-midnight-blue/20 bg-gradient-to-b from-white to-slate-50/50"
            >
              <h3 className="text-2xl font-semibold text-deep-slate mb-8 leading-tight h-16">
                {study.title}
              </h3>

              <div className="space-y-6 mb-8 relative">
                {/* Vertical line connecting sections */}
                <div className="absolute left-[3px] top-2 bottom-2 w-0.5 bg-slate-100"></div>

                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                    Problem
                  </div>
                  <div className="text-slate-700 leading-snug font-medium">
                    {study.problem}
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-blue-400"></div>
                  <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                    Decision
                  </div>
                  <div className="text-slate-700 leading-snug font-medium">
                    {study.decision}
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-emerald-400"></div>
                  <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                    Outcome
                  </div>
                  <div className="text-deep-slate font-bold leading-snug">
                    {study.outcome}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {study.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs uppercase tracking-wide rounded-full font-bold shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
