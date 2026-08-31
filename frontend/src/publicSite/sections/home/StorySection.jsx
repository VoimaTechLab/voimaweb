import {
  ChevronLeft, ChevronRight, HeartPulse, Quote, ShieldCheck,
  Stethoscope
} from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useHome } from "@/publicSite/hooks/useHome";

const STORY_ICONS = {
  HeartPulse,
  Stethoscope,
  ShieldCheck,
};

export default function StorySection() {
    const { storyShiftSection } = useHome();

  if (!storyShiftSection) return null;

  const {
    eyebrow,
    title,
    titleAccent,
    stories = [],
  } = storyShiftSection;

  if (!stories.length) return null;
  return (
    <section className="bg-[#140506] px-6 py-28 text-white relative overflow-visible">
      {/* Deep Asymmetrical Incline Divider with Notch */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none" style={{ transform: "translateY(-99%)" }}>
        <svg viewBox="0 -4 1200 84" preserveAspectRatio="none" className="w-full h-10 sm:h-16 block overflow-visible">
          <polygon points="0,15 450,70 850,10 1200,80 1200,100 0,100" fill="#140506" />
          <polyline points="0,15 450,70 850,10 1200,80" fill="none" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
        </svg>
      </div>
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <ScrollReveal variant="fade-down">
              <span className="inline-block bg-white text-[#BC1D26] border-2 border-black px-4 py-2 text-xs sm:text-sm font-black uppercase tracking-[0.22em] shadow-[4px_4px_0px_rgba(188,29,38,1)]">
                {eyebrow}
              </span>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.15}>
              <h2 className="mt-6 text-4xl font-black uppercase leading-none text-white md:text-5xl lg:text-6xl font-heading tracking-tight">
                {title}{" "}
                <span className="inline-block -rotate-1 bg-[#BC1D26] text-white px-4 py-2 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)]">
                  {titleAccent}
                </span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Swiper Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button className="story-prev flex h-12 w-12 items-center justify-center border-2 border-black bg-white text-[#BC1D26] shadow-[4px_4px_0px_rgba(188,29,38,1)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#BC1D26] hover:text-white">
              <ChevronLeft size={20} />
            </button>
            <button className="story-next flex h-12 w-12 items-center justify-center border-2 border-black bg-white text-[#BC1D26] shadow-[4px_4px_0px_rgba(188,29,38,1)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#BC1D26] hover:text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Stories Swiper Carousel */}
        <ScrollReveal variant="fade-up" delay={0.2}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation={{
              nextEl: ".story-next",
              prevEl: ".story-prev",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            className="overflow-visible"
          >
          {stories.map((item) => {
            const BadgeIcon = STORY_ICONS[item.iconName] || HeartPulse;

            return (
              <SwiperSlide key={item.id}>
                <div className="grid lg:grid-cols-12 gap-10 items-center bg-white border-2 border-black p-6 sm:p-10 shadow-[8px_8px_0px_rgba(188,29,38,1)]">

                  {/* Photo Column */}
                  <ScrollReveal
                    variant="fade-right"
                    className="lg:col-span-5 relative overflow-hidden border-2 border-black h-[400px] sm:h-[480px]"
                  >
                    <img
                      src={item.image}
                      alt={item.author}
                      className="h-full w-full object-cover brightness-[1.22] contrast-[1.06] saturate-[1.18]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/10" />

                    {/* Floating Badge */}
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-[#BC1D26] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                      <BadgeIcon size={16} />
                      {item.badge}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-2xl font-bold text-white font-heading">
                        {item.author}
                      </h4>

                      <p className="text-sm text-white/80 mt-1">
                        {item.meta}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Content Column */}
                  <ScrollReveal
                    variant="fade-left"
                    delay={0.12}
                    className="lg:col-span-7 space-y-6 text-black"
                  >
                    <Quote size={48} className="text-[#BC1D26]" />

                    <h3 className="text-2xl sm:text-3xl font-black uppercase leading-tight text-black tracking-tight font-heading">
                      {item.quote}
                    </h3>

                    <p className="text-base leading-8 text-black/75 bg-[#fafafa] p-6 border-2 border-black font-semibold shadow-[4px_4px_0px_rgba(188,29,38,1)]">
                      {item.story}
                    </p>

                    {/*<div className="pt-4 flex items-center justify-between">
                      <Link
                        to="/about"
                        className="
                          group inline-flex items-center gap-2
                          bg-[#BC1D26] px-7 py-3.5
                          text-sm font-black uppercase tracking-wider text-white
                          border-2 border-black
                          shadow-[4px_4px_0px_rgba(0,0,0,1)]
                          transition-all duration-200
                          hover:-translate-y-0.5
                          hover:bg-[#A11922]
                          hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                        "
                      >
                        Read Full Story

                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>*/}
                  </ScrollReveal>
                </div>
              </SwiperSlide>
            );
          })}
          </Swiper>
        </ScrollReveal>
      </div>
    </section>
  );
}
