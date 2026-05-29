import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Autoplay, EffectFade, Navigation, Pagination, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HeroImage from "@/assets/content/app/hero-app.jpg";
import InnovationImage from "@/assets/content/app/innovation.jpg";
import StoryImage from "@/assets/content/journey/story.jpg";

const slides = [
  {
    eyebrow: "Building Healthier Lives Using AI",

    title: (
      <>
        Fighting Sickle Cell Together{" "}
        <span className="text-[var(--color-primary-400)]">
          Through Preventive Care.
        </span>
      </>
    ),

    description:
      "Voima is building proactive and personalized support systems for people living with sickle cell disease and chronic conditions.",

    image: HeroImage,

    primaryBtn: "Explore Events",
    primaryLink: "/events",

    secondaryBtn: "Our Story",
    secondaryLink: "/journey",
  },

  {
    eyebrow: "A Mission Rooted In Real Stories",

    title: (
      <>
        Technology Inspired By{" "}
        <span className="text-[var(--color-primary-400)]">
          Human Experiences.
        </span>
      </>
    ),

    description:
      "Voima was founded after witnessing firsthand the devastating impact of sickle cell disease on families, patients, and communities.",

    image: StoryImage,

    primaryBtn: "Read Our Journey",
    primaryLink: "/journey",

    secondaryBtn: "About Voima",
    secondaryLink: "/about",
  },

  {
    eyebrow: "Healthcare Innovation",

    title: (
      <>
        The Future Of{" "}
        <span className="text-[var(--color-primary-400)]">
          AI-Powered Care.
        </span>
      </>
    ),

    description:
      "We are creating intelligent healthcare tools that help patients better understand their health and anticipate crises earlier.",

    image: InnovationImage,

    primaryBtn: "Explore The App",
    primaryLink: "/app",

    secondaryBtn: "Contact Us",
    secondaryLink: "/contact",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <Swiper
        modules={[
          Autoplay,
          Pagination,
          EffectFade,
          Navigation,
        ]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        className="min-h-screen"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div className="relative flex min-h-screen items-center overflow-hidden">

              {/* Background Image */}
              <img
                src={slide.image}
                alt=""
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  scale-105
                "
              />

              {/* Brand Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-[#140506]/90
                  via-[#140506]/70
                  to-[#140506]/30
                "
              />

              {/* Soft Red Blend */}
              <div
                className="
                  absolute inset-0
                  bg-[radial-gradient(circle_at_top_left,_rgba(188,29,38,0.35),_transparent_45%)]
                "
              />

              {/* Grid Texture */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              {/* Content */}
              <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 md:px-10">

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >

                  {/* Eyebrow */}
                  <div
                    className="
                      inline-flex items-center gap-3
                      rounded-full
                      border border-white/10
                      bg-white
                      px-5 py-2.5
                      text-sm font-semibold
                      tracking-wide
                      text-[#BC1D26]
                      backdrop-blur-md
                    "
                  >
                    <span className="h-2 w-2 rounded-full bg-[#BC1D26]" />

                    {slide.eyebrow}
                  </div>

                  {/* Heading */}
                  <h1
                    className="
                      mt-8
                      font-heading
                      text-4xl
                      font-extrabold
                      leading-[0.95]
                      tracking-[-0.03em]
                      text-white
                      sm:text-5xl
                      md:text-6xl
                      lg:text-7xl
                    "
                  >
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p
                    className="
                      mt-7
                      max-w-2xl
                      text-base
                      leading-8
                      text-white/90
                      md:text-lg
                    "
                  >
                    {slide.description}
                  </p>


                  {/* Buttons */}
                  <div
                      className="
                        mt-10
                        flex flex-col
                        gap-4
                        sm:flex-row
                        sm:items-center
                      "
                    >

                    <Link
                      to={slide.primaryLink}
                      className="
                          inline-flex
                          w-full sm:w-auto
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          bg-[#BC1D26]
                          px-6 sm:px-7
                          py-3.5 sm:py-4
                          text-sm font-semibold
                          text-white
                          shadow-lg shadow-[#BC1D26]/30
                          transition-all duration-300
                          hover:scale-[1.03]
                          hover:bg-[#A11922]
                        "
                    >
                      {slide.primaryBtn}

                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      to={slide.secondaryLink}
                      className="
                        inline-flex
                        w-full sm:w-auto
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border border-white/15
                        bg-white
                        px-6 sm:px-7
                        py-3.5 sm:py-4
                        text-sm font-semibold
                        text-[#BC1D26]
                        backdrop-blur-md
                        transition-all duration-300
                        hover:bg-white/90
                      "
                    >
                      {slide.secondaryBtn}
                    </Link>


                  </div>

                </motion.div>

              </div>

            </div>

          </SwiperSlide>
        ))}

        {/* Navigation Buttons 
        <button
          className="
            hero-prev
            absolute left-4 top-1/2 z-20
            hidden h-12 w-12 -translate-y-1/2
            items-center justify-center
            rounded-full
            border border-white/15
            bg-black/30
            text-white
            backdrop-blur-md
            transition-all duration-300
            hover:bg-[#BC1D26]
            md:flex
          "
        >
          <ChevronLeft size={22} />
        </button>

        <button
          className="
            hero-next
            absolute right-4 top-1/2 z-20
            hidden h-12 w-12 -translate-y-1/2
            items-center justify-center
            rounded-full
            border border-white/15
            bg-black/30
            text-white
            backdrop-blur-md
            transition-all duration-300
            hover:bg-[#BC1D26]
            md:flex
          "
        >
          <ChevronRight size={22} />
        </button>*/}

      </Swiper>
    </section>
  );
}