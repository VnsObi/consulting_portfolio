"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { hero, organisations, profile } from "@/lib/content";

// The page's one authored entrance: content is visible from the first paint
// and settles upward with an exponential ease-out. Never fades in from zero.
const rise = {
  hidden: { y: 12 },
  visible: { y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.08 } },
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
            variants={rise}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-deep-slate leading-[1.08] text-balance mb-5"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            variants={rise}
            className="text-base md:text-lg font-semibold text-midnight-blue tracking-wide mb-8"
          >
            {hero.tagline}
          </motion.p>

          <motion.p
            variants={rise}
            className="text-lg md:text-[1.375rem] text-slate-700 max-w-[58ch] mx-auto leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={rise}
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
            variants={rise}
            className="mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-x-3 gap-y-1.5 sm:gap-y-2 text-sm font-medium text-slate-500"
          >
            {hero.meta.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 && (
                  // Stacked on phones, where a wrapped line would start with a stray dot.
                  <span aria-hidden="true" className="hidden sm:inline text-slate-300">
                    ·
                  </span>
                )}
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Organisations worked with */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <h2 className="font-sans text-xs font-semibold text-slate-500 mb-6 uppercase tracking-widest text-center">
            Organisations I have built for and worked with
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {organisations.map((org) => (
              <li
                key={org}
                className="text-base md:text-lg font-semibold text-slate-500"
              >
                {org}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
