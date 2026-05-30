import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import { eventsPreviewSection } from "@/data/homeData";

export default function EventsPreview() {
  const { eyebrow, title, description, events, banner } = eventsPreviewSection;
  return (
    <section
      className="
        relative overflow-hidden
        bg-white
        px-6 py-32
      "
    >
      {/* Background Glow 
      <div
        className="
          absolute left-[-10%] top-0
          h-[350px] w-[350px]
          rounded-full
          bg-[#F47B3A]/10
          blur-3xl
        "
      />*/}

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div
          className="
            flex flex-col gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          <div className="max-w-3xl">

            <span
              className="
                text-sm font-semibold uppercase
                tracking-[0.2em]
                text-[#F47B3A]
              "
            >
              {eyebrow}
            </span>

            <h2
              className="
                mt-5
                text-4xl font-bold
                leading-tight
                text-primary-800
                md:text-5xl
              "
            >
              {title}
            </h2>

          </div>

          <p
            className="
              max-w-xl
              text-lg leading-8
              text-black/65
            "
          >
            {description}
          </p>

        </div>

        {/* Events Grid */}
        <div
          className="
            mt-20
            grid gap-8
            lg:grid-cols-3
          "
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden
                rounded-[36px]
                border border-primary-800/10
                bg-[#fafafa]
                p-8
                transition-all duration-500
                hover:-translate-y-2
                hover:bg-white
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute right-[-30px] top-[-30px]
                  h-[120px] w-[120px]
                  rounded-full
                  bg-[#F47B3A]/10
                  blur-3xl
                  transition-all duration-500
                  group-hover:bg-[#F47B3A]/20
                "
              />

              {/* Date */}
              <div
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  bg-[#F47B3A]/10
                  px-5 py-3
                  text-sm font-medium
                  text-[#800000]
                "
              >
                <CalendarDays size={18} />
                {event.date}
              </div>

              {/* Content */}
              <h3
                className="
                  mt-8
                  text-2xl font-semibold
                  leading-snug
                  text-primary-800
                "
              >
                {event.title}
              </h3>

              {/* Location */}
              <div
                className="
                  mt-5 flex items-center gap-2
                  text-sm font-medium
                  text-[#F47B3A]
                "
              >
                <MapPin size={16} />
                {event.location}
              </div>

              {/* Description */}
              <p
                className="
                  mt-6
                  leading-8
                  text-black/65
                "
              >
                {event.description}
              </p>

              {/* Link */}
              <Link
                className="
                  mt-8 inline-flex
                  items-center gap-2
                  font-medium
                  text-[#800000]
                  transition-all duration-300
                  hover:gap-3
                "
              >
                View Event
                <ArrowRight size={18} />
              </Link>

            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div
          className="
            relative overflow-hidden
            mt-20
            rounded-[48px]
            bg-[#800000]
            p-10 md:p-16
            text-center
          "
        >

          {/* Glow */}
          <div
            className="
              absolute right-[-10%] top-[-20%]
              h-[260px] w-[260px]
              rounded-full
              bg-[#F47B3A]/10
              blur-3xl
            "
          />

          <div className="relative">

            <h3
              className="
                text-3xl font-bold
                leading-tight
                text-white
                md:text-5xl
              "
            >
              {banner.title}
            </h3>

            <p
              className="
                mx-auto mt-8
                max-w-3xl
                text-lg leading-9
                text-white/70
              "
            >
              {banner.description}
            </p>

           <Link
                to={banner.cta.link}
                className="
                    mt-10 inline-flex
                    items-center justify-center
                    rounded-full
                    bg-[#F47B3A]
                    px-8 py-4
                    font-medium
                    text-white
                    transition-all duration-300
                    hover:scale-[1.03]
                "
                >
                {banner.cta.text}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}