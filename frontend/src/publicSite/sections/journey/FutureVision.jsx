import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function FutureVision() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-32 bg-[#fafafa]">
      <ScrollReveal variant="scale-in">
        <div
          className="
            mx-auto
            max-w-7xl
            border-4 border-black
            shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
            bg-[#BC1D26]
            px-6
            py-10
            sm:px-10
            sm:py-14
            lg:px-16
            lg:py-16
            text-white
          "
        >
          <ScrollReveal variant="fade-up" delay={0.1}>
            <h2 className="max-w-3xl text-3xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl font-heading tracking-tight">
              The journey continues.
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 font-semibold sm:mt-8 sm:text-lg sm:leading-9">
              We are building the next generation of healthcare advocacy,
              education, technology, and community support across Africa.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/get-involved"
                className="
                  bg-white border-2 border-black
                  px-8 py-4
                  text-sm font-black uppercase tracking-wider
                  text-[#BC1D26]
                  shadow-[6px_6px_0px_rgba(0,0,0,1)]
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
                "
              >
                Join Our Mission
              </Link>

              <Link
                to="/get-involved#partner"
                className="
                  bg-transparent text-white
                  border-2 border-white
                  shadow-[4px_4px_0px_rgba(255,255,255,0.3)]
                  px-8 py-4
                  text-sm font-black uppercase tracking-wider
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:bg-white hover:text-[#BC1D26]
                "
              >
                Become A Partner
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
}