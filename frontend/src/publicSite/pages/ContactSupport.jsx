import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useContactSupport } from "@/publicSite/hooks/useContactSupport";
import { Clock, ExternalLink, Mail, Phone } from "lucide-react";

export default function ContactSupport() {
  const data = useContactSupport();

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
            </div>
          </ScrollReveal>

          {/* Support Channels Grid */}
          {(data.supportEmail || data.supportPhone || data.supportHours) && (
            <ScrollReveal variant="fade-up" delay={0.1}>
              <div className="mt-12 grid gap-6 md:grid-cols-3">

                {data.supportEmail && (
                  <a
                    href={`mailto:${data.supportEmail}`}
                    className="group border-2 border-black bg-white p-7 shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0px_rgba(188,29,38,1)]"
                  >
                    <div className="inline-flex border-2 border-black bg-[#BC1D26] p-3 text-white shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4">
                      <Mail size={22} />
                    </div>

                    <p className="text-xs font-black uppercase tracking-wider text-black/60">
                      Email
                    </p>

                    <p className="mt-2 text-base font-black text-black group-hover:text-[#BC1D26] transition-colors break-all">
                      {data.supportEmail}
                    </p>
                  </a>
                )}

                {data.supportPhone && (
                  <a
                    href={`tel:${data.supportPhone}`}
                    className="group border-2 border-black bg-white p-7 shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0px_rgba(188,29,38,1)]"
                  >
                    <div className="inline-flex border-2 border-black bg-[#BC1D26] p-3 text-white shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4">
                      <Phone size={22} />
                    </div>

                    <p className="text-xs font-black uppercase tracking-wider text-black/60">
                      Phone
                    </p>

                    <p className="mt-2 text-base font-black text-black group-hover:text-[#BC1D26] transition-colors">
                      {data.supportPhone}
                    </p>
                  </a>
                )}

                {data.supportHours && (
                  <div className="border-2 border-black bg-white p-7 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                    <div className="inline-flex border-2 border-black bg-[#BC1D26] p-3 text-white shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4">
                      <Clock size={22} />
                    </div>

                    <p className="text-xs font-black uppercase tracking-wider text-black/60">
                      Support Hours
                    </p>

                    <p className="mt-2 text-base font-black text-black">
                      {data.supportHours}
                    </p>
                  </div>
                )}

              </div>
            </ScrollReveal>
          )}

          {/* Detailed Sections */}
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

          {/* External Links */}
          {data.contactLinks?.length > 0 && (
            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="mt-12 flex flex-wrap gap-4">
                {data.contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-black bg-[#BC1D26] text-white px-7 py-4 text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
                  >
                    {link.label}
                    <ExternalLink size={17} />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          )}

        </div>
      </section>
    </main>
  );
}