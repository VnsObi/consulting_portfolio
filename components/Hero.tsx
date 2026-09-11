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
            className="text-4xl md:text-6xl font-bold tracking-tight text-deep-slate leading-[1.1] mb-8"
          >
            Technology Leadership &amp;<br className="hidden md:block" />{" "}
            Full-Stack Product Delivery
          </motion.h1>

          {hero.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6"
            >
              {paragraph}
            </motion.p>
          ))}

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

          <motion.p
            variants={fadeUp}
            className="mt-8 text-sm font-medium text-slate-500"
          >
            {profile.location}
          </motion.p>
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
