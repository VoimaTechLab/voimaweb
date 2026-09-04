import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetInvolved } from "../../hooks/useGetInvolved";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function VolunteerSection() {
  const { volunteerData } = useGetInvolved();
  return (
    <section className="px-6 py-24 bg-white border-b-4 border-black">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        <ScrollReveal variant="fade-right">
          <div>
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6 flex items-center gap-2 w-fit">
              <Heart size={16} className="text-white" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                {volunteerData.badge}
              </span>
            </div>

            <h2 className="mt-8 text-4xl sm:text-5xl font-black uppercase leading-none text-black font-heading tracking-tight">
              {volunteerData.title}
            </h2>

            <p className="mt-8 text-base sm:text-lg leading-8 sm:leading-9 text-black/75 font-semibold">
              {volunteerData.description}
            </p>

            <div className="mt-10 space-y-5">
              {volunteerData.opportunities.map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="h-3 w-3 bg-[#BC1D26] border-2 border-black shrink-0" />

                    <p className="text-black/75 font-semibold text-sm sm:text-base">
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
                bg-[#BC1D26] border-2 border-black
                px-8 py-4
                text-sm font-black uppercase tracking-wider
                text-white
                shadow-[6px_6px_0px_rgba(0,0,0,1)]
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
              "
            >
              Become A Volunteer
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-left" delay={0.2}>
          <div className="relative">
            <div
              className="
                overflow-hidden
                border-4
                border-black
                shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
              "
            >
              <img
                src={volunteerData.image}
                alt="Volunteer"
                className="
                  h-[450px] sm:h-[550px] lg:h-[620px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
               loading="lazy" decoding="async"/>
            </div>

            <div
              className="
                absolute
                bottom-8
                left-8
                border-4 border-black
                bg-white
                shadow-[8px_8px_0px_rgba(0,0,0,1)]
                p-6
              "
            >
              <p className="text-3xl sm:text-4xl font-black uppercase text-black font-heading">
                {volunteerData.stats.number}
              </p>

              <p className="mt-2 max-w-[220px] text-xs sm:text-sm leading-6 text-black/75 font-semibold">
                {volunteerData.stats.text}
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}