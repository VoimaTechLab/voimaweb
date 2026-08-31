import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useContactSupport } from "@/publicSite/hooks/useContactSupport";
import { Clock, ExternalLink, Mail, Phone } from "lucide-react";

export default function ContactSupport() {
  const data = useContactSupport();

  return (
    <main className="min-h-screen bg-white pt-[90px]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">

          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
                {data.eyebrow}
              </p>

              <h1 className="mt-6 text-4xl font-black uppercase tracking-tight text-[#BC1D26] sm:text-5xl md:text-6xl">
                {data.title}
              </h1>

              <p className="mt-8 text-base leading-8 text-black/70 sm:text-lg sm:leading-9">
                {data.description}
              </p>

            </div>
          </ScrollReveal>

          {(data.supportEmail ||
            data.supportPhone ||
            data.supportHours) && (
            <ScrollReveal variant="fade-up" delay={0.1}>
              <div className="mt-14 grid gap-5 md:grid-cols-3">

                {data.supportEmail && (
                  <a
                    href={`mailto:${data.supportEmail}`}
                    className="rounded-[28px] border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:border-[#BC1D26]/20 hover:shadow-xl"
                  >
                    <Mail className="text-[#BC1D26]" size={24} />

                    <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-black/45">
                      Email
                    </p>

                    <p className="mt-2 break-all font-semibold">
                      {data.supportEmail}
                    </p>
                  </a>
                )}

                {data.supportPhone && (
                  <a
                    href={`tel:${data.supportPhone}`}
                    className="rounded-[28px] border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:border-[#BC1D26]/20 hover:shadow-xl"
                  >
                    <Phone className="text-[#BC1D26]" size={24} />

                    <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-black/45">
                      Phone
                    </p>

                    <p className="mt-2 font-semibold">
                      {data.supportPhone}
                    </p>
                  </a>
                )}

                {data.supportHours && (
                  <div className="rounded-[28px] border border-black/5 bg-white p-7">
                    <Clock className="text-[#BC1D26]" size={24} />

                    <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-black/45">
                      Support Hours
                    </p>

                    <p className="mt-2 font-semibold">
                      {data.supportHours}
                    </p>
                  </div>
                )}

              </div>
            </ScrollReveal>
          )}

          <div className="mt-16 space-y-8">
            {data.sections?.map((section, index) => (
              <ScrollReveal
                key={index}
                variant="fade-up"
                delay={0.05}
              >
                <section className="rounded-[30px] border border-black/5 bg-white p-7 sm:p-10">

                  <h2 className="text-2xl font-black uppercase tracking-tight text-[#BC1D26] sm:text-3xl">
                    {section.title}
                  </h2>

                  {section.content && (
                    <p className="mt-6 text-base leading-8 text-black/70 sm:text-lg sm:leading-9">
                      {section.content}
                    </p>
                  )}

                  {section.items?.length > 0 && (
                    <ul className="mt-6 space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex gap-3 text-base leading-7 text-black/70 sm:text-lg"
                        >
                          <span className="font-black text-[#BC1D26]">
                            •
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </section>
              </ScrollReveal>
            ))}
          </div>

          {data.contactLinks?.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-4">
              {data.contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#BC1D26] px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
                >
                  {link.label}
                  <ExternalLink size={17} />
                </a>
              ))}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}