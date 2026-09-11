"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section className="py-24 px-6 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-deep-slate">
              {about.heading}
            </h2>
            <p className="mt-6 text-base text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-5">
              {about.experienceNote}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 space-y-6"
          >
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-slate-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
