import { traceFramework } from "@/publicSite/data/aboutData";

export default function TraceFramework() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-[40px] bg-[#fafafa] p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]/70">
          #TRACE Framework
        </p>

        <h2 className="mt-5 text-4xl font-bold text-[#BC1D26]">
          The pillars driving our impact.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {traceFramework.map((item, index) => (
            <div
                key={index}
                className="
                    rounded-[28px]
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-500
                    ease-out
                    hover:-translate-y-3
                    hover:scale-[1.02]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                "
                >
                <h3 className="text-xl font-bold text-[#BC1D26]">
                    {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/60">
                    {item.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}