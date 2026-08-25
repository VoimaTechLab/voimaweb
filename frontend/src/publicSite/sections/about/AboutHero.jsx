import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useAbout } from "../../hooks/useAbout";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import EmmanuelImage from "@/assets/Leaders/Cherryn.png";

export default function AboutHero() {
  const { heroData } = useAbout();
  return (
    <section className="relative overflow-visible bg-[#fafafa] px-6 pt-20 sm:pt-24 pb-0">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6 pb-16 sm:pb-24 pt-4">
            <ScrollReveal variant="fade-down">
              <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-2">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                  {heroData.eyebrow}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black font-heading tracking-tight leading-[1.05] uppercase">
                {heroData.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg leading-relaxed text-black/75 font-medium max-w-xl">
                {heroData.description}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to={heroData.cta.primary.link}
                  className="
                    group inline-flex items-center gap-3
                    bg-[#BC1D26] text-white
                    border-2 border-black
                    shadow-[5px_5px_0px_rgba(0,0,0,1)]
                    px-8 py-4
                    text-xs sm:text-sm font-black uppercase tracking-wider
                    rounded-xl transition-all duration-200
                    hover:-translate-y-0.5 hover:bg-black hover:shadow-[7px_7px_0px_rgba(0,0,0,1)]
                  "
                >
                  {heroData.cta.primary.text}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to={heroData.cta.secondary.link}
                  className="
                    inline-flex items-center gap-2
                    bg-white text-[#BC1D26]
                    border-2 border-black
                    shadow-[5px_5px_0px_rgba(0,0,0,1)]
                    px-8 py-4
                    text-xs sm:text-sm font-black uppercase tracking-wider
                    rounded-xl transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_rgba(0,0,0,1)]
                  "
                >
                  {heroData.cta.secondary.text}
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Leader Portrait with Violet Outline & Speech Bubble */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-end h-full">
            <ScrollReveal variant="fade-left" className="w-full">
              <div className="relative w-full flex flex-col items-center justify-end">

                {/* Speech Bubble: Stats */}
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="
                    relative z-20 self-end sm:-mr-2 mb-4
                    max-w-[260px] sm:max-w-[300px]
                    rounded-2xl bg-white border-2 border-black
                    p-4 sm:p-5 shadow-[5px_5px_0px_rgba(0,0,0,1)]
                  "
                >
                  {/* Pointer */}
                  <div
                    className="absolute -bottom-2.5 left-10 w-4 h-4 bg-white border-r-2 border-b-2 border-black rotate-45"
                  />
                  <p className="text-2xl sm:text-3xl font-black text-[#BC1D26] font-heading">
                    {heroData.stats.value}
                  </p>
                  <p className="text-xs sm:text-[13px] font-bold text-black/75 leading-relaxed mt-1">
                    {heroData.stats.label}
                  </p>
                </motion.div>

                {/* Leader Portrait with Mint Green Outline */}
                <div className="relative z-10 w-full flex items-end justify-center">
                  <img
                    src={EmmanuelImage}
                    alt="Voima Leader - Emmanuel"
                    style={{
                      filter:
                        "drop-shadow(3px 0 0 #AD74FB) drop-shadow(-3px 0 0 #AD74FB) drop-shadow(0 3px 0 #AD74FB) drop-shadow(0 -3px 0 #AD74FB) drop-shadow(4px 4px 0 #AD74FB) drop-shadow(-4px -4px 0 #AD74FB) drop-shadow(4px -4px 0 #AD74FB) drop-shadow(-4px 4px 0 #AD74FB) drop-shadow(0 0 14px rgba(173, 116, 251, 0.7)) drop-shadow(0 15px 25px rgba(0,0,0,0.18))",
                    }}
                    className="h-[460px] sm:h-[560px] lg:h-[640px] w-auto max-w-full object-contain object-bottom block align-bottom"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}