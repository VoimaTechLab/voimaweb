import { useVoimaApp } from "@/publicSite/hooks/useVoimaApp";
import { Activity } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import FadeStagger from "@/components/animations/FadeStagger";

export default function HowItWorks() {
  const { howItWorks } = useVoimaApp();
  const { eyebrow, title, steps } = howItWorks;

  return (
    <section className="bg-[#fafafa] border-y-4 border-black px-6 py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && (
            <ScrollReveal variant="fade-down">
              <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                  {eyebrow}
                </span>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h2 className="text-4xl font-black uppercase text-black md:text-5xl lg:text-6xl font-heading tracking-tight">
              {title}
            </h2>
          </ScrollReveal>

          {howItWorks.description && (
            <ScrollReveal variant="fade-up" delay={0.25}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/75 font-semibold">
                {howItWorks.description}
              </p>
            </ScrollReveal>
          )}
        </div>

        <div className="relative mt-20">
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
                stroke="#000"
                strokeOpacity="1"
                strokeWidth="8"
              />
            </svg>
          </div>

          <FadeStagger className="grid gap-10 lg:grid-cols-3" staggerSpeed="normal">
            {steps.map((step, index) => {
              const Icon = step.icon || Activity;

              return (
                <article
                  key={step.number}
                  className={`
                    relative z-10 flex flex-col border-4 border-black bg-white p-8 sm:p-10
                    shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all duration-500
                    hover:-translate-y-2 hover:shadow-[10px_10px_0px_rgba(188,29,38,1)] sm:hover:shadow-[16px_16px_0px_rgba(188,29,38,1)] rounded-2xl

                    ${
                      index === 0
                        ? "lg:-translate-y-8"
                        : index === 1
                        ? "lg:translate-y-8"
                        : "lg:-translate-y-8"
                    }
                  `}
                >
                  <div
                    className="
                      absolute -right-4 -top-4
                      flex h-14 w-14 items-center justify-center
                      border-4 border-black bg-[#BC1D26] shadow-[4px_4px_0px_rgba(0,0,0,1)]
                      text-lg font-black text-white rounded-xl
                    "
                  >
                    {step.number}
                  </div>

                  <div
                    className="
                      flex h-16 w-16 items-center justify-center
                      border-4 border-black bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)]
                      text-black rounded-xl
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl sm:text-3xl font-black uppercase text-black font-heading">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-black/75 font-semibold text-base sm:text-lg">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </FadeStagger>
        </div>
      </div>
    </section>
  );
}