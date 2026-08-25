// src/pages/Donate.jsx
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Donate() {
  return (
    <main className="bg-[#fafafa] pt-[90px] min-h-[80vh] flex items-center">
      <section className="px-6 py-24 w-full">
        <div className="mx-auto max-w-4xl text-center">
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
    </main>
  );
}