import { useState } from "react";
import { Link } from "react-router-dom";
import { useVoimaApp } from "../../hooks/useVoimaApp";

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
      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#BC1D26]/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
              {heroData.eyebrow}
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-tight text-[#BC1D26]">
              {heroData.title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-black/65">
              {heroData.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to={heroData.primaryCTA.link}
                className="rounded-full bg-[#BC1D26] px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
              >
                {heroData.primaryCTA.text}
              </Link>

              {hasVideo && (
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-full border border-black/10 px-7 py-4 font-semibold text-[#BC1D26] transition-all duration-300 hover:border-[#BC1D26] hover:bg-[#BC1D26]/5"
                >
                  {heroData.secondaryCTA.text}
                </button>
              )}
            </div>
          </div>

          {/* Phones */}
          <div className="relative flex justify-center">
            <div className="absolute h-[500px] w-[500px] rounded-full bg-[#BC1D26]/10 blur-3xl" />

            <div
              className="
                absolute
                right-10
                top-10
                h-[600px]
                w-[300px]
                rotate-[12deg]
                overflow-hidden
                rounded-[50px]
                border-[10px]
                border-black
                bg-black
                shadow-2xl
              "
            >
              <img
                src={heroData.showcase.backScreen}
                alt="Voima Community"
                className="h-full w-full object-cover"
              />
            </div>

            <div
              className="
                relative
                z-10
                h-[650px]
                w-[320px]
                overflow-hidden
                rounded-[50px]
                border-[10px]
                border-black
                bg-black
                shadow-[0_40px_120px_rgba(0,0,0,0.15)]
              "
            >
              <img
                src={heroData.showcase.frontScreen}
                alt="Voima Dashboard"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
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