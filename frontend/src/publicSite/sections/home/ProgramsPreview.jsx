import { ArrowRight } from "lucide-react";

import { programsPreviewSection } from "@/data/homeData";

export default function ProgramsPreview() {
  const { eyebrow, title, description, programs } = programsPreviewSection;
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#ffff]
        px-6 py-28
      "
    >
      {/* Background Glow 
      <div
        className="
          absolute right-[-10%] top-0
          h-[320px] w-[320px]
          rounded-full
          bg-[#F47B3A]/10
          blur-3xl
        "
      />*/}

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div
          className="
            flex flex-col gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          <div className="max-w-3xl">

            <span
              className="
                text-sm font-semibold uppercase
                tracking-[0.2em]
                text-[#F47B3A]
              "
            >
              {eyebrow}
            </span>

            <h2
              className="
                mt-5
                text-4xl font-bold
                leading-tight
                text-[#800000]
                md:text-5xl
              "
            >
              {title}
            </h2>

          </div>

          <p
            className="
              max-w-xl
              text-lg leading-8
              text-black/65
            "
          >
            {description}
          </p>

        </div>

        {/* Program Cards */}
        <div
          className="
            mt-20
            grid gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <div
                key={index}
                className="
                  group relative overflow-hidden
                  rounded-[32px]
                  border border-black/5
                  bg-white/90
                  p-10
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >

                {/* Glow */}
                <div
                  className="
                    absolute right-[-40px] top-[-40px]
                    h-[120px] w-[120px]
                    rounded-full
                    bg-[#F47B3A]/10
                    blur-3xl
                    transition-all duration-500
                    group-hover:bg-[#F47B3A]/20
                  "
                />

                {/* Icon */}
                <div
                  className="
                    flex h-16 w-16
                    items-center justify-center
                    rounded-2xl
                    bg-[#F47B3A]/10
                    text-[#800000]
                  "
                >
                  <Icon size={28} />
                </div>

                {/* Content */}
                <h3
                  className="
                    mt-8
                    text-2xl font-semibold
                    leading-snug
                    text-primary-800
                  "
                >
                  {program.title}
                </h3>

                <p
                  className="
                    mt-5
                    leading-8
                    text-black/65
                  "
                >
                  {program.description}
                </p>

                {/* Link */}
                <button
                  className="
                    mt-8 inline-flex
                    items-center gap-2
                    font-medium
                    text-[#800000]
                    transition-all duration-300
                    hover:gap-3
                  "
                >
                  Learn More
                  <ArrowRight size={18} />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}