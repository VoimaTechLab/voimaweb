// src/components/sections/home/MissionSection.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
        "Building intelligent digital tools that help individuals with SCD manage care and access support.",
    },

    {
      number: "04",
      title: "Community Impact",
      description:
        "Partnering with healthcare providers, advocates, and communities to create long-term sustainable change.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#BC1D26] mt-20 py-20 pb-30">

      {/* Glow 
      <div
        className="
          absolute left-1/2 top-0
          h-[400px] w-[400px]
          -translate-x-1/2
          rounded-full
          bg-[#BC1D26]/5
          blur-3xl
        "
      />*/}

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="px-6 text-center">

          <span
            className="
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[#fff]
            "
          >
            Our Mission
          </span>

          <h2
            className="
              mx-auto mt-6
              max-w-4xl
              text-4xl font-bold
              leading-tight
              text-[#fff]
              md:text-6xl
            "
          >
            Empowering sickle cell communities
            through innovation, awareness,
            and AI-driven healthcare support.
          </h2>

        </div>

        {/* Carousel */}
        <div className="mt-20">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            loop={true}
            speed={6000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },

              640: {
                slidesPerView: 1.4,
              },

              1024: {
                slidesPerView: 2.4,
              },

              1280: {
                slidesPerView: 3,
              },
            }}
            className="!overflow-visible"
          >

            {[...missionSteps, ...missionSteps].map((step, index) => (
              <SwiperSlide key={index}>

                <div
                  className="
                    group
                    relative h-full
                    overflow-hidden
                    rounded-[36px]
                    border border-black/5
                    bg-white
                    p-10
                    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  "
                >

                  {/* Glow */}
                  <div
                    className="
                      absolute right-[-60px] top-[-60px]
                      h-52 w-52
                      rounded-full
                      bg-[#BC1D26]/5
                      blur-3xl
                    "
                  />

                  {/* Number */}
                  <div
                    className="
                      relative z-10
                      flex h-16 w-16
                      items-center justify-center
                      rounded-2xl
                      bg-[#BC1D26]
                      text-lg font-bold
                      text-white
                      shadow-lg shadow-[#BC1D26]/20
                    "
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-10">

                    <h3
                      className="
                        text-2xl font-bold
                        leading-tight
                        text-[#800000]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        leading-8
                        text-black/65
                      "
                    >
                      {step.description}
                    </p>

                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
}