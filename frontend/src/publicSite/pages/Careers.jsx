import { pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

import { useCareerPage } from "@/publicSite/hooks/useCareerPage";

export default function Careers() {
  const { page, loading } = useCareerPage();

  if (loading) return null;

  const jobs = page?.roles || [];
  return (
    <motion.main
      {...pageTransition}
      className="bg-white pt-[90px]"
    >
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
              {page?.eyebrow}
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-tight text-[#BC1D26]">
              {page?.title}
            </h1>

            <p className="mt-8 text-lg leading-9 text-black/65">
              {page?.description}
            </p>
          </div>

          <div className="mt-20 space-y-6">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div
                  key={job._id}
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
                    to={`/careers/${job.slug.current || job.slug}`}
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

          {page?.members?.length > 0 && (
            <section className="mt-32">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
                  {page.membersEyebrow}
                </p>

                <h2 className="mt-6 text-5xl font-bold leading-tight text-[#BC1D26]">
                  {page.membersTitle}
                </h2>

                <p className="mt-8 text-lg leading-9 text-black/65">
                  {page.membersDescription}
                </p>
              </div>

              <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {page.members.map((member) => (
                  <article
                    key={member._id}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[36px]
                      h-auto
                      border
                      border-black/5
                      bg-white
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-[#BC1D26]/20
                      hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                    "
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#BC1D26]/10 blur-3xl" />
                    </div>

                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="
                          aspect-[5/5]
                          w-full
                          object-cover
                          object-center
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/80
                          via-black/10
                          to-transparent
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />
                    </div>

                    <div className="relative p-7">
                      <span
                        className="
                          inline-flex
                          rounded-full
                          bg-[#BC1D26]/10
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-[#BC1D26]
                        "
                      >
                        {member.role}
                      </span>

                      <h3 className="mt-4 text-2xl font-bold text-[#BC1D26]">
                        {member.name}
                      </h3>

                      <div
                        className="
                        mt-5
                        "
                      >
                        <p className="text-sm leading-7 text-black/60">
                          {member.bio}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full border border-black/10 px-4 py-2 text-sm hover:border-[#BC1D26] hover:text-[#BC1D26]"
                            >
                              LinkedIn
                            </a>
                          )}

                          {member.github && (
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full border border-black/10 px-4 py-2 text-sm hover:border-[#BC1D26] hover:text-[#BC1D26]"
                            >
                              GitHub
                            </a>
                          )}

                          {member.twitter && (
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full border border-black/10 px-4 py-2 text-sm hover:border-[#BC1D26] hover:text-[#BC1D26]"
                            >
                              X
                            </a>
                          )}

                          {member.website && (
                            <a
                              href={member.website}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full border border-black/10 px-4 py-2 text-sm hover:border-[#BC1D26] hover:text-[#BC1D26]"
                            >
                              Website
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
        </section>
    </motion.main>
  );
}

