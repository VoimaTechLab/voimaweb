import { Link } from "react-router-dom";

export default function PartnerSection() {
  return (
    <section className="px-6 py-28">

      <div
        className="
          mx-auto
          max-w-7xl
          rounded-[48px]
          bg-[#fafafa]
          border border-[#BC1D26]/20
          p-16
          text-center
        "
      >
        <span
          className="
            rounded-full
            bg-[#BC1D26]/10
            px-4
            py-2
            text-sm
            text-[#BC1D26]
          "
        >
          Partnerships
        </span>

        <h2 className="mt-8 text-5xl font-bold text-[#BC1D26]">
          Partner With Voima
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-black/65">
          We collaborate with healthcare institutions,
          NGOs, universities, technology companies,
          foundations and community leaders.
        </p>

        <Link
          to="/contact"
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#BC1D26]
            px-8
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Become A Partner
        </Link>

      </div>

    </section>
  );
}