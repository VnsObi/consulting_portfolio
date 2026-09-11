"use client";

import { motion } from "framer-motion";
import { contribute } from "@/lib/content";

export default function Contribute() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-deep-slate mb-14"
        >
          Ways I Can Contribute
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {contribute.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="border-t-2 border-deep-slate pt-6"
            >
              <h3 className="text-xl font-bold text-deep-slate mb-3">
                {item.title}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
