// src/components/sections/home/ImpactStats.jsx

import StatCard from "@/components/ui/StatCard/StatCard";
import { STATS } from "@/constants/stats";
import Impact from "../../../assets/ourImpact.png"

export default function ImpactStats() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#ffff]
        px-6 py-28
      "
      aria-label="Impact statistics"
    >
      {/* Background Glow */}
      <div
        className="
          absolute left-[-10%] top-0
          h-[320px] w-[320px]
          rounded-full
          bg-[#F47B3A]/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div
          className="
            mx-auto max-w-3xl
            text-center
          "
        >
          <span
            className="
              inline-block
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[#F47B3A]
            "
          >
            Our Impact
          </span>

          <h2
            className="
              mt-6
              text-4xl font-bold
              leading-tight
              text-[#800000]
              md:text-5xl
            "
          >
            Creating measurable change
            across communities.
          </h2>

          <p
            className="
              mx-auto mt-8
              max-w-2xl
              text-lg leading-9
              text-black/65
            "
          >
            Through sustainable initiatives,
            education, leadership, and
            innovation, Voima Initiative
            continues to empower lives and
            create long-term community impact.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className="
            mt-20
            grid gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {STATS.map((stat) => (
            <StatCard
              key={stat.id}
              {...stat}
            />
          ))}
        </div>

        {/* Impact Banner */}
        <div className="mt-24">
          <div
            className="
              relative overflow-hidden
              rounded-[40px]
              border border-black/5
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            {/* Overlay */}
            <div
              className="
                absolute inset-0 z-10
                bg-gradient-to-r
                from-black/75
                via-black/40
                to-black/10
              "
            />

            {/* Image */}
            <img
              src= { Impact }
              alt="Children and families affected by sickle cell disease"
              className="
                h-[420px] w-full
                object-cover
              "
            />

            {/* Content */}
            <div
              className="
                absolute inset-0 z-20
                flex flex-col
                justify-end
                p-8 md:p-14
              "
            >
              <span
                className="
                  mb-5 w-fit
                  rounded-full
                  bg-white/10
                  px-4 py-2
                  text-sm font-medium
                  text-white
                  backdrop-blur-md
                "
              >
                Community Impact
              </span>

              <h3
                className="
                  max-w-3xl
                  text-3xl font-bold
                  leading-tight text-white
                  md:text-5xl
                "
              >
                Every statistic represents
                a real life, a real family,
                and a future worth fighting for.
              </h3>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-lg leading-8
                  text-white/80
                "
              >
                Voima Initiative is committed to
                improving awareness, advocacy,
                early diagnosis, and access to care
                for sickle cell communities across
                Africa and beyond.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}