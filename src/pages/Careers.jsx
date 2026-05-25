// src/pages/Careers.jsx

import { motion } from "framer-motion";
import { pageTransition } from "../motion/variants";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";

const jobs = [
  {
    title: "Project Manager",
    slug: "project-manager",
    location: "Remote",
    type: "Internship",
  },

  {
    title: "Community Outreach Coordinator",
    slug: "community-outreach-coordinator",
    location: "Accra, Ghana",
    type: "Full Time",
  },
];

export default function Careers() {
  return (
    <motion.main
      {...pageTransition}
      className="bg-[#fff] pt-[90px]"
    >
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
              Careers
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-tight text-black">
              Help us build the future of accessible healthcare.
            </h1>

            <p className="mt-8 text-lg leading-9 text-black/65">
              Join a mission-driven team building
              technology, research, and community
              initiatives for underserved populations.
            </p>
          </div>

          {/* JOB LIST */}
          <div className="mt-20 space-y-6">

            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <div
                  key={index}
                  className="
                    flex flex-col gap-6 rounded-[32px]
                    border border-black/5 bg-white
                    p-8 transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                    md:flex-row md:items-center
                    md:justify-between
                  "
                >
                  <div>
                    <h2 className="text-2xl font-bold text-black">
                      {job.title}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-3">
                      <span className="rounded-full bg-black/5 px-4 py-2 text-sm text-black/60">
                        {job.location}
                      </span>

                      <span className="rounded-full bg-[#F47B3A]/10 px-4 py-2 text-sm font-medium text-[#F47B3A]">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/careers/${job.slug}`}
                    className="
                      inline-flex items-center gap-3
                      rounded-full bg-[#F47B3A]
                      px-6 py-4 text-sm font-semibold
                      text-white transition
                      hover:scale-[1.02]
                    "
                  >
                    View Role
                    <ArrowRight size={18} />
                  </Link>
                </div>
              ))
            ) : (
              <div
                className="
                  flex flex-col items-center justify-center
                  rounded-[40px] border border-dashed
                  border-black/10 bg-white py-24 text-center
                "
              >
                <div className="rounded-full bg-[#F47B3A]/10 p-5">
                  <Briefcase
                    size={32}
                    className="text-[#F47B3A]"
                  />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-black">
                  No Open Positions
                </h3>

                <p className="mt-4 max-w-lg text-black/60">
                  We currently do not have any open
                  opportunities, but we're always
                  growing. Check back again soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.main>
  );
}