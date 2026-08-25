import { Link } from "react-router-dom";
import { useVoimaApp } from "../../hooks/useVoimaApp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function DownloadCTA() {
  const { downloadCTA } = useVoimaApp();
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
          "
        >
          {/* Background Image */}
          <img
            src={downloadCTA.backgroundImage}
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#BC1D26]/95
              via-[#BC1D26]/80
              to-[#BC1D26]/55
            "
          />

          {/* Glow */}
          <div
            className="
              absolute
              right-0
              top-0
              h-[400px]
              w-[400px]
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          {/* Content */}
          <div className="relative z-10 p-12 sm:p-16 lg:p-20">
            <ScrollReveal variant="fade-down" delay={0.1}>
              <div className="inline-block bg-[#BC1D26] border-2 border-white px-5 py-2 shadow-[4px_4px_0px_rgba(255,255,255,0.3)] mb-6">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                  Download Voima
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-white font-heading tracking-tight">
                {downloadCTA.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.3}>
              <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-8 sm:leading-9 text-white/90 font-semibold">
                {downloadCTA.description}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={downloadCTA.primaryButton.link}
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
                  {downloadCTA.primaryButton.text}
                </Link>

                <Link
                  to={downloadCTA.secondaryButton.link}
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
                  {downloadCTA.secondaryButton.text}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}