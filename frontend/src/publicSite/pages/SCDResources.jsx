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
    <main className="min-h-screen bg-[#fafafa] pt-[90px]">
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <ScrollReveal variant="fade-up">
            <div className="max-w-4xl">
              {data.eyebrow && (
                <div className="mb-4 inline-block border-2 border-black bg-[#BC1D26] px-4 py-1.5 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-white">
                    {data.eyebrow}
                  </span>
                </div>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#BC1D26] font-heading">
                {data.title}
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed font-semibold text-black/75">
                {data.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Resource Categories */}
          <div className="mt-16 space-y-16">
            {data.categories?.map((category, categoryIndex) => (
              <ScrollReveal
                key={categoryIndex}
                variant="fade-up"
                delay={0.05 * categoryIndex}
              >
                <section>
                  <div className="max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#BC1D26] font-heading">
                      {category.title}
                    </h2>

                    {category.description && (
                      <p className="mt-3 text-base font-semibold leading-relaxed text-black/75">
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
                            min-h-[250px]
                            flex-col
                            justify-between
                            border-2
                            border-black
                            bg-white
                            p-7
                            shadow-[6px_6px_0px_rgba(0,0,0,1)]
                            transition-all
                            duration-200
                            hover:-translate-y-1
                            hover:shadow-[10px_10px_0px_rgba(188,29,38,1)]
                          "
                        >
                          <div>
                            <div className="flex items-start justify-between">
                              <div className="border-2 border-black bg-[#BC1D26] p-2.5 text-white shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                <BookOpen size={20} />
                              </div>

                              <ArrowUpRight
                                size={22}
                                className="text-black transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#BC1D26]"
                              />
                            </div>

                            {resource.type && (
                              <span className="mt-5 inline-block border border-black bg-black/5 px-3 py-1 text-xs font-black uppercase tracking-wider text-black">
                                {resource.type}
                              </span>
                            )}

                            <h3 className="mt-4 text-xl font-black uppercase text-black font-heading transition-colors group-hover:text-[#BC1D26]">
                              {resource.title}
                            </h3>

                            {resource.description && (
                              <p className="mt-3 text-sm font-semibold leading-relaxed text-black/70">
                                {resource.description}
                              </p>
                            )}
                          </div>

                          <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#BC1D26]">
                            Explore Resource
                            <ExternalLink size={15} />
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-8 border-2 border-dashed border-black bg-white p-8 text-sm font-black uppercase tracking-wider text-black/60 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                      Resources for this category will be added soon.
                    </div>
                  )}
                </section>
              </ScrollReveal>
            ))}
          </div>

          {/* Medical Disclaimer Box */}
          {data.disclaimer && (
            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="mt-16 border-4 border-black bg-white p-8 sm:p-10 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <p className="text-sm sm:text-base font-semibold leading-relaxed text-black/80">
                  <span className="font-black uppercase tracking-wider text-[#BC1D26] mr-2">
                    Important Disclaimer:
                  </span>
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