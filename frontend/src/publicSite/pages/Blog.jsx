import {
    fadeUp,
    pageTransition,
    stagger,
} from "@/publicSite/motion/variants";
import { motion } from "framer-motion";

import {
    ArrowRight,
    Calendar,
    Clock3,
    Tag,
} from "lucide-react";

import { Link } from "react-router-dom";

/* CMS READY STRUCTURE
Later from Sanity you can replace this:
  const articles = await client.fetch(query)
  and everything will render dynamically.
*/

const featuredArticle = {
  title:
    "Voima Hosts National Sickle Cell Awareness Walk In Accra",
  slug: "national-sickle-cell-awareness-walk-accra",
  category: "Community",
  publishedAt: "May 14, 2026",
  readTime: "6 min read",
  excerpt:
    "Over 2,000 participants joined Voima Initiative across Accra to raise awareness for sickle cell disease while connecting families with support, education, and healthcare resources.",

  image:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",

  featured: true,
};

const articles = [
  {
    title:
      "Voima App Begins Pilot Testing With Patients",
    slug: "voima-app-pilot-testing",
    category: "Technology",
    publishedAt: "April 22, 2026",
    readTime: "4 min read",
    excerpt:
      "The Voima mobile platform enters early pilot testing with real users to improve chronic condition tracking and personalized healthcare support.",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title:
      "TRACE Research Initiative Launches In Ghana",
    slug: "trace-research-launch",
    category: "Research",
    publishedAt: "April 02, 2026",
    readTime: "5 min read",
    excerpt:
      "Voima Initiative introduces TRACE — a long-term framework focused on Technology, Research, Advocacy, Community, and Education.",

    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title:
      "Community Health Workshop Reaches 500+ Families",
    slug: "community-health-workshop",
    category: "Community",
    publishedAt: "March 11, 2026",
    readTime: "3 min read",
    excerpt:
      "Healthcare professionals and volunteers gathered to educate families on early symptom monitoring and better healthcare access.",

    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title:
      "Voima Partners With Local Hospitals For Outreach",
    slug: "hospital-outreach-partnership",
    category: "Advocacy",
    publishedAt: "February 19, 2026",
    readTime: "7 min read",
    excerpt:
      "New partnerships aim to strengthen healthcare accessibility and improve patient support systems in underserved communities.",

    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title:
      "Youth Volunteers Lead Regional Awareness Campaign",
    slug: "youth-awareness-campaign",
    category: "Events",
    publishedAt: "January 25, 2026",
    readTime: "4 min read",
    excerpt:
      "Young leaders across multiple regions participated in outreach campaigns focused on education and public awareness.",

    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title:
      "Inside The Future Of Digital Healthcare In Africa",
    slug: "future-of-digital-healthcare-africa",
    category: "Technology",
    publishedAt: "January 10, 2026",
    readTime: "8 min read",
    excerpt:
      "Exploring how proactive digital healthcare tools can reshape healthcare delivery and support systems across Africa.",

    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
];

function categoryStyles(category) {
  const styles = {
    Community:
      "bg-[#F47B3A]/10 text-[#F47B3A]",

    Research:
      "bg-[#4F46E5]/10 text-[#4F46E5]",

    Technology:
      "bg-[#06B6D4]/10 text-[#06B6D4]",

    Advocacy:
      "bg-[#10B981]/10 text-[#10B981]",

    Events:
      "bg-[#F47B3A]/10 text-[#F47B3A]",
  };

  return (
    styles[category] ||
    "bg-black/5 text-black/70"
  );
}

export default function blog() {
  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden bg-[#ffff] pt-[90px]"
    >
      {/* HERO */}
      <section className="relative px-6 py-28">
        
       {/* <div className="absolute left-[-10%] top-0 h-[320px] w-[320px] rounded-full bg-[#F47B3A]/10 blur-3xl"></div>*/}

        <div className="mx-auto max-w-7xl">
          
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]"
            >
              blog & Updates
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-6xl font-bold leading-tight text-primary-800"
            >
              Stories, research, events &
              real community impact.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-3xl text-lg leading-9 text-black/65"
            >
              Follow the latest updates from
              Voima Initiative — from healthcare
              innovation and advocacy efforts to
              research breakthroughs, outreach
              events, and community stories.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          
          <Link
            to={`/blog/${featuredArticle.slug}`}
            className="
              group grid overflow-hidden
              rounded-[42px]
              border border-black/5
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.05)]
              transition-all duration-500
              hover:-translate-y-1
              lg:grid-cols-2
            "
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="
                  h-full min-h-[420px] w-full
                  object-cover transition duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-10 lg:p-14">
              
              <div
                className={`
                  inline-flex w-fit items-center
                  rounded-full px-4 py-2
                  text-xs font-semibold uppercase
                  tracking-[0.15em]
                  ${categoryStyles(
                    featuredArticle.category
                  )}
                `}
              >
                {featuredArticle.category}
              </div>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-black transition group-hover:text-[#800000]">
                {featuredArticle.title}
              </h2>

              <p className="mt-6 text-lg leading-9 text-black/65">
                {featuredArticle.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-black/45">
                
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {featuredArticle.publishedAt}
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {featuredArticle.readTime}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex items-center gap-3 font-semibold text-[#F47B3A]">
                Read Full Story
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-4">
          
          {[
            "All",
            "Community",
            "Research",
            "Technology",
            "Advocacy",
            "Events",
          ].map((item, index) => (
            <Link
              key={index}
              className="
                rounded-full border border-black/10
                bg-white px-5 py-3 text-sm
                font-medium text-black/65
                transition hover:border-[#F47B3A]/20
                hover:bg-[#F47B3A]/5
                hover:text-[#F47B3A]
              "
            >
              {item}
            </Link>
          ))}
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="px-6 pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mx-auto grid max-w-7xl
            gap-8 md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {articles.map((article, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
            >
              <Link
                to={`/blog/${article.slug}`}
                className="
                  group flex h-full flex-col
                  overflow-hidden rounded-[34px]
                  border border-black/5 bg-white
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="
                      h-[260px] w-full object-cover
                      transition duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  
                  {/* Category */}
                  <div
                    className={`
                      inline-flex w-fit items-center
                      rounded-full px-4 py-2
                      text-[11px] font-semibold
                      uppercase tracking-[0.15em]
                      ${categoryStyles(article.category)}
                    `}
                  >
                    <Tag size={12} />
                    <span className="ml-2">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl font-bold leading-snug text-black transition group-hover:text-[#800000]">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-5 flex-1 leading-8 text-black/60">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-6">
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-black/45">
                        <Calendar size={14} />
                        {article.publishedAt}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-black/45">
                        <Clock3 size={14} />
                        {article.readTime}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-[#F47B3A]">
                      Read
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* NEWSLETTER BANNER */}
      <section className="px-6 pb-32">
        <div
          className="
            relative mx-auto max-w-7xl overflow-hidden
            rounded-[42px] bg-[#800000]
            px-8 py-20 text-white lg:px-20
          "
        >
          {/* Glow */}
          <div className="absolute right-[-10%] top-[-20%] h-[300px] w-[300px] rounded-full bg-[#F47B3A]/20 blur-3xl"></div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Stay Connected
              </p>

              <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
                Get updates from Voima Initiative.
              </h2>

              <p className="mt-6 max-w-xl leading-9 text-white/70">
                Subscribe for the latest stories,
                research insights, community
                initiatives, outreach events,
                and platform updates.
              </p>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-4 sm:flex-row">
              
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  h-[62px] flex-1 rounded-2xl
                  border 
                  bg-white/10 px-6 text-white
                  outline-none placeholder:text-white/40
                  backdrop-blur-xl
                  border-white/50
                  focus:outline-none
                "
              />

              <button
                className="
                  h-[62px] rounded-2xl
                  bg-[#F47B3A] px-8
                  inline-block
                  font-semibold text-white
                  transition hover:scale-[1.02]
                  cursor-pointer
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}