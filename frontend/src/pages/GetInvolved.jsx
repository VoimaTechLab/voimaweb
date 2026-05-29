import { motion } from "framer-motion";
import {
  pageTransition,
  fadeUp,
} from "../motion/variants";

import {
  Heart,
  ArrowRight,
  CircleDollarSign,
  Briefcase,
  Sparkles,
  ShieldCheck,
  Globe2,
  HeartHandshake,
} from "lucide-react";

import Banner from "../assets/PC_White1.png"
import Story from "../assets/ourStory.jpg"

import { Link } from "react-router-dom";

/*
  CMS READY
  Replace jobs with Sanity later.

  const jobs = await fetchJobs()
*/

const jobs = [
  {
    slug: "project-manager",
    title: "Project Manager",
    type: "Internship",
    location: "Remote",
  },

  {
    slug: "community-programs-manager",
    title: "Community Programs Manager",
    type: "Full Time",
    location: "Accra, Ghana",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Compassion",
  },

  {
    icon: Sparkles,
    title: "Innovation",
  },

  {
    icon: ShieldCheck,
    title: "Integrity",
  },

  {
    icon: Globe2,
    title: "Community",
  },
];

export default function GetInvolved() {
  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden bg-[#ffffff] pt-[90px]"
    >
      {/* HERO */}
      <section className="relative px-6 py-28">
        
       {/* <div className="absolute left-[-10%] top-0 h-[320px] w-[320px] rounded-full bg-[#F47B3A]/10 blur-3xl"></div>*/}

        <div className="relative mx-auto max-w-7xl">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
              Join The Movement
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-primary-800 md:text-7xl">
              Help us build healthier futures through advocacy, technology & community impact.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/65">
              Every volunteer, donor, partner, and supporter
              helps us move closer to a future where chronic
              conditions no longer limit quality healthcare access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-[#F47B3A]/10 px-5 py-3">
              <Heart size={18} className="text-[#F47B3A]" />

              <span className="text-sm font-semibold text-[#F47B3A]">
                Volunteer Opportunities
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-black">
              Use your skills to create meaningful community impact.
            </h2>

            <p className="mt-8 text-lg leading-9 text-black/65">
              We welcome passionate individuals from healthcare,
              technology, education, media, outreach, and design
              backgrounds to help expand our mission across communities.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Community outreach & awareness campaigns",
                "Healthcare education initiatives",
                "Creative, design & media support",
                "Technology & digital innovation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="h-3 w-3 rounded-full bg-[#F47B3A]"></div>

                  <p className="text-black/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/get-involved/volunteer"
              className="
                mt-10 inline-flex items-center gap-3
                rounded-full bg-[#F47B3A]
                px-7 py-4 text-sm font-semibold
                text-white transition
                hover:scale-[1.02]
              "
            >
              Become A Volunteer
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="relative">
            
            <div
              className="
                overflow-hidden rounded-[40px]
                border border-black/5
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              "
            >
              <img
                src= { Story }
                alt="Volunteer"
                className="h-[620px] w-full object-cover"
              />
            </div>

            <div
              className="
                absolute bottom-8 left-8
                rounded-[28px]
                border border-white/20
                bg-white/80 p-6
                backdrop-blur-xl
              "
            >
              <p className="text-4xl font-bold text-[#800000] font-display">
                500+
              </p>

              <p className="mt-2 max-w-[220px] text-sm leading-7 text-black/60">
                Volunteers and supporters helping us expand our reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px]">
          <img
            src= { Banner }
            alt="Community"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </section>

      {/* DONATION */}
      <section className="px-6 py-28">
        <div
          className="
            relative mx-auto max-w-7xl
            overflow-hidden rounded-[48px]
            bg-[#800000] px-10 py-20 text-white
            md:px-16
          "
        >
          
          <div className="absolute right-[-80px] top-[-80px] h-[240px] w-[240px] rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 grid gap-16 lg:grid-cols-2">
            
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3">
                <CircleDollarSign size={18} />

                <span className="text-sm font-semibold">
                  Support Our Mission
                </span>
              </div>

              <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
                Every donation creates measurable impact.
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/70">
                Your support funds education, outreach,
                advocacy programs, digital healthcare tools,
                research initiatives, and patient support systems.
              </p>

              <Link
                to="/donate"
                className="
                  mt-10 inline-flex items-center gap-3
                  rounded-full bg-[#F47B3A]
                  px-8 py-5 text-sm font-semibold
                  text-white transition
                  hover:scale-[1.02]
                "
              >
                Donate Now
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* RIGHT */}
            <div className="grid gap-6 md:grid-cols-2">
              
              {[
                {
                  number: "10K+",
                  label: "Communities Reached",
                },

                {
                  number: "200+",
                  label: "Workshops Organized",
                },

                {
                  number: "24/7",
                  label: "Digital Health Access",
                },

                {
                  number: "100%",
                  label: "Community Focused",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-[30px]
                    border border-white/10
                    bg-white/10 p-8
                    backdrop-blur-xl
                  "
                >
                  <h3 className="text-4xl font-bold text-white">
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

      {/* CAREERS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
              Careers
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-black">
              Build technology & programs that improve lives.
            </h2>
          </div>

          <div className="mt-16 space-y-5">
            
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <div
                  key={index}
                  className="
                    flex flex-col items-start justify-between gap-6
                    rounded-[32px]
                    border border-black/5
                    bg-white p-8
                    transition hover:-translate-y-1
                    hover:shadow-[0_15px_60px_rgba(0,0,0,0.06)]
                    md:flex-row md:items-center
                  "
                >
                  <div>
                    <h3 className="text-2xl font-bold text-black">
                      {job.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-3">
                      
                      <span
                        className="
                          rounded-full bg-[#F47B3A]/10
                          px-4 py-2 text-sm font-medium
                          text-[#F47B3A]
                        "
                      >
                        {job.type}
                      </span>

                      <span
                        className="
                          rounded-full bg-black/5
                          px-4 py-2 text-sm font-medium
                          text-black/60
                        "
                      >
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/careers/${job.slug}`}
                    className="
                      inline-flex items-center gap-3
                      rounded-full border border-black/10
                      px-6 py-4 text-sm font-semibold
                      text-black transition
                      hover:bg-primary-800 hover:text-white
                    "
                  >
                    View Role
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))
            ) : (
              <div
                className="
                  rounded-[36px]
                  border border-dashed border-black/10
                  bg-white p-14 text-center
                "
              >
                <Briefcase
                  size={42}
                  className="mx-auto text-black/25"
                />

                <h3 className="mt-6 text-3xl font-bold text-black">
                  No Open Positions Right Now
                </h3>

                <p className="mx-auto mt-5 max-w-xl leading-8 text-black/60">
                  We currently do not have active job openings available.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
              What We Value
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-primary-800">
              Principles that shape our culture & mission.
            </h2>
          </div>

          <div className="mt-14 flex flex-wrap gap-5">
            
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="
                    flex items-center gap-4
                    rounded-2xl border border-black/5
                    bg-white px-6 py-5
                    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  "
                >
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-xl bg-[#F47B3A]/10
                    "
                  >
                    <Icon
                      size={20}
                      className="text-[#F47B3A]"
                    />
                  </div>

                  <p className="font-semibold text-black">
                    {value.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.main>
  );
}