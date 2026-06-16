import { useHome } from "@/publicSite/hooks/useHome";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import MissionStepCard from "@/components/ui/MissionStepCard/MissionStepCard";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

export default function MissionSection() {

const { missionSection } = useHome();
  const { eyebrow, title, steps } = missionSection;
  const carouselSteps = [...steps, ...steps];

  return (
    <section className="relative mt-20 overflow-hidden bg-[#BC1D26] py-20 pb-30">
      <div className="relative mx-auto max-w-7xl">
        <div className="px-6">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            align="center"
            maxWidth="max-w-4xl mx-auto"
            eyebrowClassName="text-sm font-semibold uppercase tracking-[0.2em] text-[#fff]"
            titleClassName="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight text-[#fff] md:text-6xl"
          />
        </div>

        <div className="mt-20">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            loop
            speed={6000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.4 },
              1024: { slidesPerView: 2.4 },
              1280: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {carouselSteps.map((step, index) => (
              <SwiperSlide key={`${step.number}-${index}`}>
                <MissionStepCard {...step} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
