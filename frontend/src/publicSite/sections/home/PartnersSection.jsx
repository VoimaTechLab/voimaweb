import { Link } from "react-router-dom";
import { usePartners } from "@/publicSite/hooks/usePartners";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import "swiper/css";

export default function PartnersSection() {
  const { eyebrow, title, description, partners } = usePartners();

  const carouselPartners =
    partners && partners.length >= 2
      ? [...partners, ...partners]
      : partners || [];

  return (
    <section className="relative overflow-visible bg-white py-28">
      {/* Steep Geometric Knife Slash Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none" style={{ transform: "translateY(-99%)" }}>
        <svg viewBox="0 -4 1200 84" preserveAspectRatio="none" className="w-full h-10 sm:h-16 block overflow-visible">
          <polygon points="0,85 580,15 1200,75 1200,100 0,100" fill="#ffffff" />
          <polyline points="0,85 580,15 1200,75" fill="none" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Original Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          {eyebrow && (
            <ScrollReveal variant="fade-down">
              <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                  {eyebrow}
                </span>
              </div>
            </ScrollReveal>
          )}

          {title && (
            <ScrollReveal variant="fade-up" delay={0.15}>
              <h2 className="text-4xl font-black uppercase leading-none text-black md:text-5xl lg:text-6xl font-heading tracking-tight">
                {title}
              </h2>
            </ScrollReveal>
          )}

          {description && (
            <ScrollReveal variant="fade-up" delay={0.25}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-black/75 font-semibold leading-8">
                {description}
              </p>
            </ScrollReveal>
          )}
        </div>

        {/* Partner With Voima Card */}
        <ScrollReveal variant="scale-in">
          <div
            className="
              mx-auto
              max-w-5xl
              border-4 border-black
              bg-white
              shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
              p-8 sm:p-14 md:p-16
              text-center
              mb-16
            "
          >
            <ScrollReveal variant="fade-down" delay={0.1}>
              <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                  Partnerships
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-black font-heading tracking-tight">
                Partner With Voima
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.3}>
              <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 sm:leading-9 text-black/75 font-semibold">
                We collaborate with healthcare institutions, NGOs, universities, technology companies, foundations and community leaders.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.4}>
              <Link
                to="/contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  bg-[#BC1D26] border-2 border-black
                  px-8 py-4
                  text-sm font-black uppercase tracking-wider
                  text-white
                  shadow-[6px_6px_0px_rgba(0,0,0,1)]
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
                "
              >
                Become A Partner
              </Link>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.3}>
          <div 
            className="relative mt-20"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          {partners && partners.length > 0 && (
            <Swiper
              modules={[Autoplay]}
              loop={partners.length >= 5}
              speed={4000}
              allowTouchMove={false}
              spaceBetween={32}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              observer={true}
              observeParents={true}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              className="!overflow-visible py-4"
            >
              {carouselPartners.map((partner, index) => (
                <SwiperSlide key={`${partner.name}-${index}`}>
                  {partner.website ? (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex h-48 items-center justify-center bg-white border-2 border-black p-10 shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(188,29,38,1)]"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        loading="lazy"
                        className="max-h-[100px] w-auto max-w-full object-contain transition duration-300 group-hover:scale-105"
                      />
                    </a>
                  ) : (
                    <div className="group flex h-48 items-center justify-center bg-white border-2 border-black p-10 shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(188,29,38,1)]">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        loading="lazy"
                        className="max-h-[100px] w-auto max-w-full object-contain transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </ScrollReveal>
    </div>
    </section>
  );
}