import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useHome } from "@/publicSite/hooks/useHome";

function HeroTitle({ before, highlight }) {
  return (
    <>
      {before}{" "}
      <span className="text-[var(--color-primary-400)]">{highlight}</span>
    </>
  );
}

export default function Hero() {
const { heroSlides } = useHome();
  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
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
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex min-h-screen items-center overflow-hidden">
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

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-[#140506]/90
                  via-[#140506]/70
                  to-[#140506]/30
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-[radial-gradient(circle_at_top_left,_rgba(188,29,38,0.35),_transparent_45%)]
                "
              />

              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 md:px-10">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
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
                    <HeroTitle {...slide.title} />
                  </h1>

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
      </Swiper>
    </section>
  );
}
