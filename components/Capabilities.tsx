import { capabilities, toolkit } from "@/lib/content";

// Hover feedback shifts colour and accents only (no lifts or shadows), and
// switches off under reduced motion.
const ease = "transition-all duration-300 ease-out motion-reduce:transition-none";

/**
 * Cards sit on a six-column grid: three per row by default, but a final row
 * of two stretches to half-width each so the grid never leaves a gap.
 */
function cardSpan(position: number, total: number) {
  const lastRowStart = total - (total % 3);
  return total % 3 === 2 && position >= lastRowStart
    ? "lg:col-span-3"
    : "lg:col-span-2";
}

export default function Capabilities() {
  const supporting = capabilities.filter((c) => !c.lead).length;
  let position = 0;

  return (
    <section className="py-24 px-6 bg-slate-50" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <h2 className="max-w-3xl mb-14 text-3xl md:text-4xl font-semibold text-deep-slate">
          Core Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className={
                capability.lead
                  ? "group md:col-span-2 lg:col-span-6 bg-deep-slate p-8 md:p-10 rounded-2xl"
                  : `group ${cardSpan(position++, supporting)} bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-400 ${ease}`
              }
            >
              <span
                aria-hidden="true"
                className={`block w-10 h-1 rounded-full mb-6 group-hover:w-16 ${ease} ${
                  capability.lead
                    ? "bg-white/40 group-hover:bg-white"
                    : "bg-midnight-blue"
                }`}
              />
              <h3
                className={`font-semibold mb-3 leading-snug ${ease} ${
                  capability.lead
                    ? "text-2xl md:text-3xl text-white"
                    : "text-xl text-deep-slate group-hover:text-midnight-blue"
                }`}
              >
                {capability.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  capability.lead
                    ? "text-lg text-slate-300 max-w-[60ch]"
                    : "text-base text-slate-700"
                }`}
              >
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Toolkit */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-slate mb-14">
            Technology &amp; Delivery Toolkit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {toolkit.map((group) => (
              <div key={group.group} className="group">
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-500 pb-3 mb-4 border-b border-slate-300 group-hover:border-midnight-blue group-hover:text-midnight-blue transition-colors duration-300 motion-reduce:transition-none">
                  {group.group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm rounded-lg font-medium hover:border-midnight-blue hover:text-midnight-blue hover:bg-blue-50/60 ${ease}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
