import { Link } from "react-router-dom";

export default function WaitlistFooter() {
  return (
    <footer className="px-4 md:px-6 py-12 md:py-20">
      <div
        className="
          mx-auto
          max-w-6xl
          border-4
          border-black
          bg-[#BC1D26]
          shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
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
        <h3 className="text-lg md:text-3xl font-black uppercase text-white font-heading tracking-tight">
          VOIMA APP WAITLIST
        </h3>

        <p className="text-xs md:text-sm font-black uppercase tracking-widest text-white/90">
          Launching Soon.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-black uppercase tracking-widest text-white">
          <Link to="/privacy" className="transition-all hover:-translate-y-0.5 hover:text-white/70">
            Privacy
          </Link>

          <Link to="/terms" className="transition-all hover:-translate-y-0.5 hover:text-white/70">
            Terms
          </Link>

          <Link to="/contact" className="transition-all hover:-translate-y-0.5 hover:text-white/70">
            Contact
          </Link>
        </div>

        <p className="text-xs font-black uppercase tracking-widest text-white/60">
          © {new Date().getFullYear()} Voima
        </p>
      </div>
    </footer>
  );
}