import { useVoimaApp } from "../../hooks/useVoimaApp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import FadeStagger from "@/components/animations/FadeStagger";

export default function AppBenefits() {
  const { benefits } = useVoimaApp();

  return (
    <section className="bg-white px-6 py-28 border-b-4 border-black overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                Who It Benefits
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h2 className="text-4xl font-black uppercase text-black md:text-5xl lg:text-6xl font-heading tracking-tight">
              Built for everyone.
            </h2>
          </ScrollReveal>
        </div>

        <FadeStagger className="mt-16 grid gap-8 md:grid-cols-2" staggerSpeed="normal">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                border-4 border-black
                bg-white p-8 sm:p-10 rounded-2xl
                shadow-[10px_10px_0px_rgba(0,0,0,1)]
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[14px_14px_0px_rgba(188,29,38,1)]
              "
            >
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black font-heading">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-black/75 font-semibold text-base sm:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </FadeStagger>
      </div>
    </section>
  );
}