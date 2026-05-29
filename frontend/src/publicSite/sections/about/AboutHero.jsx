import { heroData } from "@/publicSite/data/aboutData";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        <div>
          <p 
          className="
          text-sm font-semibold 
          uppercase tracking-[0.2em]
         text-[#BC1D26]/70
         "
         >
            {heroData.eyebrow}
          </p>

          <h1 
          className="
          mt-6 max-w-2xl 
          text-6xl font-bold 
          leading-tight text-[#BC1D26]
          "
          >
            {heroData.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-black/65">
            {heroData.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to={heroData.cta.primary.link}
              className="
              rounded-full bg-[#BC1D26] 
              px-7 py-4 
              text-sm 
              font-semibold text-white
              transition-all duration-300 
              hover:scale-[1.03]
              "
            >
              {heroData.cta.primary.text}
            </Link>

            <Link
              to={heroData.cta.secondary.link}
              className="
              rounded-full border
               border-black/10 
               bg-white px-7 py-4
                text-sm font-semibold
                text-[#BC1D26] hover:bg-white/50
                "
            >
              {heroData.cta.secondary.text}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="
          overflow-hidden rounded-[40px] 
          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
          "
          >
            <img
              src={heroData.image}
              alt="Voima Initiative"
              className="h-[620px] w-full object-cover"
            />
          </div>

          <div className="
          absolute bottom-8 left-8 
          rounded-[28px] bg-white/90 
          p-6 backdrop-blur-xl
          "
          >
            <p className="
            text-4xl 
            font-bold text-[#BC1D26]
            "
            >
              {heroData.stats.value}
            </p>

            <p className="mt-2 text-sm leading-7 text-black/60">
              {heroData.stats.label}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}