// src/components/sections/home/AppShowcaseSection.jsx

import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

import AppDemo from "../../../assets/voima_website_prototype.mp4";

const AppleIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.905-.09 1.77-.76 3.1-.8 2.3 0 4.01 1.58 4.56 3.22-3.72 2.12-3.02 6.69.48 7.95zm-5.05-5.6c.13-1.61-.87-3.06-2.34-3.24-1.48-.12-2.83.73-3.02 2.26-.19 1.61 1.04 3 2.35 3.03 1.53.03 2.88-.87 3.01-2.05z" />
  </svg>
);

export default function AppShowcaseSection() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#BC1D26]
        px-6 py-32
      "
    >

      {/* Glow 
      <div
        className="
          absolute right-[-10%] top-0
          h-[420px] w-[420px]
          rounded-full
          bg-[#BC1D26]/20
          blur-3xl
        "
      />*/}

      <div
        className="
          relative mx-auto
          grid max-w-7xl
          items-center gap-20
          lg:grid-cols-2
        "
      >

        {/* LEFT — CONTENT */}
        <div className="max-w-xl">

          <span
            className="
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[#fff]
            "
          >
            Voima App
          </span>

          <h2
            className="
              mt-6
              text-5xl font-bold
              leading-tight
              text-white
              md:text-5xl
            "
          >
            Smarter support for people
            living with sickle cell disease.
          </h2>

          <p
            className="
              mt-8
              text-lg leading-9
              text-white/90
            "
          >
            Designed with empathy and powered by AI, the
            Voima app combines intelligent health tracking,
            reminders, and proactive insights to help users
            better understand their bodies, reduce avoidable
            crises, and feel more in control. Voima transforms
            healthcare support into a more personal, accessible,
            and empowering experience for patients and families.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              mt-10
              flex flex-wrap gap-4
            "
          >

            <Link
              to="/app"
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-[#fff]
                px-7 py-4
                text-sm font-semibold
                text-[#BC1D26]
                shadow-lg shadow-[#BC1D26]/20
                transition-all duration-300
                hover:bg-[#fff]/90
              "
            >
              Explore The App
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/10
                bg-white/5
                px-7 py-4
                text-sm font-semibold
                text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white/10
              "
            >
              Learn More
            </Link>

          </div>

          {/* Download Buttons */}
          <div
            className="
              mt-8
              flex flex-wrap gap-5
            "
          >

            <Link
              to="/"
              className="
                inline-flex items-center gap-3
                rounded-5xl
                bg-white
                px-6 py-4
                font-medium text-black
                transition-all duration-300
                hover:scale-[1.03]
              "
            >
              <AppleIcon />
              App Store
            </Link>

            <Link
              to="/"
              className="
                inline-flex items-center gap-3
                rounded-5xl
                border border-white/10
                bg-white/5
                px-6 py-4
                font-medium text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white/10
              "
            >
              <Play size={18} />
              Google Play
            </Link>

          </div>

        </div>

        {/* RIGHT — PHONE MOCKUP */}
        <div className="relative flex justify-center items-center">

          {/* Rings */}
          <div className="absolute inset-0 flex items-center justify-center z-0">

            <div
              className="
                absolute
                h-[520px] w-[520px]
                rounded-full
                border border-white/40
              "
            />

            <div
              className="
                absolute
                h-[420px] w-[420px]
                rounded-full
                border border-white/40
              "
            />

            <div
              className="
                absolute
                h-[320px] w-[320px]
                rounded-full
                border border-white/40
              "
            />

          </div>

          {/* Phone */}
          <div
            className="
              relative z-10
              h-[680px] w-[340px]
              overflow-hidden
              rounded-[50px]
              border-[10px]
              border-black
              bg-black
            "
          >

            {/* Notch */}
            <div
              className="
                absolute left-1/2 top-3
                z-20 h-7 w-32
                -translate-x-1/2
                rounded-full bg-black
              "
            />

            {/* Video */}
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
                src={AppDemo}
                type="video/mp4"
              />
            </video>

          </div>

          {/* Floating Card */}
          <div
            className="
              absolute -bottom-6 right-0
              z-20 hidden
              rounded-[38px]
              border border-white/10
              bg-white
              p-6
              backdrop-blur-xl
              shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              md:block
            "
          >
            <p className="text-sm font-semibold text-[#BC1D26]">
              AI Health Assistant
            </p>

            <p
              className="
                mt-2
                text-sm leading-7
                text-[#BC1D26]/70
              "
            >
              Smart symptom tracking,
              reminders, crisis prevention,
              and personalized support.
            </p>
          </div>


        </div>

      </div>

    </section>
  );
}