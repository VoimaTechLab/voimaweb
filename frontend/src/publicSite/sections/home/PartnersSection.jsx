import { usePartners } from "@/publicSite/hooks/usePartners";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function PartnersSection() {
  const {
    eyebrow,
    title,
    description,
    partners,
  } = usePartners();

  const carouselPartners =
    partners.length >= 2
      ? [...partners, ...partners]
      : partners;

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#BC1D26]
              "
            >
              {eyebrow}
            </p>
          )}

          {title && (
            <h2
              className="
                mt-4
                text-5xl
                font-bold
                leading-tight
                text-[#BC1D26]
                md:text-6xl
              "
            >
              {title}
            </h2>
          )}

          {description && (
            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                text-black/60
              "
            >
              {description}
            </p>
          )}
        </div>

        <div className="mt-20">
          <Swiper
            modules={[Autoplay]}
            loop={partners.length >= 5}
            speed={6000}
            allowTouchMove={false}
            spaceBetween={32}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            className="!overflow-visible"
          >
            {carouselPartners.map((partner, index) => (
              <SwiperSlide
                key={`${partner.name}-${index}`}
              >
                {partner.website ? (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      h-48
                      items-center
                      justify-center
                      rounded-[2rem]
                      border
                      border-black/5
                      bg-white
                      p-10
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="
                        h-50
                        w-auto
                        max-w-full
                        object-contain
                        transition
                        duration-300
                      "
                    />
                  </a>
                ) : (
                  <div
                    className="
                      flex
                      h-50
                      items-center
                      justify-center
                      rounded-[2rem]
                      border
                      border-black/5
                      bg-white
                      p-10
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="
                        h-50
                        w-auto
                        max-w-full
                        object-contain
                        transition
                        duration-300
                      "
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}