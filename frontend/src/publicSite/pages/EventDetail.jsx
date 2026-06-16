import { Link, useParams } from "react-router-dom";
import { useEvent } from "../hooks/useEvents";

export default function EventDetail() {
  const { slug } = useParams();
  const { event, loading } = useEvent(slug);

  if (loading && !event)
    return <div className="pt-32 text-center text-black/50">Loading…</div>;

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
      <section className="relative h-[70vh] overflow-hidden">
        {event.coverMedia?.type === "video" ? (
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src={event.coverMedia?.src} type="video/mp4" />
          </video>
        ) : (
          <img src={event.coverMedia?.src} alt={event.title} className="h-full w-full object-cover" />
        )}

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16 text-white">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold backdrop-blur-md text-[#BC1D26]">
              {event.category}
            </span>
            <h1 className="mt-6 max-w-4xl text-6xl font-bold leading-tight text-white">
              {event.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-6 text-white/80">
              <span>{event.date}</span>
              <span>•</span>
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="prose max-w-none prose-lg">
            {event.content?.map((paragraph, index) => (
              <p key={index} className="mb-8 text-lg leading-9 text-black/70">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      {event.highlights?.length > 0 && (
        <section className="bg-[#fafafa] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-[#BC1D26]">Event Highlights</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {event.highlights.map((item, index) => (
                <div key={index} className="rounded-[32px] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-xl font-bold text-[#BC1D26]">{item.title}</h3>
                  <p className="mt-4 text-black/65">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {event.gallery?.length > 0 && (
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-[#BC1D26]">Event Gallery</h2>
            <div className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {event.gallery.map((item, index) => (
                <div key={index} className="group mb-6 overflow-hidden rounded-[32px] border border-black/5 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  {item.type === "video" ? (
                    <video muted loop playsInline preload="metadata"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                      className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105">
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={item.src} alt="" className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}