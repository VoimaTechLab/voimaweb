import { useWaitlist } from "../../hooks/useWaitlist";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Hero() {
  const { waitlistData, waitlistAvatars } = useWaitlist();
  return (
    <section className="px-6 pt-40 pb-20 bg-[#fafafa] border-b-4 border-black">
      <div className="mx-auto max-w-4xl text-center">

        <ScrollReveal variant="fade-down">
          <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
              {waitlistData.eyebrow}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.15}>
          <h1
            className="
              text-4xl
              font-black
              uppercase
              leading-none
              sm:text-5xl
              lg:text-7xl
              text-black
              font-heading
              tracking-tight
            "
          >
            {waitlistData.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.25}>
          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-base
              sm:text-lg
              leading-8
              sm:leading-9
              text-black/75
              font-semibold
            "
          >
            {waitlistData.description}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.35}>
          <div className="mt-12 flex flex-col items-center">

            <div className="flex items-center">
              {waitlistAvatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="Community member"
                  className="
                    h-12
                    w-12
                    rounded-full
                    border-2
                    border-white
                    object-cover
                    shadow-md
                  "
                  style={{
                    marginLeft: index === 0 ? 0 : "-12px",
                  }}
                 loading="lazy" decoding="async"/>
              ))}

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-[#BC1D26]
                  text-sm
                  font-bold
                  text-white
                  shadow-md
                "
              >
                +
              </div>
            </div>

            <div
              className="
                flex
                flex-col
                items-center
                gap-2 sm:gap-4
                sm:flex-row
                sm:justify-center
              "
            >
              <p className="mt-4 text-xl font-black uppercase text-black font-heading">
                {waitlistData.stats.registered}+
              </p>

              <p className="sm:mt-4 text-black/75 font-semibold text-sm sm:text-base">
                {waitlistData.stats.label}
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}