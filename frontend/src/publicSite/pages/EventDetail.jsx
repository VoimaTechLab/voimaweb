import { Link, useParams } from "react-router-dom";
import { useEvent } from "../hooks/useEvents";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import DetailSkeleton from "@/components/ui/DetailSkeleton";

export default function EventDetail() {
  const { slug } = useParams();
  const { event, loading } = useEvent(slug);

  if (loading && !event) {
    return <DetailSkeleton type="event" />;
  }

  if (!event) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#BC1D26]">Event Not Found</h1>
          <Link to="/events" className="mt-8 inline-flex rounded-full bg-[#BC1D26] px-6 py-3 text-white">
            Back To Events
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="pt-[90px]">
      <section className="px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <Link to="/events" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 font-medium transition-all duration-300 hover:border-[#BC1D26] hover:text-[#BC1D26]">
            ← Back to Events
          </Link>
        </div>
      </section>

      {/* HERO */}
      <section className="relative min-h-[350px] sm:min-h-[450px] h-[55vh] sm:h-[70vh] overflow-hidden">
        {event.coverMedia?.type === "video" ? (
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src={event.coverMedia?.src} type="video/mp4" />
          </video>
        ) : (
          <img src={event.coverMedia?.src} alt={event.title} className="h-full w-full object-cover"  loading="lazy" decoding="async"/>
        )}

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-8 sm:pb-16 text-white">
            <ScrollReveal variant="fade-up">
              <span className="inline-block border-2 border-black bg-white px-4 py-1.5 shadow-[3px_3px_0px_rgba(0,0,0,1)] text-xs font-black uppercase tracking-[0.2em] text-[#BC1D26]">
                {event.category}
              </span>
              <h1 className="mt-4 sm:mt-6 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-white font-heading tracking-tight">
                {event.title}
              </h1>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-6 text-sm sm:text-base font-semibold text-white/90">
                <span>{event.date}</span>
                <span>•</span>
                <span>{event.location}</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-12 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal variant="fade-up">
            <div className="prose max-w-none prose-lg">
              {event.content?.map((paragraph, index) => (
                <p key={index} className="mb-6 sm:mb-8 text-base sm:text-lg leading-7 sm:leading-9 text-black/80 font-medium">{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      {event.highlights?.length > 0 && (
        <section className="bg-[#fafafa] px-6 py-12 sm:py-24 border-t-4 border-b-4 border-black">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal variant="fade-up">
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#BC1D26] font-heading tracking-tight">Event Highlights</h2>
            </ScrollReveal>
            <div className="mt-8 sm:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {event.highlights.map((item, index) => (
                <ScrollReveal key={index} variant="fade-up" delay={0.1 * (index % 4)}>
                  <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0px_rgba(188,29,38,1)]">
                    <h3 className="text-xl font-black uppercase text-[#BC1D26] font-heading">{item.title}</h3>
                    <p className="mt-4 text-sm sm:text-base font-semibold text-black/75 leading-6">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {event.gallery?.length > 0 && (
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal variant="fade-up">
              <h2 className="text-4xl font-bold text-[#BC1D26]">Event Gallery</h2>
            </ScrollReveal>
            <div className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {event.gallery.map((item, index) => (
                <ScrollReveal key={index} variant="fade-up" delay={0.1 * (index % 3)}>
                  <div className="group mb-6 overflow-hidden rounded-[32px] border border-black/5 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    {item.type === "video" ? (
                      <video muted loop playsInline preload="metadata"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                        className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105">
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={item.src} alt="" className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"  loading="lazy" decoding="async"/>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}