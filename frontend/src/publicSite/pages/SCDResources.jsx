import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useSCDResources } from "@/publicSite/hooks/useSCDResources";
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
} from "lucide-react";

export default function SCDResources() {
  const data = useSCDResources();

  return (
    <main className="min-h-screen bg-white pt-[90px]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal variant="fade-up">
            <div className="max-w-4xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
                {data.eyebrow}
              </p>

              <h1 className="mt-6 text-4xl font-black uppercase tracking-tight text-[#BC1D26] sm:text-5xl md:text-6xl">
                {data.title}
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-black/70 sm:text-lg sm:leading-9">
                {data.description}
              </p>

            </div>
          </ScrollReveal>

          <div className="mt-16 space-y-12">

            {data.categories?.map((category, categoryIndex) => (
              <ScrollReveal
                key={categoryIndex}
                variant="fade-up"
                delay={0.05}
              >
                <section>

                  <div className="max-w-3xl">

                    <h2 className="text-2xl font-black uppercase tracking-tight text-[#BC1D26] sm:text-3xl">
                      {category.title}
                    </h2>

                    {category.description && (
                      <p className="mt-4 text-base leading-8 text-black/65 sm:text-lg">
                        {category.description}
                      </p>
                    )}

                  </div>

                  {category.resources?.length > 0 ? (
                    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                      {category.resources.map((resource, resourceIndex) => (
                        <a
                          key={resourceIndex}
                          href={resource.url}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            group
                            relative
                            flex
                            min-h-[230px]
                            flex-col
                            rounded-[30px]
                            border
                            border-black/5
                            bg-white
                            p-7
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            hover:border-[#BC1D26]/20
                            hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
                          "
                        >

                          <div className="flex items-start justify-between">

                            <div className="rounded-full bg-[#BC1D26]/10 p-3">
                              <BookOpen
                                size={20}
                                className="text-[#BC1D26]"
                              />
                            </div>

                            <ArrowUpRight
                              size={20}
                              className="text-black/30 transition group-hover:text-[#BC1D26]"
                            />

                          </div>

                          {resource.type && (
                            <span className="mt-6 w-fit rounded-full bg-black/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-black/50">
                              {resource.type}
                            </span>
                          )}

                          <h3 className="mt-5 text-xl font-bold text-[#BC1D26]">
                            {resource.title}
                          </h3>

                          {resource.description && (
                            <p className="mt-3 flex-1 text-sm leading-7 text-black/60">
                              {resource.description}
                            </p>
                          )}

                          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#BC1D26]">
                            Explore Resource
                            <ExternalLink size={15} />
                          </div>

                        </a>
                      ))}

                    </div>
                  ) : (
                    <div className="mt-8 rounded-[28px] border border-dashed border-black/10 p-8 text-black/45">
                      Resources for this category will be added soon.
                    </div>
                  )}

                </section>
              </ScrollReveal>
            ))}

          </div>

          {data.disclaimer && (
            <ScrollReveal variant="fade-up">
              <div className="mt-16 rounded-[30px] border border-black/5 bg-black/[0.025] p-7 sm:p-10">

                <p className="text-sm leading-7 text-black/55 sm:text-base">
                  <span className="font-bold text-black/70">
                    Important:
                  </span>{" "}
                  {data.disclaimer}
                </p>

              </div>
            </ScrollReveal>
          )}

        </div>
      </section>
    </main>
  );
}