"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Hero() {
  const trustedLogos = [
    "Dustid",
    "CIUCI International",
    "AGCare Group",
    "Edi Hospital",
    "AGCare Specialist Clinic",
    "Ameso Specialist Clinic",
    "Argus Protocol",
    "AGCare Healthtech",
  ];

  return (
    <section
      className="min-h-screen flex items-center pt-32 pb-20 px-6 bg-alabaster"
      id="hero"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            {/* Status Indicator */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-100 shadow-sm"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <span className="text-sm font-medium text-slate-700">
                Online · Africa (WAT) · Global availability
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold tracking-tight text-deep-slate leading-tight mb-6"
            >
              Technology Strategy & <br className="hidden md:block" />
              Digital Systems for <br className="hidden md:block" />
              Growing Organizations
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10"
            >
              I am an{" "}
              <strong className="font-bold text-deep-slate">
                IT Manager & Enterprise Consultant
              </strong>
              . I help{" "}
              <strong className="font-bold text-deep-slate">
                operation-heavy businesses
              </strong>{" "}
              design, secure, and scale reliable technology systems — replacing
              manual chaos with automated, profit-generating infrastructure.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mb-20"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-deep-slate text-white text-lg font-semibold rounded-lg hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group gap-2"
              >
                View Engagement Models
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>
              <a
                href="https://wa.me/2349075717088"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-slate-300 text-deep-slate text-lg font-semibold rounded-lg hover:border-green-600 hover:text-green-700 hover:bg-green-50 transition-all duration-300 gap-2"
              >
                <MessageCircle size={20} />
                Direct Inquiry
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pt-16 border-t border-gray-200"
        >
          <p className="text-sm font-medium text-gray-400 mb-8 text-center uppercase tracking-widest">
            Trusted by innovators in
          </p>
          <div className="relative overflow-hidden w-full max-w-5xl mx-auto">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {/* Double the array to create seamless loop */}
              {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-2xl font-bold text-slate-300 hover:text-slate-500 transition-colors duration-300 cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                  {logo}
                </div>
              ))}
            </div>
            {/* Gradient masks for smooth fade */}
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-alabaster to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-alabaster to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
