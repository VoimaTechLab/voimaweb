import { appData } from "@/publicSite/data/aboutData";
import { Link } from "react-router-dom";

export default function AppSection() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]/70">
            {appData.eyebrow}
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#BC1D26]">
            {appData.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-black/65">
            {appData.description}
          </p>

          <div className="mt-10 grid gap-5">
            {appData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-[#BC1D26]" />

                <p className="text-black/70">{feature}</p>
              </div>
            ))}
          </div>

          <Link
            to={appData.cta.link}
            className="
            mt-12 inline-block
             rounded-full
             bg-[#BC1D26]
             px-7 py-4
             text-sm
             font-semibold
             text-white transition-all 
             duration-300
            hover:scale-[1.02]"
          >
            {appData.cta.text}
          </Link>
        </div>

        {/**PHONE SHOWCASE */}
        <div className="relative flex items-center justify-center min-h-[700px]">

        {/* Background Glow */}
        <div className="absolute h-[600px] w-[600px] rounded-full bg-[#BC1D26]/5 blur-3xl" />

        {/* Ring 1 */}
        <div className="absolute h-[500px] w-[500px] rounded-full border border-[#BC1D26]/10" />

        {/* Ring 2 */}
        <div className="absolute h-[380px] w-[380px] rounded-full border border-[#BC1D26]/10" />

        {/* Floating Card */}
        <div
            className="
            absolute
            left-0
            top-20
            z-20
            rounded-[28px]
            border border-black/5
            bg-white/80
            p-5
            backdrop-blur-xl
            shadow-xl
            "
        >
            <p className="text-3xl font-bold text-[#BC1D26]">
            AI
            </p>

            <p className="mt-1 text-sm text-black/60">
            Smart Health Support
            </p>
        </div>

        {/* Floating Card */}
        <div
            className="
            absolute
            right-0
            bottom-20
            z-20
            rounded-[28px]
            border border-black/5
            bg-white/80
            p-5
            backdrop-blur-xl
            shadow-xl
            "
        >
            <p className="text-3xl font-bold text-[#BC1D26]">
            24/7
            </p>

            <p className="mt-1 text-sm text-black/60">
            Personalized Care
            </p>
        </div>

        {/* Phone */}
        <div
            className="
            relative
            z-10
            h-[680px]
            w-[330px]
            rounded-[52px]
            border-[10px]
            border-black
            bg-black
            shadow-[0_50px_120px_rgba(0,0,0,0.18)]
            "
        >
            {/* Notch */}
            <div
            className="
                absolute
                left-1/2
                top-3
                z-20
                h-7
                w-32
                -translate-x-1/2
                rounded-full
                bg-black
            "
            />

            {/* Screen */}
            <div className="h-full overflow-hidden rounded-[42px]">
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