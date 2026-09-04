import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function PartnerSection() {
  return (
    <section className="px-6 py-28 bg-white border-b-4 border-black">
      <ScrollReveal variant="scale-in">
        <div
          className="
            mx-auto
            max-w-7xl
            border-4 border-black
            bg-white
            shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
            p-12 sm:p-16
            text-center
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-black font-heading tracking-tight">
              Partner With Voima
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 sm:leading-9 text-black/75 font-semibold">
              We collaborate with healthcare institutions,
              NGOs, universities, technology companies,
              foundations and community leaders.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.4}>
            <Link
              to="/contact"
              className="
                mt-10
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
    </section>
  );
}