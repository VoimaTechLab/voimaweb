// src/pages/Donate.jsx
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

/* ──────────────────────────────────────────────
   Static donor quotes (swap with Sanity later)
   ────────────────────────────────────────────── */
const DONOR_QUOTES = [
  {
    id: "donor-1",
    quote:
      "I lost a childhood friend to sickle cell. Supporting Voima means no family should have to go through what we did. Early screening saves lives.",
    name: "Kwame Asante",
    role: "Recurring Donor",
    location: "Accra, Ghana",
  },
  {
    id: "donor-2",
    quote:
      "As a healthcare professional, I see the gap in access every day. Voima is bridging that gap and I'm proud to be part of making it happen.",
    name: "Dr. Adaeze Obi",
    role: "Monthly Supporter",
    location: "Lagos, Nigeria",
  },
  {
    id: "donor-3",
    quote:
      "My company matched my donation and the impact doubled. It's incredible to see the screening kits reach rural communities that need them most.",
    name: "Samuel Mensah",
    role: "Corporate Partner",
    location: "Kumasi, Ghana",
  },
  {
    id: "donor-4",
    quote:
      "I donate because prevention is always cheaper than treatment. Voima proves that small contributions create ripple effects across entire communities.",
    name: "Fatima Diallo",
    role: "One-Time Donor",
    location: "Dakar, Senegal",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export default function Donate() {
  return (
    <main className="bg-[#fafafa] pt-[90px]">
      {/* ═══════════════════════════════════════
          HERO — existing "Support Our Mission"
          ═══════════════════════════════════════ */}
      <section className="px-6 py-24 w-full min-h-[70vh] flex items-center">
        <div className="mx-auto max-w-4xl text-center w-full">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                Support Our Mission
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-black font-heading tracking-tight">
              Every contribution creates impact.
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mx-auto mt-8 max-w-3xl text-base sm:text-lg leading-8 sm:leading-9 text-black/75 font-semibold">
              Your donations help fund healthcare innovation, outreach programs,
              community support, and research across Africa.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.35}>
            <div className="mt-12 flex justify-center">
              <a
                href="https://paystack.com/pay/voima"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center
                  bg-[#BC1D26] border-2 border-black
                  px-10 py-5 text-base font-black uppercase tracking-wider
                  text-white shadow-[6px_6px_0px_rgba(0,0,0,1)]
                  transition-all duration-200
                  hover:-translate-y-1 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)]
                "
              >
                Donate Securely Via Paystack →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DONOR VOICES — "Why They Give"
          ═══════════════════════════════════════ */}
      <section className="relative bg-[#140506] px-6 py-28 overflow-hidden">
        {/* Subtle grid background */}
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
                  Why They Give
                </span>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.15}>
                <h2 className="mt-6 text-4xl font-black uppercase leading-none text-white md:text-5xl lg:text-6xl font-heading tracking-tight">
                  Inspired By{" "}
                  <span className="inline-block -rotate-1 bg-[#BC1D26] text-white px-4 py-2 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)]">
                    Purpose.
                  </span>
                </h2>
              </ScrollReveal>
            </div>

            {/* Swiper Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button className="donor-prev flex h-12 w-12 items-center justify-center border-2 border-black bg-white text-[#BC1D26] shadow-[4px_4px_0px_rgba(188,29,38,1)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#BC1D26] hover:text-white">
                <ChevronLeft size={20} />
              </button>
              <button className="donor-next flex h-12 w-12 items-center justify-center border-2 border-black bg-white text-[#BC1D26] shadow-[4px_4px_0px_rgba(188,29,38,1)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#BC1D26] hover:text-white">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Donor Quotes Carousel */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={{
                nextEl: ".donor-next",
                prevEl: ".donor-prev",
              }}
              autoplay={{ delay: 5500, disableOnInteraction: false }}
              spaceBetween={28}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              className="overflow-visible"
            >
              {DONOR_QUOTES.map((donor) => (
                <SwiperSlide key={donor.id}>
                  <article className="relative bg-white border-2 border-black p-8 sm:p-10 shadow-[8px_8px_0px_rgba(188,29,38,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0px_rgba(188,29,38,1)] h-full flex flex-col">
                    {/* Decorative Quote Watermark */}
                    <Quote
                      size={100}
                      className="absolute right-6 top-6 text-[#BC1D26]/[0.08] pointer-events-none"
                    />

                    {/* Quote Text */}
                    <p className="relative z-10 text-lg sm:text-xl leading-relaxed text-black/80 font-semibold flex-1">
                      &ldquo;{donor.quote}&rdquo;
                    </p>

                    {/* Donor Info */}
                    <div className="mt-8 pt-6 border-t-2 border-black/10 flex items-center gap-4">
                      {/* Initials Avatar */}
                      <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center bg-[#BC1D26] text-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] font-black text-lg font-heading">
                        {getInitials(donor.name)}
                      </div>

                      <div>
                        <h4 className="text-base sm:text-lg font-black uppercase text-black font-heading leading-snug">
                          {donor.name}
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#BC1D26] mt-0.5">
                          {donor.role}
                        </p>
                        {donor.location && (
                          <p className="text-[11px] uppercase tracking-[0.15em] text-black/40 mt-0.5">
                            {donor.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </ScrollReveal>

          {/* Bottom CTA — second chance to donate after reading quotes */}
          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="mt-20 text-center">
              <p className="text-white/70 text-base sm:text-lg font-semibold mb-8 max-w-2xl mx-auto">
                Join these donors and help us build a healthier future for
                communities across Africa.
              </p>

              <a
                href="https://paystack.com/pay/voima"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-3
                  bg-white text-[#BC1D26] hover:bg-[#BC1D26] hover:text-white
                  border-2 border-black
                  px-10 py-5 text-base font-black uppercase tracking-wider
                  shadow-[6px_6px_0px_rgba(0,0,0,1)]
                  transition-all duration-200
                  hover:-translate-y-1 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)]
                "
              >
                Make Your Impact Today →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}