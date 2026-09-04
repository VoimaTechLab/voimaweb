import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useDataPrivacy } from "@/publicSite/hooks/useDataPrivacy";
import { ShieldCheck, Mail } from "lucide-react";

export default function DataPrivacy() {
  const data = useDataPrivacy();

  const formattedDate = data.lastUpdated
    ? new Date(data.lastUpdated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="min-h-screen bg-[#fafafa] pt-[90px]">
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">

          {/* Header */}
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
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

              {formattedDate && (
                <div className="mt-6 inline-flex items-center gap-2 border-2 border-black bg-white px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <ShieldCheck size={14} className="text-[#BC1D26]" />
                  <span>Last updated: {formattedDate}</span>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Sections List */}
          <div className="mt-14 space-y-8">
            {data.sections?.map((section, index) => (
              <ScrollReveal
                key={index}
                variant="fade-up"
                delay={0.05 * index}
              >
                <section className="border-2 border-black bg-white p-7 sm:p-10 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#BC1D26] font-heading">
                    {section.title}
                  </h2>

                  {section.content && (
                    <p className="mt-6 text-base sm:text-lg leading-relaxed font-semibold text-black/75">
                      {section.content}
                    </p>
                  )}

                  {section.items?.length > 0 && (
                    <ul className="mt-6 space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-base sm:text-lg font-semibold text-black/80"
                        >
                          <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 border border-black bg-[#BC1D26] shadow-[1px_1px_0px_rgba(0,0,0,1)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Questions Card */}
          {data.contactEmail && (
            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="mt-12 border-4 border-black bg-[#BC1D26] p-8 sm:p-12 text-white shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-heading text-white">
                  Privacy Questions?
                </h2>

                <p className="mt-4 text-base sm:text-lg font-medium text-white/90">
                  If you have questions about how your information is handled, reach out to our team at:
                </p>

                <a
                  href={`mailto:${data.contactEmail}`}
                  className="mt-6 inline-flex items-center gap-2 border-2 border-black bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-[#BC1D26] shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
                >
                  <Mail size={18} />
                  {data.contactEmail}
                </a>
              </div>
            </ScrollReveal>
          )}

        </div>
      </section>
    </main>
  );
}