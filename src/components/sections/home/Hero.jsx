import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../../motion/variants";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="
        relative flex min-h-screen items-center
        overflow-hidden bg-[#ffffff]
      "
    >

      {/* Background Glow
      <div
        className="
          absolute left-[-10%] top-[-10%]
          h-[320px] w-[320px]
          rounded-full bg-[#800020]/20 blur-3xl
        "
      />*/}

      <div
        className="
          absolute bottom-[-20%] right-[-10%]
          h-[420px] w-[420px]
          rounded-full bg-white/10 blur-3xl
        "
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232, 76, 76, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 76, 76, 0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative Ring */}
      <div
        className="
          absolute right-[-10%] top-[12%]
          h-[600px] w-[600px]
          rounded-full border border-primary-600
        "
      />

      <div
        className="
          absolute right-[0%] top-[20%]
          h-[420px] w-[420px]
          rounded-full border border-primary-600
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-36 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <span
              className="
                inline-flex items-center gap-3
                rounded-full border border-white/10
                bg-[#800000] px-5 py-2
                text-sm font-bold tracking-wide
                text-white backdrop-blur-md
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#F47B3A]" />

              Building Healthier Lives Using AI
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="
              mt-8 text-5xl font-bold leading-[1.05]
              tracking-tight text-primary-800
              md:text-7xl
            "
          >
            Fighting Sickle Cell Together{" "}
            <span className="text-[#F47B3A]">
              HealthTech & Proactive.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="
              mt-8 max-w-2xl
              text-lg leading-9 text-neutral-800
              md:text-xl
            "
          >
            Voima is a mission-driven healthtech startup building proactive, personalized support for 
            people living with chronic conditions, starting with sickle cell disease and the communities too often left behind.
             The name “Voima,” from the Finnish word for “strength,” 
            reflects our belief that patients and caregivers deserve scalable, culturally responsive,
             and human-centered solutions that empower them to better understand and manage their health.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Link
              to="/programs"
              className="
                inline-flex items-center gap-2
                rounded-full bg-[#800020]
                px-8 py-4 text-sm font-semibold
                text-white transition-all duration-300
                hover:scale-[1.03]
                hover:bg-[#F47B3A]
              "
            >
              Explore Programs
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="
                inline-flex items-center gap-2
                rounded-full border border-white/15
                bg-[#F47B3A] px-8 py-4
                text-sm font-semibold text-white
                backdrop-blur-md transition-all duration-300
                hover:bg-primary-600
              "
            >
              Our Story
            </Link>
          </motion.div>

          {/* Bottom Trust Text */}
          <motion.div
            variants={fadeUp}
            className="
              mt-14 flex flex-wrap items-center
              gap-6 text-sm text-white/40
            "
          >
            <span>Based in Accra, Ghana</span>

            <span className="h-1 w-1 rounded-full bg-white/30" />

            <span>Healthtech</span>

            <span className="h-1 w-1 rounded-full bg-white/30" />

            <span>Community Innovation</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator 
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.4,
          duration: 0.6,
        }}
        className="
          absolute bottom-8 left-1/2
          flex -translate-x-1/2
          flex-col items-center gap-2
          text-white/40
        "
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">
          Scroll
        </span> 

        <ChevronDown size={18} />
      </motion.div>*/}
    </section>
  );
}