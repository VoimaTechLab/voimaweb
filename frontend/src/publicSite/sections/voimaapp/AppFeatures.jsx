import { Link } from "react-router-dom";
import { useAppFeatures } from "../../hooks/useAppFeatures";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function AppFeatures() {
  const features = useAppFeatures();

  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              px-4 py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#BC1D26]
            "
          >
            Core Features
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#BC1D26]">
            Everything you need in one place.
          </h2>

          <p className="mt-6 text-lg leading-9 text-black/65">
            Designed to support healthier habits,
            informed decisions, and stronger
            communities through one seamless platform.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-20">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            loop
            speed={6000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
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
              1280: {
                slidesPerView: 4,
              },
            }}
            className="!overflow-visible"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <SwiperSlide key={index}>
                  <article
                    className="
                      group
                      relative
                      h-full
                      overflow-hidden
                      rounded-[36px]
                      border
                      border-black/5
                      bg-white
                      p-8
                      transition-all
                      duration-500
                      ease-out
                      hover:-translate-y-3
                      hover:border-[#BC1D26]/15
                      hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                    "
                  >
                    {/* Glow */}
                    <div
                      className="
                        absolute
                        right-0
                        top-0
                        h-40
                        w-40
                        rounded-full
                        bg-[#BC1D26]/5
                        blur-3xl
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#BC1D26]/10
                        text-[#BC1D26]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:bg-[#BC1D26]
                        group-hover:text-white
                      "
                    >
                      <Icon size={30} />
                    </div>

                    {/* Content */}
                    <h3 className="mt-8 text-2xl font-bold text-[#BC1D26]">
                      {feature.title}
                    </h3>

                    <p className="mt-4 leading-8 text-black/65">
                      {feature.description}
                    </p>

                    {/* Footer */}
                    <Link
                      to={`/voima-app/${feature.slug}`}
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-[#BC1D26]
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      Learn More →
                    </Link>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}