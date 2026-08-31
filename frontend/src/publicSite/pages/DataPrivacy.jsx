import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useDataPrivacy } from "@/publicSite/hooks/useDataPrivacy";

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

              {formattedDate && (
                <p className="mt-5 text-sm font-medium text-black/45">
                  Last updated: {formattedDate}
                </p>
              )}

            </div>
          </ScrollReveal>

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

          {data.contactEmail && (
            <ScrollReveal variant="fade-up">
              <div className="mt-10 rounded-[30px] bg-[#BC1D26] p-7 text-white sm:p-10">

                <h2 className="text-2xl font-black uppercase tracking-tight">
                  Privacy Questions?
                </h2>

                <p className="mt-4 text-white/80">
                  If you have questions about how your information is handled,
                  contact us at:
                </p>

                <a
                  href={`mailto:${data.contactEmail}`}
                  className="mt-5 inline-block font-bold underline underline-offset-4"
                >
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