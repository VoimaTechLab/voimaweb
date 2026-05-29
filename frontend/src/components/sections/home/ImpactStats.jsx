// src/components/sections/home/ImpactStats.jsx

import StatCard from "@/components/ui/StatCard/StatCard";
import { STATS } from "@/constants/stats";
import Impact from "../../../assets/ourImpact.png"
import ImpactVideo from "../../../assets/voima_website_prototype.mp4"
import {HeartPulse,Brain,Globe,BookOpenText,} from "lucide-react";

export default function ImpactStats() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#ffff]
        px-6 py-28
      "
      aria-label="Impact statistics"
    >
      {/* Background Glow 
      <div
        className="
          absolute left-[-10%] top-0
          h-[320px] w-[320px]
          rounded-full
          bg-[#BC1D26]/5
          blur-3xl
        "
      />*/}

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div
          className="
            mx-auto max-w-3xl
            text-center
          "
        >
          <span
            className="
              inline-block
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[#BC1D26]/70
            "
          >
            Our Impact
          </span>

          <h2
            className="
              mt-6
              text-4xl font-bold
              leading-tight
              text-[#BC1D26]
              md:text-5xl
            "
          >
            Creating measurable change
            across communities.
          </h2>

          {/*<p
            className="
              mx-auto mt-8
              max-w-2xl
              text-lg leading-9
              text-black/65
            "
          >
            Through sustainable initiatives,
            education, leadership, and
            innovation, Voima Initiative
            continues to empower lives and
            create long-term community impact.
          </p>*/}
        </div>

        {/* Impact Cards */}
          <div
            className="
              mt-20
              grid gap-6
              md:grid-cols-2
              xl:grid-cols-4
            "
          >

            {/* Card 1 */}
            <div
              className="
                rounded-[28px]
                border border-black/5
                bg-white
                p-8
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <div
                className="
                  mb-6
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-[#BC1D26]/10
                  text-[#BC1D26]
                "
              >
                <HeartPulse size={24} strokeWidth={2.2} />
              </div>

              <h3 className="text-2xl font-bold text-[#BC1D26]">
                Patient Support
              </h3>

              <p className="mt-4 leading-8 text-black/65">
                Providing proactive support systems
                and resources for individuals living
                with sickle cell disease.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
                rounded-[28px]
                border border-black/5
                bg-white
                p-8
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <div
                className="
                  mb-6
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-[#F47B3A]/10
                  text-[#F47B3A]
                "
              >
                <Brain size={24} strokeWidth={2.2} />
              </div>

              <h3 className="text-2xl font-bold text-[#BC1D26]">
                AI Health Insights
              </h3>

              <p className="mt-4 leading-8 text-black/65">
                Building intelligent tools that help
                patients better understand symptoms,
                triggers, and early warning signs.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
                rounded-[28px]
                border border-black/5
                bg-white
                p-8
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <div
                className="
                  mb-6
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-[#1D9E75]/10
                  text-[#1D9E75]
                "
              >
                <Globe size={24} strokeWidth={2.2} />
              </div>

              <h3 className="text-2xl font-bold text-[#BC1D26]">
                Community Advocacy
              </h3>

              <p className="mt-4 leading-8 text-black/65">
                Raising awareness and empowering
                communities through education,
                outreach, and public engagement.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="
                rounded-[28px]
                border border-black/5
                bg-white
                p-8
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <div
                className="
                  mb-6
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-black/5
                  text-black
                "
              >
                <BookOpenText size={24} strokeWidth={2.2} />
              </div>

              <h3 className="text-2xl font-bold text-[#BC1D26]">
                Education & Research
              </h3>

              <p className="mt-4 leading-8 text-black/65">
                Supporting healthcare education,
                research initiatives, and improved
                access to accurate medical knowledge.
              </p>
            </div>

          </div>

        {/* Impact Banner */}
        <div className="mt-32">
          <div
            className="
              relative overflow-hidden
              rounded-[48px]
              border border-black/5
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            {/* Overlay */}
            <div
              className="
                absolute inset-0 z-10
                bg-gradient-to-r
                from-black/75
                via-black/40
                to-black/10
              "
            />

            {/* Image 
            <img
              src= { Impact }
              alt="Children and families affected by sickle cell disease"
              className="
                h-[500px] md:h-[650px] lg:h-[720px] w-full
                object-cover
              "
            />*/}
            {/* Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="
                  h-[500px] md:h-[650px] lg:h-[720px] w-full
                  object-cover
                "
              >
                <source src={ImpactVideo} type="video/mp4" />
              </video>

            {/* Content */}
            <div
              className="
                absolute inset-0 z-20
                flex flex-col
                justify-end
                p-8 md:p-16 lg:p-20
              "
            >
              <span
                className="
                  mb-5 w-fit
                  rounded-full
                  bg-white
                  px-4 py-2
                  text-sm font-bold
                  text-[#BC1D26]
                "
              >
                Community Impact
              </span>

              <h3
                className="
                  max-w-3xl
                  text-3xl font-bold
                  leading-tight text-white
                  md:text-5xl
                "
              >
                Every statistic represents
                a real life, a real family,
                and a future worth fighting for.
              </h3>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-lg leading-8
                  text-white/80
                "
              >
                Voima Initiative is committed to
                improving awareness, advocacy,
                early diagnosis, and access to care
                for sickle cell communities across
                Africa and beyond.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}