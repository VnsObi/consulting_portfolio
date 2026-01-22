"use client";

import { motion } from "framer-motion";
import { Network, TrendingUp, Shield, Users } from "lucide-react";

export default function ValueProp() {
  const cards = [
    {
      icon: Network,
      title: "Eliminating Operational Friction",
      description:
        "Internal tools and platforms that replace fragmented spreadsheets with automated workflows.",
      color: "bg-blue-50",
      iconColor: "text-blue-900",
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description:
        "Infrastructure designed to grow from local teams to global users without expensive rework.",
      color: "bg-green-50",
      iconColor: "text-green-900",
    },
    {
      icon: Shield,
      title: "Revenue Protection",
      description:
        "Security and reliability measures that keep business running in real-world, constrained environments.",
      color: "bg-red-50",
      iconColor: "text-red-900",
    },
    {
      icon: Users,
      title: "Executive Technical Strategy",
      description:
        "Fractional leadership to guide decision-making without the overhead of a full-time CTO.",
      color: "bg-purple-50",
      iconColor: "text-purple-900",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" id="expertise">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-deep-slate mb-4">
            What I Actually Do
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Strategic technology consulting focused on business outcomes
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`${card.color} p-8 rounded-2xl cursor-default border border-transparent hover:border-black/5 transition-all duration-300`}
            >
              <div
                className={`${card.iconColor} mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm`}
              >
                <card.icon size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-deep-slate mb-3">
                {card.title}
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
