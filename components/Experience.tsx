import { experience, experienceIntro, previousExperience } from "@/lib/content";

export default function Experience() {
  return (
    <section className="py-24 px-6 bg-white" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-slate mb-4">
            Experience
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-medium">
            {experienceIntro}
          </p>
        </div>

        <div className="border-t border-slate-200">
          {experience.map((role) => (
            <article
              key={role.company}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-slate-200"
            >
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold text-deep-slate">
                  {role.company}
                </h3>
                <p className="text-midnight-blue font-semibold mt-1">
                  {role.title}
                </p>
                <p className="text-sm text-slate-500 font-medium mt-1 tabular-nums">
                  {role.period}
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-slate-700 leading-relaxed max-w-[60ch]">
                  {role.description}
                </p>
                <ul className="flex flex-wrap gap-2 mt-5">
                  {role.focus.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <article className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10">
            <div className="md:col-span-4">
              <h3 className="text-xl font-semibold text-slate-500">
                {previousExperience.heading}
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-slate-600 leading-relaxed max-w-[60ch]">
                {previousExperience.description}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
