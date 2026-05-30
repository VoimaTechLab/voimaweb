import { heroData } from "@/publicSite/data/journeyData";

export default function JourneyHero() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <span
          className="
          absolute
          right-10
          top-16
          text-[220px]
          font-black
          text-black/[0.03]
          hidden lg:block
          "
        >
          VOIMA
        </span>

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
          {heroData.eyebrow}
        </p>

        <h1 className="mt-6 max-w-4xl text-6xl font-bold leading-tight text-[#BC1D26]">
          {heroData.title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-black/65">
          {heroData.description}
        </p>
      </div>
    </section>
  );
}