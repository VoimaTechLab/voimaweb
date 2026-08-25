import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import LeaderImage from "@/assets/Leaders/Emmanuel.png";

export default function OurStoryHome() {
  return (
    <section className="relative overflow-visible bg-white px-6 pt-20 sm:pt-24 pb-0">
      {/* Top Dual-Apex Crown Divider */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none"
        style={{ transform: "translateY(-99%)" }}
      >
        <svg
          viewBox="0 -4 1200 84"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-16 block overflow-visible"
        >
          <polygon points="0,65 300,10 650,70 1000,15 1200,55 1200,100 0,100" fill="#ffffff" />
          <polyline
            points="0,65 300,10 650,70 1000,15 1200,55"
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
          
          {/* Left Column: Big Leader Portrait Sitting Directly on the Line with Speech Bubble */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-end h-full">
            <ScrollReveal variant="fade-right" className="w-full">
              <div className="relative w-full flex flex-col items-center justify-end">
                
                {/* Speech Bubble Quote Box */}
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
                  {/* Speech Bubble Pointer */}
                  <div
                    className="absolute -bottom-2.5 left-10 w-4 h-4 bg-white border-r-2 border-b-2 border-black rotate-45"
                  />

                  <p className="text-xs sm:text-[13px] font-bold text-black/85 leading-relaxed">
                    &ldquo;Health crises do not start when the pain starts. Early action changes outcomes.&rdquo;
                  </p>
                </motion.div>

                {/* Big Clean Leader Portrait sitting flush on bottom border line */}
                <div className="relative z-10 w-full flex items-end justify-center">
                  <img
                    src={LeaderImage}
                    alt="Voima Leader"
                    style={{
                      filter:
                        "drop-shadow(3px 0 0 #1DC8A2) drop-shadow(-3px 0 0 #1DC8A2) drop-shadow(0 3px 0 #1DC8A2) drop-shadow(0 -3px 0 #1DC8A2) drop-shadow(4px 4px 0 #1DC8A2) drop-shadow(-4px -4px 0 #1DC8A2) drop-shadow(4px -4px 0 #1DC8A2) drop-shadow(-4px 4px 0 #1DC8A2) drop-shadow(0 0 14px rgba(29, 200, 162, 0.7)) drop-shadow(0 15px 25px rgba(0,0,0,0.18))",
                    }}
                    className="h-[460px] sm:h-[560px] lg:h-[640px] w-auto max-w-full object-contain object-bottom block align-bottom -mb-0"
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
                  Our Story
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#BC1D26] font-heading tracking-tight leading-tight">
                A mission born from loss, driven by the need for better care.
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-black/75 font-medium">
                <p>
                  For millions living with sickle cell disease, pain crises are often treated as sudden and unpredictable. But in reality, these crises frequently build over time through patterns, triggers, and warning signs that go unnoticed until it is too late.
                </p>
                <p>
                  This reality became deeply personal to Voima&apos;s founder through the loss of a close friend, Elijah, who lived with sickle cell disease. Despite his strength and resilience, Elijah endured repeated pain crises and the burden of navigating a healthcare system that often responded only after his condition had worsened.
                </p>
                <p>
                  His story revealed a painful truth: sickle cell care is still largely reactive. Voima was created from the belief that care should begin long before pain becomes a crisis. By combining technology, research, advocacy, and community support, we are building a future where people living with sickle cell disease can detect risks earlier, act sooner, and live healthier lives.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.3}>
              <div className="pt-4">
                <Link
                  to="/our-journey"
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
                  Read our Journey
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Bottom Asymmetrical Angled Ground Line */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none"
        style={{ transform: "translateY(99%)" }}
      >
        <svg
          viewBox="0 -4 1200 84"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-16 block overflow-visible"
        >
          <polygon points="0,0 550,65 850,20 1200,50 1200,-4 0,-4" fill="#ffffff" />
          <polyline
            points="0,0 550,65 850,20 1200,50"
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
