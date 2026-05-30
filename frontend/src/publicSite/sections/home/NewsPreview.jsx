import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

import { newsPreviewSection } from "@/data/homeData";

export default function NewsPreview() {
  const { eyebrow, title, description, articles, banner } = newsPreviewSection;
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#ffff]
        px-6 py-32
      "
    >
      {/* Background Glow 
      <div
        className="
          absolute right-[-10%] top-0
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

        {/* News Grid */}
        <div
          className="
            mt-20
            grid gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="
                group overflow-hidden
                rounded-[36px]
                border border-primary-800/10
                bg-white
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="
                    h-[260px] w-full
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8">

                {/* Date */}
                <div
                  className="
                    flex items-center gap-2
                    text-sm font-medium
                    text-[#F47B3A]
                  "
                >
                  <CalendarDays size={16} />
                  {article.date}
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-5
                    text-2xl font-semibold
                    leading-snug
                    text-primary-800
                  "
                >
                  {article.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5
                    leading-8
                    text-black/65
                  "
                >
                  {article.description}
                </p>

                {/* Link */}
                <Link
                  to="/news"
                  className="
                    mt-8 inline-flex
                    items-center gap-2
                    font-medium
                    text-[#800000]
                    transition-all duration-300
                    hover:gap-3
                  "
                >
                  Read More
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
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