import { Link } from "react-router-dom";
import { useAbout } from "../../hooks/useAbout";

export default function GalleryCTA() {
  const { galleryData } = useAbout();
  return (
    <section className="px-6 py-24">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[48px]
        "
      >
        {/* Background Image */}
        <img
          src={galleryData.image}
          alt="Voima Community"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#BC1D26]/95
            via-[#BC1D26]/80
            to-black/40
          "
        />

        {/* Glow */}
        <div
          className="
            absolute
            right-[-100px]
            top-[-100px]
            h-[300px]
            w-[300px]
            rounded-full
            bg-white/10
            blur-3xl
          "
        />

        {/* Content */}
        <div className="relative z-10 p-16 lg:p-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            {galleryData.eyebrow}
          </p>

          <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white">
            {galleryData.title}
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/80">
            {galleryData.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to={galleryData.cta.link}
              className="
                rounded-full
                bg-white
                px-7
                py-4
                text-sm
                font-semibold
                text-[#BC1D26]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              {galleryData.cta.text}
            </Link>

            <Link
              to="/contact"
              className="
                rounded-full
                border
                border-white/30
                bg-white/10
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/20
              "
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}