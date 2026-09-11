"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { hero, organisations, profile } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Hero() {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-6 bg-alabaster" id="hero">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold tracking-tight text-deep-slate leading-[1.1] mb-5"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg font-semibold text-midnight-blue tracking-wide mb-8"
          >
            {hero.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-10"
          >
            <a
              href="#work"
              onClick={scrollToWork}
              className="inline-flex items-center justify-center px-7 py-4 bg-deep-slate text-white text-base font-semibold rounded-lg hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group gap-2"
            >
              View Selected Work
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-4 bg-white border border-slate-300 text-deep-slate text-base font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 gap-2"
            >
              <Github size={20} />
              View GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center px-7 py-4 bg-white border border-slate-300 text-deep-slate text-base font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-sm font-medium text-slate-500"
          >
            {hero.meta.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className="text-slate-300">
                    ·
                  </span>
                )}
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Organisations worked with */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 pt-12 border-t border-slate-200"
        >
          <h2 className="text-xs font-semibold text-slate-400 mb-6 uppercase tracking-widest text-center">
            Organisations I have built for and worked with
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {organisations.map((org) => (
              <li
                key={org}
                className="text-base md:text-lg font-semibold text-slate-400"
              >
                {org}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
