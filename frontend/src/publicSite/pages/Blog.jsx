import { pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";

import {
  blogHero,
  communityStories,
  featuredPost,
  posts,
} from "@/publicSite/data/blogData";

import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden bg-white pt-[90px]"
    >
      {/* HERO */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <p className="uppercase tracking-[0.2em] text-[#BC1D26] font-semibold">
            {blogHero.eyebrow}
          </p>

          <h1 className="mt-6 text-6xl font-bold text-[#BC1D26]">
            {blogHero.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-black/65">
            {blogHero.description}
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">

          <Link
            to={`/blog/${featuredPost.slug}`}
            className="
              group
              grid
              overflow-hidden
              rounded-[40px]
              bg-[#fafafa]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
              lg:grid-cols-2
            "
          >

            <div className="overflow-hidden">
              <img
                src={featuredPost.media.src}
                alt={featuredPost.title}
                className="
                  h-[500px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            <div className="p-12 lg:p-16">

              <span className="rounded-full bg-[#BC1D26]/10 px-4 py-2 text-sm text-[#BC1D26]">
                {featuredPost.category}
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#BC1D26]">
                {featuredPost.title}
              </h2>

              <p className="mt-6 leading-8 text-black/65">
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
                    rounded-full
                    bg-[#BC1D26]/10
                    font-semibold
                    text-[#BC1D26]
                  "
                >
                  {featuredPost.author.initials}
                </div>

                <div>
                  <p className="font-medium">
                    {featuredPost.author.name}
                  </p>

                  <p className="text-sm text-black/50">
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
                  font-semibold
                  text-[#BC1D26]
                "
              >
                Read Article →
              </div>

            </div>

          </Link>

        </div>
      </section>

      {/* POSTS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-bold text-[#BC1D26]">
            Latest Articles
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {posts.map((post) => (

              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="
                  group
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-black/5
                  bg-white
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
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
                  />

                </div>

                <div className="p-7">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[#BC1D26]/10
                        font-semibold
                        text-[#BC1D26]
                      "
                    >
                      {post.author.initials}
                    </div>

                    <div>

                      <p className="font-medium text-black">
                        {post.author.name}
                      </p>

                      <p className="text-sm text-black/50">
                        {post.publishedAt} • {post.readTime}
                      </p>

                    </div>

                  </div>

                  <span
                    className="
                      mt-5
                      inline-block
                      rounded-full
                      bg-[#BC1D26]/10
                      px-3
                      py-1
                      text-sm
                      text-[#BC1D26]
                    "
                  >
                    {post.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-[#BC1D26]">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-8 text-black/65">
                    {post.excerpt}
                  </p>

                  <div
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      font-semibold
                      text-[#BC1D26]
                    "
                  >
                    Read More →
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>
      </section>

      {/* COMMUNITY STORIES */}
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
                  />

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
      </section>
    </motion.main>
  );
}