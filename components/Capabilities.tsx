"use client";

import { motion } from "framer-motion";
import { capabilities, toolkit } from "@/lib/content";

export default function Capabilities() {
  return (
    <section className="py-24 px-6 bg-slate-50" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-slate">
            Core Capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.08, duration: 0.4 }}
              className="bg-white p-8 rounded-2xl border border-slate-200"
            >
              <span
                aria-hidden="true"
                className="block w-10 h-1 rounded-full bg-midnight-blue mb-6"
              />
              <h3 className="text-xl font-bold text-deep-slate mb-3 leading-snug">
                {capability.title}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Toolkit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-slate mb-14">
            Technology &amp; Delivery Toolkit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {toolkit.map((group) => (
              <div key={group.group}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 pb-3 mb-4 border-b border-slate-300">
                  {group.group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm rounded-lg font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
