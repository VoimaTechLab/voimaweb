import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useCareerPage } from "@/publicSite/hooks/useCareerPage";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Careers() {
  const { page, loading } = useCareerPage();

  if (loading) return null;

  const jobs = page?.roles || [];
  return (
    <main className="bg-white pt-[90px]">
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-4xl">
            <ScrollReveal variant="fade-down">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
                {page?.eyebrow}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#BC1D26] font-heading tracking-tight">
                {page?.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-black/75 font-semibold">
                {page?.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-12 sm:mt-20 space-y-6">
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <ScrollReveal key={job._id} variant="fade-up" delay={0.1 * index}>
                  <div
                    className="
                      group
                      flex flex-col gap-6
                      border-4 border-black
                      bg-white
                      p-6 sm:p-8
                      shadow-[8px_8px_0px_rgba(0,0,0,1)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[12px_12px_0px_rgba(188,29,38,1)]
                      md:flex-row
                      md:items-center
                      md:justify-between
                    "
                  >
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black uppercase text-black font-heading">
                        {job.title}
                      </h2>

                      <p className="mt-3 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-black/75 font-semibold">
                        {job.overview}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        <span className="border-2 border-black bg-[#BC1D26] px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                          {job.type}
                        </span>

                        <span className="border-2 border-black bg-white px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                          {job.location}
                        </span>

                        <span className="border-2 border-black bg-white px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                          {job.department}
                        </span>
                      </div>
                    </div>

                    <Link
                      to={`/careers/${job.slug.current || job.slug}`}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-3
                        border-2 border-black
                        bg-[#BC1D26]
                        px-6
                        py-3.5
                        text-xs sm:text-sm
                        font-black uppercase tracking-wider
                        text-white
                        shadow-[4px_4px_0px_rgba(0,0,0,1)]
                        transition-all duration-200
                        hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                        w-full md:w-auto
                      "
                    >
                      View Role
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </ScrollReveal>
              ))
            ) : (
              <div className="border-4 border-black bg-white p-10 text-center shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <div className="mx-auto w-fit border-2 border-black bg-[#BC1D26] p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <Briefcase
                    size={28}
                    className="text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-black uppercase text-black font-heading">
                  No Open Positions
                </h3>

                <p className="mt-2 text-base font-semibold text-black/75">
                  Check back again soon.
                </p>
              </div>
            )}
          </div>

          {page?.members?.length > 0 && (
            <section className="mt-20 sm:mt-32">
              <ScrollReveal variant="fade-up">
                <div className="max-w-3xl">
                  <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#BC1D26]">
                    {page.membersEyebrow}
                  </p>

                  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-[#BC1D26] font-heading tracking-tight">
                    {page.membersTitle}
                  </h2>

                  <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-black/75 font-semibold">
                    {page.membersDescription}
                  </p>
                </div>
              </ScrollReveal>

              <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {page.members.map((member, index) => (
                  <ScrollReveal key={member._id} variant="fade-up" delay={0.1 * (index % 3)}>
                    <article
                      className="
                        group
                        relative
                        overflow-hidden
                        h-full
                        border-2
                        border-black
                        bg-white
                        shadow-[6px_6px_0px_rgba(0,0,0,1)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-[9px_9px_0px_rgba(188,29,38,1)]
                      "
                    >
                      <div className="relative overflow-hidden border-b-2 border-black bg-black">
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
                            from-black/40
                            via-transparent
                            to-transparent
                          "
                        />
                      </div>

                      <div className="relative flex h-full flex-col p-6 sm:p-7">
                        <span
                          className="
                            inline-flex
                            w-fit
                            border-2
                            border-black
                            bg-[#BC1D26]
                            px-3.5
                            py-1.5
                            text-xs
                            font-black
                            uppercase
                            tracking-wider
                            text-white
                            shadow-[2px_2px_0px_rgba(0,0,0,1)]
                          "
                        >
                          {member.role}
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase text-black font-heading">
                          {member.name}
                        </h3>

                        <div className="mt-4 flex flex-1 flex-col">
                          <p className="text-sm font-semibold leading-7 text-black/70">
                            {member.bio}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-3">
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:bg-[#BC1D26] hover:text-white"
                              >
                                LinkedIn
                              </a>
                            )}

                            {member.github && (
                              <a
                                href={member.github}
                                target="_blank"
                                rel="noreferrer"
                                className="border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:bg-[#BC1D26] hover:text-white"
                              >
                                GitHub
                              </a>
                            )}

                            {member.twitter && (
                              <a
                                href={member.twitter}
                                target="_blank"
                                rel="noreferrer"
                                className="border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:bg-[#BC1D26] hover:text-white"
                              >
                                X
                              </a>
                            )}

                            {member.website && (
                              <a
                                href={member.website}
                                target="_blank"
                                rel="noreferrer"
                                className="border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:bg-[#BC1D26] hover:text-white"
                              >
                                Website
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
