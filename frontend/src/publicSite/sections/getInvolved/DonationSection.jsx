import { ArrowRight, CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";

import {
    donationData,
} from "@/publicSite/data/getInvolvedData";

export default function DonationSection() {
  return (
    <section className="px-6 py-28">

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[48px]
          bg-[#800000]
          px-10
          py-20
          text-white
          md:px-16
        "
      >
        <div className="absolute right-[-80px] top-[-80px] h-[240px] w-[240px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 grid gap-16 lg:grid-cols-2">

          <div>

            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3">
              <CircleDollarSign size={18} />

              <span className="text-sm font-semibold">
                {donationData.badge}
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-[#fff]">
              {donationData.title}
            </h2>

            <p className="mt-8 text-lg leading-9 text-white/70">
              {donationData.description}
            </p>

            <Link
              to="/donate"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#BC1D26]
                px-8
                py-5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Donate Now

              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {donationData.stats.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/10
                  p-8
                  backdrop-blur-xl
                "
              >
                <h3 className="text-4xl font-bold text-[#ffff]">
                  {item.number}
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}