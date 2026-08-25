import { motion } from "framer-motion";
import { useAbout } from "@/publicSite/hooks/useAbout";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import SpendiloveImage from "@/assets/Leaders/spendilove.png";

export default function StorySection() {
  const { storyData } = useAbout();
  return (
    <section className="relative overflow-visible bg-white px-6 pt-20 sm:pt-24 pb-0">
      {/* Top Divider */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none"
        style={{ transform: "translateY(-99%)" }}
      >
        <svg
          viewBox="0 -4 1200 84"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-16 block overflow-visible"
        >
          <polygon points="0,50 400,5 750,65 1200,15 1200,100 0,100" fill="#ffffff" />
          <polyline
            points="0,50 400,5 750,65 1200,15"
            fill="none"
            stroke="black"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="miter"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">

          {/* Left Column: Leader Portrait with Violet Outline & Speech Bubble */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-end h-full">
            <ScrollReveal variant="fade-right" className="w-full">
              <div className="relative w-full flex flex-col items-center justify-end">

                {/* Speech Bubble Quote */}
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="
                    relative z-20 self-end sm:-mr-2 mb-4
                    max-w-[280px] sm:max-w-[320px]
                    rounded-2xl bg-white border-2 border-black
                    p-4 sm:p-5 shadow-[5px_5px_0px_rgba(0,0,0,1)]
                  "
                >
                  {/* Pointer */}
                  <div
                    className="absolute -bottom-2.5 left-10 w-4 h-4 bg-white border-r-2 border-b-2 border-black rotate-45"
                  />
                  <p className="text-xs sm:text-[13px] font-bold text-black/85 leading-relaxed">
                    &ldquo;What began as a vision for awareness and advocacy has evolved into a growing movement focused on healthcare innovation and digital transformation.&rdquo;
                  </p>
                </motion.div>

                {/* Leader Portrait with Coral Outline */}
                <div className="relative z-10 w-full flex items-end justify-center">
                  <img
                    src={SpendiloveImage}
                    alt="Voima Leader - Spendilove"
                    style={{
                      filter:
                        "drop-shadow(3px 0 0 #FF8A65) drop-shadow(-3px 0 0 #FF8A65) drop-shadow(0 3px 0 #FF8A65) drop-shadow(0 -3px 0 #FF8A65) drop-shadow(4px 4px 0 #FF8A65) drop-shadow(-4px -4px 0 #FF8A65) drop-shadow(4px -4px 0 #FF8A65) drop-shadow(-4px 4px 0 #FF8A65) drop-shadow(0 0 14px rgba(255, 138, 101, 0.7)) drop-shadow(0 15px 25px rgba(0,0,0,0.18))",
                    }}
                    className="h-[460px] sm:h-[560px] lg:h-[640px] w-auto max-w-full object-contain object-bottom block align-bottom"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Story Text Content */}
          <div className="lg:col-span-6 space-y-6 pb-16 sm:pb-24 pt-4">
            <ScrollReveal variant="fade-down">
              <div className="inline-block bg-[#BC1D26] border-2 border-black px-4 py-1.5 shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-2">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-white">
                  {storyData.eyebrow}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#BC1D26] font-heading tracking-tight leading-tight uppercase">
                {storyData.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-black/75 font-medium">
                <p className="border-l-4 border-[#BC1D26] pl-5 font-semibold">
                  {storyData.descriptionOne}
                </p>
                <p>
                  {storyData.descriptionTwo}
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Bottom Divider */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none"
        style={{ transform: "translateY(99%)" }}
      >
        <svg
          viewBox="0 -4 1200 84"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-16 block overflow-visible"
        >
          <polygon points="0,10 350,70 800,5 1200,60 1200,-4 0,-4" fill="#ffffff" />
          <polyline
            points="0,10 350,70 800,5 1200,60"
            fill="none"
            stroke="black"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="miter"
          />
        </svg>
      </div>
    </section>
  );
}