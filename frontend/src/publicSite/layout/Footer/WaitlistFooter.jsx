import { Link } from "react-router-dom";

export default function WaitlistFooter() {
  return (
    <footer className="px-4 md:px-6 py-12 md:py-20">
      <div
        className="
          mx-auto
          max-w-6xl
          rounded-3xl
          md:rounded-[58px]
          border
          border-black/5
          bg-[#BC1D26]
          p-6
          md:p-12
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          md:gap-8
          text-center
          md:text-left
        "
      >
        <h3 className="text-lg md:text-2xl font-bold text-[#fff] font-display">
          VOIMA APP WAITLIST
        </h3>

        <p className="text-xs md:text-base text-white/90">
          Launching Soon.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-base text-white/60">
          <Link to="/privacy">
            Privacy
          </Link>

          <Link to="/terms">
            Terms
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>

        <p className="text-xs md:text-sm text-white/40">
          © 2026 Voima Initiative
        </p>
      </div>
    </footer>
  );
}