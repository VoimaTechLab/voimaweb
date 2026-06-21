import { Link } from "react-router-dom";

export default function FutureVision() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-32">
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-3xl
          sm:rounded-[40px]
          lg:rounded-[48px]
          bg-[#BC1D26]
          px-6
          py-10
          sm:px-10
          sm:py-14
          lg:px-16
          lg:py-16
          text-white
        "
      >
        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          The journey continues.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:mt-8 sm:text-lg sm:leading-9">
          We are building the next generation of healthcare advocacy,
          education, technology, and community support across Africa.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
          <Link
            to="/get-involved"
            className="w-full rounded-full bg-white px-7 py-4 text-center font-semibold text-[#BC1D26] transition-all duration-300 hover:scale-[1.02] sm:w-auto"
          >
            Join Our Mission
          </Link>

          <Link
            to="/get-involved#partner"
            className="w-full rounded-full border border-white/20 px-7 py-4 text-center font-semibold transition-all duration-300 hover:bg-white/10 sm:w-auto"
          >
            Become A Partner
          </Link>
        </div>
      </div>
    </section>
  );
}