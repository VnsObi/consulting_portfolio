"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/content";

function ProjectGallery({ project }: { project: Project }) {
  const gallery = project.gallery ?? [];
  const [active, setActive] = useState(0);
  const shot = gallery[active];

  if (!shot) return null;

  return (
    <figure className="mt-10">
      <div
        className="flex flex-wrap gap-2 mb-4"
        role="group"
        aria-label="HealthOS connectivity states"
      >
        {gallery.map((item, index) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={index === active}
            onClick={() => setActive(index)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors border ${
              index === active
                ? "bg-deep-slate text-white border-deep-slate"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-deep-slate"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={1600}
          height={1000}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="w-full h-auto"
        />
      </div>

      <figcaption className="mt-3 text-sm text-slate-600 leading-relaxed">
        {shot.caption}
      </figcaption>
    </figure>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="py-14 border-b border-slate-200 last:border-b-0"
      aria-labelledby={`project-${project.id}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
        {/* Left column: title, summary, visual */}
        <div className="lg:col-span-7">
          <span className="text-sm font-bold text-slate-400 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            id={`project-${project.id}`}
            className="text-2xl md:text-3xl font-bold text-deep-slate mt-2 mb-6 leading-tight"
          >
            {project.title}
          </h3>

          <div className="space-y-4">
            {project.summary.map((paragraph, i) => (
              <p key={i} className="text-lg text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {project.gallery && <ProjectGallery project={project} />}

          {project.note && (
            <p className="mt-8 text-lg text-deep-slate font-medium leading-relaxed border-l-2 border-midnight-blue pl-5">
              {project.note}
            </p>
          )}

          {project.pending && (
            <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                Details still to be added
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                {project.pending.map((item) => (
                  <li key={item} className="text-sm text-slate-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right column: role, technical focus, status */}
        <div className="lg:col-span-5 space-y-8">
          {project.blocks?.map((block) => (
            <div key={block.label}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                {block.label}
              </h4>
              {block.body && (
                <p className="text-base text-slate-700 leading-relaxed">
                  {block.body}
                </p>
              )}
              {block.items && (
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="text-base text-slate-700 leading-snug pl-5 relative"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-slate-300"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {project.technicalFocus && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                Technical focus
              </h4>
              <ul className="space-y-2">
                {project.technicalFocus.map((item) => (
                  <li
                    key={item}
                    className="text-base text-slate-700 leading-snug pl-5 relative"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-slate-300"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.status && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                Status
              </h4>
              <p className="inline-flex items-center gap-2 text-base font-semibold text-forest-green bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2">
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-emerald-500"
                />
                {project.status}
              </p>
            </div>
          )}

          <ul className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs uppercase tracking-wide rounded-full font-bold"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export default function SelectedWork() {
  return (
    <section className="py-24 px-6 bg-alabaster" id="work">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-slate mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A selection of products and technical initiatives I have led, built,
            or helped deliver.
          </p>
        </motion.div>

        <div className="border-t border-slate-200">
          {projects.map((project, index) => (
            <ProjectEntry key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
