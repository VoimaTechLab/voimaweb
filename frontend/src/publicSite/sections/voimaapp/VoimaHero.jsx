import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useVoimaApp } from "../../hooks/useVoimaApp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import FadeStagger from "@/components/animations/FadeStagger";

export default function VoimaHero() {
  const { heroData } = useVoimaApp();
  const [open, setOpen] = useState(false);

  if (!heroData) return null;

  const getYoutubeId = (url = "") => {
    try {
      const u = new URL(url);

      if (u.hostname.includes("youtu.be")) {
        return u.pathname.replace("/", "");
      }

      return u.searchParams.get("v");
    } catch {
      return "";
    }
  };

  const youtubeId = getYoutubeId(heroData.demoVideo?.youtubeUrl);

  const hasVideo =
    heroData.demoVideo?.videoType === "upload"
      ? heroData.demoVideo?.uploadedVideo
      : youtubeId;

  return (
    <>
      <section className="relative overflow-visible bg-[#fafafa] px-6 py-28 border-b-4 border-black">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#BC1D26]/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          {/* Content */}
          <ScrollReveal variant="fade-right">
            <FadeStagger staggerSpeed="normal">
              <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                  {heroData.eyebrow}
                </span>
              </div>

              <h1 className="text-5xl font-black uppercase leading-none text-black md:text-6xl lg:text-7xl font-heading tracking-tight">
                {heroData.title}
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-9 text-black/75 font-semibold">
                {heroData.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={heroData.primaryCTA.link}
                  className="bg-[#BC1D26] border-2 border-black px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                >
                  {heroData.primaryCTA.text}
                </Link>

                {hasVideo && (
                  <button
                    onClick={() => setOpen(true)}
                    className="bg-white border-2 border-black px-8 py-4 text-sm font-black uppercase tracking-wider text-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                  >
                    {heroData.secondaryCTA.text}
                  </button>
                )}
              </div>
            </FadeStagger>
          </ScrollReveal>

          {/* Phones */}
          <ScrollReveal variant="fade-left">
            <div className="relative flex justify-center">
              <div className="absolute h-[500px] w-[500px] rounded-full bg-[#BC1D26]/10 blur-3xl" />

              {/* Floating Back Screen */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="
                  absolute
                  right-10
                  top-10
                  h-[600px]
                  w-[300px]
                  rotate-[12deg]
                  overflow-hidden
                  rounded-[50px]
                  border-4
                  border-black
                  bg-black
                  shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
                "
              >
                <img
                  src={heroData.showcase.backScreen}
                  alt="Voima Community"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Floating Front Screen */}
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="
                  relative
                  z-10
                  h-[650px]
                  w-[320px]
                  overflow-hidden
                  rounded-[50px]
                  border-4
                  border-black
                  bg-black
                  shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
                "
              >
                <img
                  src={heroData.showcase.frontScreen}
                  alt="Voima Dashboard"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Demo Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-[#BC1D26]"
            >
              ×
            </button>

            {heroData.demoVideo?.videoType === "upload" ? (
              <video
                controls
                autoPlay
                className="aspect-video w-full bg-black"
              >
                <source
                  src={heroData.demoVideo.uploadedVideo}
                  type="video/mp4"
                />
              </video>
            ) : (
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title="Voima App Demo"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}