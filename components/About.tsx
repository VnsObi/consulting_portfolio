import { about } from "@/lib/content";

export default function About() {
  return (
    <section className="py-24 px-6 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-deep-slate">
              {about.heading}
            </h2>
            <p className="mt-6 text-base text-slate-600 leading-relaxed border-l border-slate-300 pl-5">
              {about.experienceNote}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6 max-w-[60ch]">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-slate-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
