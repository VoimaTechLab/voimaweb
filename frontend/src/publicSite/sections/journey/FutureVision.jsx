import { Link } from "react-router-dom";

export default function FutureVision() {
  return (
    <section className="px-6 py-32">
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-[48px]
          bg-[#BC1D26]
          p-16
          text-white
        "
      >
        <h2 className="max-w-3xl text-6xl font-bold text-white">
          The journey continues.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-white/80">
          We are building the next generation of healthcare
          advocacy, education, technology, and community support
          across Africa.
        </p>

        <div className="mt-12 flex gap-4">
          <Link
            to="/get-involved"
            className="rounded-full bg-white px-7 py-4 font-semibold text-[#BC1D26] hover:scale-[1.02] duration-300 transition-all"
          >
            Join Our Mission
          </Link>

          <Link
            to="/get-involved#partner"
            className="rounded-full border border-white/20 px-7 py-4 font-semibold hover:bg-white/10  transition-all duration-300"
          >
            Become A Partner
          </Link>
        </div>
      </div>
    </section>
  );
}