// src/pages/PartnerWithUs.jsx
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function PartnerWithUs() {
  return (
    <main className="bg-[#fafafa] pt-[90px]">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl">

          <ScrollReveal variant="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-black font-heading tracking-tight">
              Partner With Voima
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <p className="mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-black/75 font-semibold">
              We collaborate with institutions,
              hospitals, researchers, nonprofits,
              and organizations building a healthier future.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <div className="mt-10 sm:mt-16 border-4 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)] p-6 sm:p-10">
              <p className="text-lg font-bold text-black/75">
                Interested in partnering? Reach out to us at <a href="mailto:hello@voimainitiative.com" className="text-[#BC1D26] underline font-black">hello@voimainitiative.com</a> or visit our <a href="/contact" className="text-[#BC1D26] underline font-black">Contact Page</a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}