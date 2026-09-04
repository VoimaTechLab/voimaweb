import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetInvolved } from "../../hooks/useGetInvolved";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function CareersCTA() {
  const { careersCTA } = useGetInvolved();
  return (
    <section className="px-6 py-24 bg-[#fafafa]">
      <ScrollReveal variant="scale-in">
        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            border-4 border-black
            shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
            bg-[#BC1D26]
            px-8
            py-16
            text-white
            md:px-16 md:py-20
          "
        >
          {/* Glow */}
          <div className="absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            <ScrollReveal variant="fade-down" delay={0.1}>
              <div className="inline-block bg-white border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] mb-6 flex items-center gap-2 w-fit">
                <Briefcase size={16} className="text-[#BC1D26]" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-[#BC1D26]">
                  {careersCTA.badge}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-white font-heading tracking-tight">
                {careersCTA.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.3}>
              <p className="mt-6 text-base sm:text-lg leading-8 sm:leading-9 text-white/90 font-semibold max-w-2xl">
                {careersCTA.description}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={careersCTA.primaryButton.link}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    bg-white border-2 border-black
                    px-8 py-4
                    text-sm font-black uppercase tracking-wider
                    text-[#BC1D26]
                    shadow-[6px_6px_0px_rgba(0,0,0,1)]
                    transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
                  "
                >
                  {careersCTA.primaryButton.label}
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to={careersCTA.secondaryButton.link}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    bg-transparent text-white
                    border-2 border-white
                    shadow-[4px_4px_0px_rgba(255,255,255,0.3)]
                    px-8 py-4
                    text-sm font-black uppercase tracking-wider
                    transition-all duration-200
                    hover:-translate-y-0.5 hover:bg-white hover:text-[#BC1D26]
                  "
                >
                  {careersCTA.secondaryButton.label}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}









