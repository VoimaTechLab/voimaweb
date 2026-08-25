import { heroData } from "@/publicSite/data/journeyData";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function JourneyHero() {
  return (
    <section className="relative overflow-visible bg-[#fafafa] px-6 py-32 border-b-4 border-black">
      <div className="mx-auto max-w-7xl relative z-10">

        <span
          className="
          absolute
          right-10
          top-0
          text-[220px]
          font-black
          text-black/[0.03]
          hidden lg:block
          pointer-events-none
          select-none
          "
        >
          VOIMA
        </span>

        <ScrollReveal variant="fade-down">
          <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
              {heroData.eyebrow}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.15}>
          <h1 className="text-4xl font-black uppercase leading-none text-black sm:text-5xl md:text-6xl lg:text-7xl font-heading tracking-tight">
            {heroData.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.25}>
          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-8 sm:leading-9 text-black/75 font-semibold">
            {heroData.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}