import { ArrowRight, CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetInvolved } from "../../hooks/useGetInvolved";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function DonationSection() {
  const { donationData } = useGetInvolved();
  return (
    <section className="px-6 py-28 bg-[#fafafa] border-b-4 border-black">
      <ScrollReveal variant="scale-in">
        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            border-4 border-black
            shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
            bg-[#BC1D26]
            px-8
            py-16
            text-white
            md:px-16 md:py-20
          "
        >
          <div className="absolute right-[-80px] top-[-80px] h-[240px] w-[240px] rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <ScrollReveal variant="fade-down" delay={0.1}>
                <div className="inline-block bg-white border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] mb-6 flex items-center gap-2 w-fit">
                  <CircleDollarSign size={16} className="text-[#BC1D26]" />
                  <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-[#BC1D26]">
                    {donationData.badge}
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.2}>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-white font-heading tracking-tight">
                  {donationData.title}
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.3}>
                <p className="mt-6 text-base sm:text-lg leading-8 sm:leading-9 text-white/90 font-semibold">
                  {donationData.description}
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.4}>
                <Link
                  to="/donate"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    bg-white border-2 border-black
                    px-8 py-4
                    text-sm font-black uppercase tracking-wider
                    text-[#BC1D26]
                    shadow-[6px_6px_0px_rgba(0,0,0,1)]
                    transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
                  "
                >
                  Donate Now
                  <ArrowRight size={18} />
                </Link>
              </ScrollReveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {donationData.stats.map((item, index) => (
                <ScrollReveal key={index} variant="fade-up" delay={0.15 * index}>
                  <div
                    className="
                      border-2
                      border-white
                      bg-white/10
                      p-6 sm:p-8
                      shadow-[4px_4px_0px_rgba(0,0,0,0.2)]
                    "
                  >
                    <h3 className="text-3xl sm:text-4xl font-black uppercase text-white font-heading">
                      {item.number}
                    </h3>

                    <p className="mt-3 leading-7 text-white/90 font-semibold text-sm sm:text-base">
                      {item.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}