import { useGetInvolved } from "../../hooks/useGetInvolved";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function GetInvolvedHero() {
  const { heroData } = useGetInvolved();
  return (
    <section className="relative px-6 py-28 bg-[#fafafa] border-b-4 border-black">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                {heroData.eyebrow}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none text-black font-heading tracking-tight">
              {heroData.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mt-8 max-w-2xl text-base sm:text-lg leading-8 sm:leading-9 text-black/75 font-semibold">
              {heroData.description}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}