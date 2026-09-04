import { useVoimaApp } from "../../hooks/useVoimaApp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function AppScreens() {
  const { appScreens } = useVoimaApp();

  return (
    <section className="bg-[#fafafa] px-6 py-32 border-b-4 border-black overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                App Showcase
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-black font-heading tracking-tight">
              Explore the experience.
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-black/75 font-semibold">
              Discover the tools designed to help individuals and caregivers
              manage sickle cell care with confidence.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-20">
          {appScreens && appScreens.length > 0 && (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={40}
              loop={true}
              centeredSlides={true}
              speed={1000}
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
              }}
              observer={true}
              observeParents={true}
              breakpoints={{
                0: { slidesPerView: 1.1 },
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!overflow-visible"
            >
              {appScreens.map((screen, index) => (
                <SwiperSlide key={index}>
                  <div className="group mx-auto max-w-[320px] transition-all duration-500 hover:-translate-y-4">
                    <div className="overflow-hidden border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)] bg-white rounded-3xl">
                      <img
                        src={screen.image}
                        alt={screen.title}
                        loading="lazy"
                        className="h-[620px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-8 text-2xl font-black uppercase text-black font-heading">
                      {screen.title}
                    </h3>

                    <p className="mt-3 leading-7 text-black/75 font-semibold">
                      {screen.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}