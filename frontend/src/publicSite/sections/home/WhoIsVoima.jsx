import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Voima2 from "@/assets/Hero/voima2.png";

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733-16z"/>
    <path d="M4 20l6.768-6.768"/>
    <path d="M20 4l-6.768 6.768"/>
  </svg>
);

const SOCIAL_CHANNELS = [
  { name: "INSTAGRAM", icon: InstagramIcon, href: "https://www.instagram.com/voimainitiative" },
  { name: "LINKEDIN", icon: LinkedinIcon, href: "https://www.linkedin.com/company/voimainitiative" },
  { name: "FACEBOOK", icon: FacebookIcon, href: "https://www.facebook.com/voimainitiative" },
  { name: "X", icon: XIcon, href: "https://x.com/voimainitiative" },
];

export default function WhoIsVoima() {
  return (
    <section className="relative overflow-visible bg-[#BC1D26] pt-16 sm:pt-24 pb-0">
      {/* Layered Asymmetric Chevron Top Edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none" style={{ transform: "translateY(-99%)" }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-24 block overflow-visible">
          <polygon points="0,40 700,120 1200,60 1200,120 0,120" fill="#000000" />
          <polygon points="0,80 700,120 1200,90 1200,120 0,120" fill="#BC1D26" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column — Title & Social Button Cards */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal variant="fade-right">
              <div className="inline-block space-y-2">
                <div className="bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] px-5 py-2 inline-block">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#BC1D26] tracking-tight font-heading uppercase leading-none">
                    WHAT IS
                  </h2>
                </div>
                <br />
                <div className="bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] px-5 py-2 inline-block">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#BC1D26] tracking-tight font-heading uppercase leading-none">
                    VOIMA?
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            {/* 4 Social Buttons with Voima Brand Colors */}
            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {SOCIAL_CHANNELS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group flex flex-col items-center justify-center p-3 sm:p-4
                        bg-[#fafafa] hover:bg-black text-black hover:text-white
                        border-2 border-black
                        shadow-[4px_4px_0px_rgba(0,0,0,1)]
                        transition-all duration-200
                        hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                      "
                    >
                      <div className="p-2 rounded-lg bg-black/5 group-hover:bg-white/20 transition-colors">
                        <Icon />
                      </div>
                      <span className="mt-2 text-[11px] font-black tracking-wider uppercase">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Mission Description & Action CTA */}
          <div className="lg:col-span-6 space-y-6 pt-2">
            <ScrollReveal variant="fade-left" delay={0.15}>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug text-white font-heading">
                We’re a global healthcare non-profit supporting the next generation of patients, caregivers, and medical leaders to tackle sickle cell disease in new ways.
              </h3>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={0.25}>
              <p className="text-base sm:text-lg leading-8 text-white/90 font-medium">
                We empower community health workers and families through engaging digital symptom tracking, early infant diagnostic screening, and regional clinic outreach to move your ideas for change forward!
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.35}>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="
                    inline-flex items-center gap-3
                    bg-white hover:bg-black text-[#BC1D26] hover:text-white
                    border-2 border-black
                    shadow-[5px_5px_0px_rgba(0,0,0,1)]
                    px-8 py-4 text-sm font-extrabold tracking-wider uppercase
                    transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_rgba(0,0,0,1)]
                  "
                >
                  LEARN MORE
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom Empowered Community Crowd Banner */}
      <ScrollReveal variant="scale-in" delay={0.3} className="mt-4 pt-4 sm:pt-6 px-6">
        <div className="relative w-full max-w-5xl mx-auto overflow-visible flex items-end justify-center">
          <img
            src={Voima2}
            alt="Voima Initiative Community"
            className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
