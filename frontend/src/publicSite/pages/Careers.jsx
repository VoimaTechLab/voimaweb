import { pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

import {
  careersHero,
  jobs,
} from "@/publicSite/data/careersData";

export default function Careers() {
  return (
    <motion.main
      {...pageTransition}
      className="bg-white pt-[90px]"
    >
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
              {careersHero.eyebrow}
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-tight text-[#BC1D26]">
              {careersHero.title}
            </h1>

            <p className="mt-8 text-lg leading-9 text-black/65">
              {careersHero.description}
            </p>
          </div>

          <div className="mt-20 space-y-6">

            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div
                  key={job.slug}
                  className="
                    group
                    flex flex-col gap-6
                    rounded-[32px]
                    border border-black/5
                    bg-white
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                    md:flex-row
                    md:items-center
                    md:justify-between
                  "
                >
                  <div>
                    <h2 className="text-2xl font-bold text-black">
                      {job.title}
                    </h2>

                    <p className="mt-3 max-w-2xl text-black/60">
                      {job.overview}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">

                      <span className="rounded-full bg-[#BC1D26]/10 px-4 py-2 text-sm text-[#BC1D26]">
                        {job.type}
                      </span>

                      <span className="rounded-full bg-black/5 px-4 py-2 text-sm text-black/60">
                        {job.location}
                      </span>

                      <span className="rounded-full bg-black/5 px-4 py-2 text-sm text-black/60">
                        {job.department}
                      </span>

                    </div>
                  </div>

                  <Link
                    to={`/careers/${job.slug}`}
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-[#BC1D26]
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    View Role
                    <ArrowRight size={18} />
                  </Link>
                </div>
              ))
            ) : (
              <div className="rounded-[40px] border border-dashed border-black/10 py-24 text-center">

                <div className="mx-auto w-fit rounded-full bg-[#BC1D26]/10 p-5">
                  <Briefcase
                    size={32}
                    className="text-[#BC1D26]"
                  />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  No Open Positions
                </h3>

                <p className="mt-4 text-black/60">
                  Check back again soon.
                </p>

              </div>
            )}

          </div>
        </div>
      </section>
    </motion.main>
  );
}