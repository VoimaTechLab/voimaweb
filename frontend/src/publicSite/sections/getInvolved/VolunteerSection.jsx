import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";


import { useGetInvolved } from "../../hooks/useGetInvolved";

export default function VolunteerSection() {
  const { volunteerData } = useGetInvolved();
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        <div>

          <div className="inline-flex items-center gap-3 rounded-full bg-[#BC1D26]/10 px-5 py-3">
            <Heart size={18} className="text-[#BC1D26]" />

            <span className="text-sm font-semibold text-[#BC1D26]">
              {volunteerData.badge}
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-[#BC1D26]">
            {volunteerData.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-black/65">
            {volunteerData.description}
          </p>

          <div className="mt-10 space-y-5">

            {volunteerData.opportunities.map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="h-3 w-3 rounded-full bg-[#BC1D26]" />

                  <p className="text-black/70">
                    {item}
                  </p>
                </div>
              )
            )}

          </div>

          <Link
            to="/careers/general-volunteer"
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#BC1D26]
              px-7
              py-4
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Become A Volunteer

            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="relative">

          <div
            className="
              overflow-hidden
              rounded-[40px]
              border
              border-black/5
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            "
          >
            <img
              src={volunteerData.image}
              alt="Volunteer"
              className="
                h-[620px]
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>

          <div
            className="
              absolute
              bottom-8
              left-8
              rounded-[28px]
              border
              border-white/20
              bg-white/80
              p-6
              backdrop-blur-xl
            "
          >
            <p className="text-4xl font-bold text-[#BC1D26]">
              {volunteerData.stats.number}
            </p>

            <p className="mt-2 max-w-[220px] text-sm leading-7 text-black/60">
              {volunteerData.stats.text}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}