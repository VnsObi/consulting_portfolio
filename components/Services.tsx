"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const tiers = [
    {
      name: "Foundation",
      subtitle: "SMOs / SMEs",
      description: "Essential technology setup for growing businesses",
      features: [
        "High-Performance Websites",
        "Web Platforms & Apps",
        "Revenue Operations Setup",
        "Technical Consultation",
        "Performance Optimization",
      ],
      cta: "Get Started",
    },
    {
      name: "Custom Systems",
      subtitle: "Business Automation",
      description: "Tailored internal tools and workflows",
      features: [
        "Custom Software Development",
        "Web & Mobile Applications",
        "Dashboards & analytics",
        "API integrations",
        "Data workflows",
      ],
      cta: "Discuss Project",
      featured: true,
    },
    {
      name: "Advisory & Retainer",
      subtitle: "Fractional CTO",
      description: "Strategic guidance and ongoing support",
      features: [
        "Fractional CTO services",
        "Security reviews",
        "Architecture design",
        "Team guidance",
        "Technology roadmap",
      ],
      cta: "Schedule Call",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-deep-slate mb-4">
            Services & Engagement Models
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Flexible engagement options designed for different organizational
            needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`bg-white rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                tier.featured
                  ? "ring-2 ring-deep-slate shadow-2xl relative scale-105 md:-mt-4 md:-mb-4 z-10"
                  : "border border-slate-200 hover:border-slate-300 hover:shadow-xl"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span className="bg-deep-slate text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg ring-4 ring-white">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-deep-slate mb-1">
                  {tier.name}
                </h3>
                <div className="text-sm text-midnight-blue font-bold tracking-wide mb-3 uppercase">
                  {tier.subtitle}
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="mt-0.5 bg-blue-50 text-midnight-blue rounded-full p-0.5 flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-medium leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`w-full py-3 px-4 rounded-lg font-bold text-center transition-all duration-300 block ${
                  tier.featured
                    ? "bg-deep-slate text-white hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200 hover:text-deep-slate"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
