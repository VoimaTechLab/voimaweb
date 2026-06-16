import { Link } from "react-router-dom";
import { useVoimaApp } from "../../hooks/useVoimaApp";

export default function DownloadCTA() {
  const { downloadCTA } = useVoimaApp();
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
        <div className="relative z-10 p-16 lg:p-20">
          <span
            className="
              inline-flex
              rounded-full
              border border-white/20
              bg-white/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
              backdrop-blur-sm
            "
          >
            Download Voima
          </span>

          <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white">
            {downloadCTA.title}
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/80">
            {downloadCTA.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to={downloadCTA.primaryButton.link}
              className="
                rounded-full
                bg-white
                px-7
                py-4
                font-semibold
                text-[#BC1D26]
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              {downloadCTA.primaryButton.text}
            </Link>

            <Link
              to={downloadCTA.secondaryButton.link}
              className="
                rounded-full
                border
                border-white/20
                bg-white/10
                px-7
                py-4
                font-semibold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/20
              "
            >
              {downloadCTA.secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}