import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import FadeStagger from "@/components/animations/FadeStagger";
import { useHome } from "@/publicSite/hooks/useHome";

function FloatingOrb({ size, top, left, delay, color }) {
  return (
    <motion.div
      className={`absolute rounded-full ${color} blur-3xl`}
      style={{ width: size, height: size, top, left }}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function CTASection() {
  const { ctaSection } = useHome();
  const { title, description, primaryCta, secondaryCta } = ctaSection;

  return (
    <section className="relative overflow-visible bg-[#fafafa] px-6 py-32 text-white border-b-4 border-black">
      {/* Multi-Vertex Crown Crest Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none" style={{ transform: "translateY(-99%)" }}>
        <svg viewBox="0 -4 1200 84" preserveAspectRatio="none" className="w-full h-10 sm:h-16 block overflow-visible">
          <polygon points="0,45 250,10 550,60 850,5 1100,50 1200,20 1200,100 0,100" fill="#fafafa" />
          <polyline points="0,45 250,10 550,60 850,5 1100,50 1200,20" fill="none" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
        </svg>
      </div>

      <div className="relative mx-auto mt-1 max-w-6xl">
        <ScrollReveal variant="scale-in">
          <div
            className="
              relative overflow-hidden
              border-4 border-black
              bg-[#BC1D26]
              shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
              px-8 py-14
              text-center
              md:px-16 md:py-20
            "
          >
            {/* Animated Orbs */}
            <FloatingOrb size="300px" top="-20%" left="-10%" delay={0} color="bg-[#800000]/20" />
            <FloatingOrb size="250px" top="40%" left="80%" delay={2} color="bg-[#F47B3A]/20" />
            <FloatingOrb size="200px" top="-10%" left="60%" delay={4} color="bg-[#ffffff]/10" />

            <div className="relative z-10">
              <ScrollReveal variant="scale-pop" delay={0.2} threshold={0.5}>
                <div
                  className="
                    mx-auto flex h-20 w-20
                    items-center justify-center
                    border-2 border-white bg-black
                    shadow-[5px_5px_0px_rgba(255,255,255,1)]
                    text-[#BC1D26]
                  "
                >
                  <HeartHandshake size={38} />
                </div>
              </ScrollReveal>

              <FadeStagger staggerSpeed="normal" delay={0.3}>
                <h2
                  className="
                    mx-auto mt-10
                    max-w-4xl
                    text-4xl font-black uppercase
                    leading-none
                    text-white
                    md:text-6xl font-heading tracking-tight
                  "
                >
                  {title}
                </h2>

                <p
                  className="
                    mx-auto mt-8
                    max-w-3xl
                    text-lg leading-9
                    text-white/90 font-semibold
                  "
                >
                  {description}
                </p>

                <div className="mt-12 flex flex-wrap justify-center gap-5">
                  <Link
                    to={primaryCta?.link || "/get-involved"}
                    className="
                      group
                      inline-flex items-center justify-center gap-3
                      bg-white
                      border-2 border-black
                      px-8 py-4
                      text-sm font-black uppercase tracking-wider
                      text-[#BC1D26]
                      shadow-[6px_6px_0px_rgba(0,0,0,1)]
                      transition-all duration-200
                      hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
                    "
                  >
                    {primaryCta?.text || "Get Involved"}
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to={secondaryCta?.link || "/get-involved"}
                    className="
                      inline-flex items-center justify-center
                      bg-transparent text-white
                      border-2 border-white
                      shadow-[4px_4px_0px_rgba(255,255,255,0.3)]
                      px-8 py-4
                      text-sm font-black uppercase tracking-wider
                      transition-all duration-200
                      hover:-translate-y-0.5 hover:bg-white hover:text-[#BC1D26]
                    "
                  >
                    {secondaryCta?.text || "Partner With Us"}
                  </Link>
                </div>
              </FadeStagger>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
