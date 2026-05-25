// src/components/sections/home/AppShowcaseSection.jsx

import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import AppDemo from "../../../assets/voima_website_prototype.mp4"

const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.905-.09 1.77-.76 3.1-.8 2.3 0 4.01 1.58 4.56 3.22-3.72 2.12-3.02 6.69.48 7.95zm-5.05-5.6c.13-1.61-.87-3.06-2.34-3.24-1.48-.12-2.83.73-3.02 2.26-.19 1.61 1.04 3 2.35 3.03 1.53.03 2.88-.87 3.01-2.05z"/>
  </svg>
)

export default function AppShowcaseSection() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#ffff]
        px-6 py-32
      "
    >
      {/* Background Glow 
      <div
        className="
          absolute right-[-10%] top-0
          h-[420px] w-[420px]
          rounded-full
          bg-[#F47B3A]/10
          blur-3xl
        "
      />*/}

      <div
        className="
          relative mx-auto
          grid max-w-7xl
          items-center gap-24
          lg:grid-cols-2
        "
      >

        {/* LEFT — PHONE MOCKUP */}
        <div className="relative flex justify-center">

          {/* Floating Glow */}
          <div
            className="
              absolute top-10
              h-[420px] w-[420px]
              rounded-full
              bg-[#800000]/10
              blur-3xl
            "
          />

          {/* Phone Frame */}
          <div
            className="
              relative z-10
              h-[720px] w-[360px]
              overflow-hidden
              rounded-[50px]
              border-[10px]
              border-black
              bg-black
              shadow-[0_40px_100px_rgba(0,0,0,0.2)]
            "
          >

            {/* Top Notch */}
            <div
              className="
                absolute left-1/2 top-3
                z-20 h-7 w-30
                -translate-x-1/2
                rounded-full bg-black
              "
            />

            {/* App UI / Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="
                h-full w-full
                object-cover
              "
            >
              <source
                src= { AppDemo }
                type="video/mp4"
              />
            </video>

            {/* image instead of video:
            
            <img
              src="/images/app-ui.png"
              alt="Voima mobile app"
              className="h-full w-full object-cover"
            />
            
            */}
          </div>

          {/* Floating Card */}
          <div
            className="
              absolute -bottom-6 right-0
              z-20 hidden
              rounded-[28px]
              border border-black/5
              bg-white/90
              p-6
              backdrop-blur-xl
              shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              md:block
            "
          >
            <p className="text-sm font-medium text-[#800000]">
              AI Health Assistant
            </p>

            <p className="mt-2 text-sm leading-7 text-black/65">
              Smart symptom tracking,
              reminders, crisis prevention,
              and personalized support.
            </p>
          </div>

        </div>

        {/* RIGHT — CONTENT */}
        <div>

          <span
            className="
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[#F47B3A]
            "
          >
            Our App
          </span>

          <h2
            className="
              mt-6
              text-4xl font-bold
              leading-tight
              text-[#800000]
              md:text-5xl
            "
          >
            AI-powered support for
            individuals living with
            sickle cell disease.
          </h2>

          <div
            className="
              mt-10 space-y-7
              text-lg leading-9
              text-black/70
            "
          >

            <p>
              The Voima mobile app was designed
              to help individuals living with
              sickle cell disease better manage
              their daily health and reduce
              avoidable crises through proactive,
              intelligent support.
            </p>

            <p>
              Using AI-powered insights,
              symptom tracking, medication
              reminders, hydration monitoring,
              and personalized recommendations,
              the app empowers users to make
              informed health decisions earlier.
            </p>

            <p>
              Beyond healthcare tools,
              Voima also connects patients,
              caregivers, and communities
              through education, awareness,
              and accessible support resources.
            </p>

          </div>

          {/* Features */}
          <div
            className="
              mt-12 grid gap-5
              sm:grid-cols-2
            "
          >

            <div
              className="
                rounded-2xl
                border border-black/5
                bg-white
                p-5
              "
            >
              <h3 className="font-semibold text-black">
                Smart Symptom Tracking
              </h3>

              <p className="mt-2 text-sm leading-7 text-black/60">
                Monitor health patterns and
                detect warning signs earlier.
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border border-black/5
                bg-white
                p-5
              "
            >
              <h3 className="font-semibold text-black">
                Personalized AI Insights
              </h3>

              <p className="mt-2 text-sm leading-7 text-black/60">
                Receive tailored support based
                on lifestyle and symptoms.
              </p>
            </div>

          </div>

          {/* Download Buttons */}
          <div
            className="
              mt-12 flex
              flex-wrap gap-5
            "
          >

            <Link
              to="/"
              className="
                inline-flex items-center gap-3
                rounded-full
                bg-[#800000]
                px-7 py-4
                font-medium text-white
                transition-all duration-300
                hover:bg-[#5f0000]
              "
            >
              <AppleIcon />
              App Store
            </Link>

            <Link
              to="/"
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-black/10
                bg-white
                px-7 py-4
                font-medium text-black
                transition-all duration-300
                hover:bg-black/5
              "
            >
              <Play size={18} />
              Google Play
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}