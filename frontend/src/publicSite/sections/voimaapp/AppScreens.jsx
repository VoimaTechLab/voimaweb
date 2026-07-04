import { useVoimaApp } from "../../hooks/useVoimaApp";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function AppScreens() {
  const { appScreens } = useVoimaApp();

  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#BC1D26]">
            Explore the experience.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-black/60">
            Discover the tools designed to help individuals and caregivers
            manage sickle cell care with confidence.
          </p>
        </div>

        <div className="mt-20">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            loop
            centeredSlides
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!overflow-visible"
          >
            {appScreens.map((screen, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    group
                    mx-auto
                    max-w-[320px]
                    transition-all
                    duration-500
                    hover:-translate-y-4
                  "
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-[45px]
                      border-[10px]
                      border-black
                      shadow-2xl
                    "
                  >
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="
                        h-[620px]
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#BC1D26]">
                    {screen.title}
                  </h3>

                  <p className="mt-3 leading-7 text-black/60">
                    {screen.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}