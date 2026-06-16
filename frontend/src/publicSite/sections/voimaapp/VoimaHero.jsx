import { Link } from "react-router-dom";
import { useVoimaApp } from "../../hooks/useVoimaApp";

export default function VoimaHero() {
  const { heroData } = useVoimaApp();
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#BC1D26]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
            {heroData.eyebrow}
          </p>

          <h1 className="mt-6 text-6xl font-bold leading-tight text-[#BC1D26]">
            {heroData.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-black/65">
            {heroData.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to={heroData.primaryCTA.link}
              className="rounded-full bg-[#BC1D26] px-7 py-4 font-semibold text-white hover:scale-[1.02] duration-300 transition-all"
            >
              {heroData.primaryCTA.text}
            </Link>

            <Link
              to={heroData.secondaryCTA.link}
              className="rounded-full border border-black/10 px-7 py-4 font-semibold text-[#BC1D26]"
            >
              {heroData.secondaryCTA.text}
            </Link>
          </div>
        </div>

        {/* Phone Showcase */}
        <div className="relative flex justify-center">

          <div className="absolute h-[500px] w-[500px] rounded-full bg-[#BC1D26]/10 blur-3xl" />

          {/* Back Phone */}
          <div
            className="
              absolute
              right-10
              top-10
              h-[600px]
              w-[300px]
              rotate-[12deg]
              overflow-hidden
              rounded-[50px]
              border-[10px]
              border-black
              bg-black
              shadow-2xl
            "
          >
            <img
              src={heroData.showcase.backScreen}
              alt="Voima App Community"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Front Phone */}
          <div
            className="
              relative
              z-10
              h-[650px]
              w-[320px]
              overflow-hidden
              rounded-[50px]
              border-[10px]
              border-black
              bg-black
              shadow-[0_40px_120px_rgba(0,0,0,0.15)]
            "
          >
            <img
              src={heroData.showcase.frontScreen}
              alt="Voima Dashboard"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}