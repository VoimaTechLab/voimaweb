// src/components/sections/home/MissionSection.jsx
import { Link } from "react-router-dom";

export default function MissionSection() {
  const missionSteps = [
    {
      number: "01",
      title: "Awareness & Education",
      description:
        "Creating awareness around sickle cell disease through community outreach and accessible health education.",
    },

    {
      number: "02",
      title: "Early Screening",
      description:
        "Encouraging early diagnosis and preventive care to reduce avoidable complications and child mortality.",
    },

    {
      number: "03",
      title: "Voima App",
      description:
        "Building intelligent digital tools that help individuals with SCD manage care, track symptoms, and access support.",
    },

    {
      number: "04",
      title: "Community Impact",
      description:
        "Partnering with healthcare providers, advocates, and communities to create long-term sustainable change.",
    },
  ];

  return (
    <section className="bg-[#ffff] px-6 py-28">
      <div
        className="
          mx-auto grid max-w-7xl
          gap-20
          lg:grid-cols-[1fr_1.1fr]
        "
      >

        {/* Left Content */}
        <div className="lg:sticky lg:top-24 h-fit">
          <span
            className="
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[#F47B3A]
            "
          >
            Our Mission
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
            Empowering sickle cell communities
            through healthcare, innovation,
            and AI-driven support.
          </h2>

          <p
            className="
              mt-8
              max-w-xl
              text-lg leading-9
              text-black/70
            "
          >
            We believe technology and community
            action can transform sickle cell care.
            Through awareness, early intervention,
            and intelligent healthcare tools,
            we are building a future where people
            living with SCD receive better support,
            dignity, and opportunities.
          </p>

        <Link
            to="/about"
            className="
                mt-10 inline-flex
                items-center justify-center
                rounded-full
                bg-[#800000]
                px-8 py-4
                font-medium text-white
                transition-all duration-300
                hover:bg-[#5f0000]
            "
            >
            Learn More
        </Link>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div
            className="
              absolute left-[28px] top-0
              h-full w-[2px]
              bg-gradient-to-b
              from-[#F47B3A]
              via-[#FF457A]
              to-transparent
            "
          />

          <div className="space-y-10">
            {missionSteps.map((step) => (
              <div
                key={step.number}
                className="
                  relative flex gap-8
                "
              >

                {/* Number */}
                <div
                  className="
                    relative z-10
                    flex h-14 w-14
                    shrink-0 items-center
                    justify-center
                    rounded-full
                    bg-[#800000]
                    text-sm font-bold
                    text-white
                    shadow-lg
                  "
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="
                    flex-1
                    rounded-[28px]
                    border border-black/5
                    bg-white/80
                    p-8
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
                  "
                >
                  <h3
                    className="
                      text-2xl font-semibold
                      text-[#800000]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-8
                      text-black/65
                    "
                  >
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}