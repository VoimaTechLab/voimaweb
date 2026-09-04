import { appData } from "@/publicSite/data/aboutData";
import { Link } from "react-router-dom";

export default function AppSection() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        <div>
          <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
              {appData.eyebrow}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none text-black font-heading tracking-tight">
            {appData.title}
          </h2>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-black/75 font-semibold">
            {appData.description}
          </p>

          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5">
            {appData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="h-3 w-3 shrink-0 rounded-full bg-[#BC1D26]" />

                <p className="text-sm sm:text-base font-semibold text-black/80">{feature}</p>
              </div>
            ))}
          </div>

          <Link
            to={appData.cta.link}
            className="
            mt-8 sm:mt-12 inline-block
             border-2 border-black
             bg-[#BC1D26]
             px-6 sm:px-8 py-3.5 sm:py-4
             text-xs sm:text-sm
             font-black uppercase tracking-wider
             text-white
             shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)]
             transition-all 
             duration-200
            hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
          >
            {appData.cta.text}
          </Link>
        </div>

        {/**PHONE SHOWCASE */}
        <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[700px] mt-10 lg:mt-0">

        {/* Background Glow */}
        <div className="absolute h-[320px] w-[320px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#BC1D26]/5 blur-3xl" />

        {/* Ring 1 */}
        <div className="absolute h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full border border-[#BC1D26]/10" />

        {/* Ring 2 */}
        <div className="absolute h-[220px] w-[220px] sm:h-[380px] sm:w-[380px] rounded-full border border-[#BC1D26]/10" />

        <div
            className="
            absolute
            left-2 sm:left-0
            top-4 sm:top-20
            z-20
            border-2 border-black
            bg-white
            p-3 sm:p-5
            shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)]
            "
        >
            <p className="text-xl sm:text-3xl font-black text-[#BC1D26]">
            AI
            </p>

            <p className="mt-1 text-xs sm:text-sm font-semibold text-black/75">
            Smart Health Support
            </p>
        </div>

        <div
            className="
            absolute
            right-2 sm:right-0
            bottom-4 sm:bottom-20
            z-20
            border-2 border-black
            bg-white
            p-3 sm:p-5
            shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)]
            "
        >
            <p className="text-xl sm:text-3xl font-black text-[#BC1D26]">
            24/7
            </p>

            <p className="mt-1 text-xs sm:text-sm font-semibold text-black/75">
            Personalized Care
            </p>
        </div>

        {/* Phone */}
        <div
            className="
            relative
            z-10
            h-[500px] w-[250px]
            sm:h-[680px] sm:w-[330px]
            rounded-[38px] sm:rounded-[52px]
            border-[8px] sm:border-[10px]
            border-black
            bg-black
            shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            "
        >
            {/* Notch */}
            <div
            className="
                absolute
                left-1/2
                top-2 sm:top-3
                z-20
                h-5 sm:h-7
                w-24 sm:w-32
                -translate-x-1/2
                rounded-full
                bg-black
            "
            />

            {/* Screen */}
            <div className="h-full overflow-hidden rounded-[28px] sm:rounded-[42px]">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
            >
                <source
                src={appData.video}
                type="video/mp4"
                />
            </video>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}