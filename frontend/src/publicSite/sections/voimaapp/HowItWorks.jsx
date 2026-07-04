import { useVoimaApp } from "@/publicSite/hooks/useVoimaApp";
import { Activity } from "lucide-react";
export default function HowItWorks() {
  const { howItWorks } = useVoimaApp();

  const {
    eyebrow,
    title,
    steps,
  } = howItWorks;

  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
              {eyebrow}
            </p>
          )}

          <h2 className="mt-4 text-4xl font-bold text-[#BC1D26] md:text-5xl">
            {title}
          </h2>
          {howItWorks.description && (
            <p
              className="
                mx-auto mt-6 max-w-2xl
                text-lg leading-8
                text-black/60
              "
            >
              {howItWorks.description}
            </p>
          )}
        </div>

        <div className="relative mt-24">
          <div className="absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <svg
              className="h-[120px] w-full"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M0,60
                  C150,0 250,120 400,60
                  S650,0 800,60
                  S1050,120 1200,60
                "
                fill="none"
                stroke="#BC1D26"
                strokeOpacity="0.55"
                strokeWidth="4"
              />
            </svg>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon || Activity;

              return (
                <article
                  key={step.number}
                  className={`
                    relative z-10 flex flex-col rounded-[36px]
                    border border-black/5 bg-white p-10
                    transition-all duration-500
                    hover:-translate-y-3
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]

                    ${
                      index === 0
                        ? "lg:-translate-y-10"
                        : index === 1
                        ? "lg:translate-y-10"
                        : "lg:-translate-y-10"
                    }
                  `}
                >
                  <div
                    className="
                      absolute -right-4 -top-4
                      flex h-14 w-14 items-center justify-center
                      rounded-full bg-[#BC1D26]
                      text-lg font-bold text-white
                    "
                  >
                    {step.number}
                  </div>

                  <div
                    className="
                      flex h-16 w-16 items-center justify-center
                      rounded-2xl bg-[#BC1D26]/10
                      text-[#BC1D26]
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-[#BC1D26]">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-black/65">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}