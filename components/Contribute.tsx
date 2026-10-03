import { contribute } from "@/lib/content";

export default function Contribute() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-deep-slate mb-14">
          Ways I Can Contribute
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {contribute.map((item) => (
            <div
              key={item.title}
              className="group relative border-t-2 border-deep-slate pt-6"
            >
              {/* A blue rule sweeps over the ink one on hover. */}
              <span
                aria-hidden="true"
                className="absolute -top-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-midnight-blue transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
              />
              <h3 className="text-xl font-semibold text-deep-slate mb-3 transition-colors duration-300 group-hover:text-midnight-blue motion-reduce:transition-none">
                {item.title}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
