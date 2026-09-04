import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useHome } from "@/publicSite/hooks/useHome";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const AppleIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.905-.09 1.77-.76 3.1-.8 2.3 0 4.01 1.58 4.56 3.22-3.72 2.12-3.02 6.69.48 7.95zm-5.05-5.6c.13-1.61-.87-3.06-2.34-3.24-1.48-.12-2.83.73-3.02 2.26-.19 1.61 1.04 3 2.35 3.03 1.53.03 2.88-.87 3.01-2.05z" />
  </svg>
);

/* Animated concentric ring */
function AnimatedRing({ size, duration, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full border border-white/20"
      style={{ width: size, height: size }}
      animate={{ rotate: 360, scale: [1, 1.03, 1] }}
      transition={{
        rotate: { duration, repeat: Infinity, ease: "linear" },
        scale: { duration: duration / 2, repeat: Infinity, ease: "easeInOut", delay },
      }}
    />
  );
}

export default function AppShowcaseSection() {
  const { appShowcaseSection } = useHome();
  const {
    eyebrow,
    title,
    description,
    primaryCta,
    secondaryCta,
    storeLinks,
    floatingCard,
    videoSrc,
  } = appShowcaseSection;

  return (
    <section className="relative overflow-visible bg-[#BC1D26] px-6 py-32">
      {/* Asymmetrical Reverse-Diagonal Wedge with Crest */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none" style={{ transform: "translateY(-99%)" }}>
        <svg viewBox="0 -4 1200 84" preserveAspectRatio="none" className="w-full h-10 sm:h-16 block overflow-visible">
          <polygon points="0,80 420,0 880,65 1200,10 1200,100 0,100" fill="#BC1D26" />
          <polyline points="0,80 420,0 880,65 1200,10" fill="none" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
        </svg>
      </div>
      <div
        className="
          relative mx-auto
          grid max-w-7xl
          items-center gap-20
          lg:grid-cols-2
        "
      >
        {/* Text Content */}
        <div className="max-w-xl">
          <ScrollReveal variant="fade-right">
            <span
              className="
                text-sm font-semibold uppercase
                tracking-[0.2em]
                text-[#fff]
              "
            >
              {eyebrow}
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fade-right" delay={0.1}>
            <h2
              className="
                mt-6
                text-3xl sm:text-4xl md:text-5xl font-bold
                leading-tight
                text-white
                md:text-3xl sm:text-4xl md:text-5xl
              "
            >
              {title}
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-right" delay={0.2}>
            <p className="mt-8 text-lg leading-9 text-white/90">{description}</p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to={primaryCta.link}
                className="
                  group
                  inline-flex items-center gap-2
                  bg-white text-[#BC1D26]
                  border-2 border-black
                  shadow-[5px_5px_0px_rgba(0,0,0,1)]
                  px-7 py-4
                  text-sm font-black uppercase tracking-wider
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_rgba(0,0,0,1)]
                "
              >
                {primaryCta.text}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to={secondaryCta.link}
                className="
                  inline-flex items-center gap-2
                  bg-transparent text-white
                  border-2 border-white
                  shadow-[4px_4px_0px_rgba(255,255,255,0.3)]
                  px-7 py-4
                  text-sm font-black uppercase tracking-wider
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:bg-white hover:text-[#BC1D26]
                "
              >
                {secondaryCta.text}
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-5">
              {storeLinks.map((store) => (
                <Link
                  key={store.label}
                  to={store.link}
                  className={
                    store.variant === "light"
                      ? `
                        inline-flex items-center gap-3
                        rounded-5xl
                        bg-white
                        px-6 py-4
                        font-medium text-black
                        transition-all duration-300
                        hover:scale-[1.03]
                      `
                      : `
                        inline-flex items-center gap-3
                        rounded-5xl
                        border border-white/10
                        bg-white/5
                        px-6 py-4
                        font-medium text-white
                        backdrop-blur-md
                        transition-all duration-300
                        hover:bg-white/10
                      `
                  }
                >
                  {store.variant === "light" ? <AppleIcon /> : <Play size={18} />}
                  {store.label}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Phone Showcase with animated rings */}
        <ScrollReveal variant="scale-in" delay={0.2}>
          <div className="relative flex items-center justify-center">
            {/* Animated Concentric Rings */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <AnimatedRing size="520px" duration={50} delay={0} />
              <AnimatedRing size="420px" duration={40} delay={1} />
              <AnimatedRing size="320px" duration={30} delay={2} />
            </div>

            {/* Floating Phone Mockup */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative z-10
                h-[680px] w-[340px]
                overflow-hidden
                rounded-[50px]
                border-[10px]
                border-black
                bg-black
              "
            >
              <div
                className="
                  absolute left-1/2 top-3
                  z-20 h-7 w-32
                  -translate-x-1/2
                  rounded-full bg-black
                "
              />

              <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                <source src={videoSrc} type="video/mp4" />
              </video>
            </motion.div>

            {/* Floating Feature Card */}
            {floatingCard && (floatingCard.title || floatingCard.description) && (
              <ScrollReveal
                variant="fade-left"
                delay={0.5}
                className="
                  absolute -bottom-6 right-0
                  z-20 hidden md:block
                  max-w-md
                  bg-white
                  border-2 border-black
                  p-6
                  shadow-[8px_8px_0px_rgba(0,0,0,1)]
                "
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2.5 w-2.5 bg-[#BC1D26] border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]" />
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-black font-heading">
                    {floatingCard.title}
                  </h3>
                </div>

                <p className="text-sm font-semibold leading-relaxed text-black/75">
                  {floatingCard.description}
                </p>
              </ScrollReveal>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
