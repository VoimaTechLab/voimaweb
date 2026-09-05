import { blogHero } from "@/publicSite/data/blogData";
import { useBlog } from "@/publicSite/hooks/useBlog";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Blog() {
  const { featuredPost, posts } = useBlog();
  return (
    <main className="overflow-hidden bg-[#fafafa] pt-[90px]">
      {/* HERO */}
      <section className="px-6 py-28 bg-[#fafafa] border-b-4 border-black">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                {blogHero.eyebrow}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none text-black font-heading tracking-tight">
              {blogHero.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mt-8 max-w-3xl text-base sm:text-lg leading-8 sm:leading-9 text-black/75 font-semibold">
              {blogHero.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-6 py-20 bg-white border-b-4 border-black">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal variant="scale-in">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="
                group
                grid
                overflow-hidden
                border-4 border-black
                bg-white
                shadow-[16px_16px_0px_rgba(0,0,0,1)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[20px_20px_0px_rgba(188,29,38,1)]
                lg:grid-cols-2
              "
            >

              <div className="overflow-hidden">
                <img
                  src={featuredPost.media.src}
                  alt={featuredPost.title}
                  className="
                    h-[400px] lg:h-[500px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                 loading="lazy" decoding="async"/>
              </div>

              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">

                <div className="inline-block bg-[#BC1D26]/10 border border-[#BC1D26] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#BC1D26] mb-4 w-fit">
                  {featuredPost.category}
                </div>

                <h2 className="text-3xl sm:text-4xl font-black uppercase leading-tight text-black font-heading tracking-tight">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-black/75 font-semibold">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-8 flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      border-2 border-black
                      bg-[#BC1D26]/10
                      font-black
                      text-black
                    "
                  >
                    {featuredPost.author.initials}
                  </div>

                  <div>
                    <p className="font-black uppercase text-black">
                      {featuredPost.author.name}
                    </p>

                    <p className="text-sm text-black/75 font-semibold">
                      {featuredPost.publishedAt} • {featuredPost.readTime}
                    </p>
                  </div>

                </div>

                <div
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-black uppercase tracking-widest text-sm
                    text-[#BC1D26]
                    group-hover:translate-x-2 transition-transform duration-300
                  "
                >
                  Read Article →
                </div>

              </div>

            </Link>
          </ScrollReveal>
        </div>
      </section>

       
      <section className="px-6 py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal variant="fade-down">
            <h2 className="text-3xl sm:text-4xl font-black uppercase leading-none text-black font-heading tracking-tight">
              Latest Articles
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {posts.map((post, index) => (
              <ScrollReveal key={post.slug} variant="fade-up" delay={0.1 * index}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="
                    group
                    flex flex-col justify-between
                    overflow-hidden
                    border-4 border-black
                    bg-white
                    shadow-[12px_12px_0px_rgba(0,0,0,1)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[16px_16px_0px_rgba(188,29,38,1)]
                    h-full
                  "
                >

                  <div className="overflow-hidden">

                    <img
                      src={post.media.src}
                      alt={post.title}
                      className="
                        h-[260px]
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                     loading="lazy" decoding="async"/>

                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">

                    <div>
                      <div className="flex items-center gap-3">

                        <div
                          className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            border-2 border-black
                            bg-[#BC1D26]/10
                            font-black
                            text-black
                          "
                        >
                          {post.author.initials}
                        </div>

                        <div>

                          <p className="font-black uppercase text-black">
                            {post.author.name}
                          </p>

                          <p className="text-sm text-black/75 font-semibold">
                            {post.publishedAt} • {post.readTime}
                          </p>

                        </div>

                      </div>

                      <span
                        className="
                          mt-5
                          inline-block
                          bg-[#BC1D26]/10
                          border border-[#BC1D26]
                          px-3
                          py-1
                          text-xs
                          font-black
                          uppercase
                          tracking-wider
                          text-[#BC1D26]
                        "
                      >
                        {post.category}
                      </span>

                      <h3 className="mt-4 text-xl font-black uppercase text-black font-heading leading-tight">
                        {post.title}
                      </h3>

                      <p className="mt-3 leading-7 text-black/75 font-semibold">
                        {post.excerpt}
                      </p>
                    </div>

                    <div
                      className="
                        mt-6
                        font-black uppercase tracking-widest text-sm
                        text-[#BC1D26]
                        group-hover:translate-x-2 transition-transform duration-300
                      "
                    >
                      Read More →
                    </div>

                  </div>

                </Link>
              </ScrollReveal>
            ))}

          </div>

        </div>
      </section>

      {/* COMMUNITY STORIES
      <section className="bg-[#fff] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-bold text-[#BC1D26]">
            Community Voices
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {communityStories.map((story) => (

              <Link
                key={story.slug}
                to={`/blog/${story.slug}`}
                className="
                  group
                  overflow-hidden
                  rounded-[32px]
                  bg-white
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                <div className="overflow-hidden rounded-[24px]">

                  <img
                    src={story.image}
                    alt={story.title}
                    className="
                      h-[220px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                   loading="lazy" decoding="async"/>

                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#BC1D26]">
                  {story.title}
                </h3>

                <p className="mt-3 text-black/60">
                  {story.author.name} • {story.location}
                </p>

                <p className="mt-4 text-black/65">
                  {story.excerpt}
                </p>

                <span
                  className="
                    mt-5
                    inline-flex
                    rounded-full
                    bg-[#BC1D26]/10
                    px-4
                    py-2
                    text-sm
                    text-[#BC1D26]
                  "
                >
                  Submitted via Voima App
                </span>

                <div
                  className="
                    mt-5
                    font-semibold
                    text-[#BC1D26]
                  "
                >
                  Read Story →
                </div>

              </Link>

            ))}

          </div>

        </div>
      </section> */}
    </main>
  );
}