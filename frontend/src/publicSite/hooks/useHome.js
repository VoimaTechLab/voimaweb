import { getBlogData, getEventsData, getHomeData } from "@/sanity/sanityService";
import { BookOpenText, Brain, Globe, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { useEffect, useState } from "react";
import {
  appShowcaseSection,
  ctaSection,
  faqSection,
  globalReachSection,
  heroSlides,
  impactSection,
  impactStatsSection,
  missionSection,
  newsPreviewSection,
  programsPreviewSection,
  sdgSection,
  storySection,
  storyShiftSection,
  traceFrameworkSection,
  whoIsVoima,
} from "../../data/homeData";

/* FALLBACK HOME DATA */
const FALLBACK = {
  heroSlides,
  backgroundVideo: null,
  impactSection,
  impactStatsSection,
  missionSection,
  storySection,
  storyShiftSection,
  appShowcaseSection,
  sdgSection,
  ctaSection,
  whoIsVoima,
  traceFrameworkSection,
  globalReachSection,
  programsPreviewSection,
  programs: programsPreviewSection?.programs || [],
  newsPreviewSection,
  faqSection,
};

/* ICON MAPS */
const ICONS = { HeartPulse, Brain, Globe, BookOpenText };
const STORY_ICONS = { HeartPulse, Stethoscope, ShieldCheck };

/* THEME MAP */
const THEME = {
  primary: { iconBgClassName: "bg-[#BC1D26]/10", iconColorClassName: "text-[#BC1D26]" },
  orange: { iconBgClassName: "bg-[#F47B3A]/10", iconColorClassName: "text-[#F47B3A]" },
  green: { iconBgClassName: "bg-[#1D9E75]/10", iconColorClassName: "text-[#1D9E75]" },
  black: { iconBgClassName: "bg-black/5", iconColorClassName: "text-black" },
};

/* CACHE & IN-FLIGHT TRACKING */
let cache = null;
let inflight = null;

/* HELPERS */
const toRelativeLink = (url) => {
  if (!url || typeof url !== "string") return url;
  try {
    const parsed = new URL(url);
    return parsed.pathname + parsed.search + parsed.hash;
  } catch {
    return url;
  }
};

const resolveAssetUrl = (imageProp) => imageProp?.asset?.url || imageProp || null;

/* MAPPERS */
const mapImpact = (impact) =>
  impact
    ? {
        ...impact,
        areas: (impact.areas || []).map((area) => ({
          ...area,
          icon: ICONS[area.iconName] || HeartPulse,
          ...(THEME[area.colorTheme] || THEME.primary),
        })),
      }
    : impact;

const mapCtaSection = (cta) =>
  cta
    ? {
        ...cta,
        primaryCta: cta.primaryCta
          ? { ...cta.primaryCta, link: toRelativeLink(cta.primaryCta.link) }
          : null,
        secondaryCta: cta.secondaryCta
          ? { ...cta.secondaryCta, link: toRelativeLink(cta.secondaryCta.link) }
          : null,
      }
    : cta;

const mapStoryShiftSection = (section) =>
  section
    ? {
        ...section,
        stories: (section.stories || []).map((story) => ({
          ...story,
          icon: STORY_ICONS[story.iconName] || HeartPulse,
          image: resolveAssetUrl(story.image),
        })),
      }
    : section;

const mapTraceFrameworkSection = (section) =>
  section
    ? {
        ...section,
        pillars: (section.pillars || []).map((pillar) => ({
          ...pillar,
          image: resolveAssetUrl(pillar.image),
          link: toRelativeLink(pillar.link),
        })),
      }
    : section;

const mapWhoIsVoima = (section) =>
  section
    ? {
        ...section,
        socialChannels: (section.socialChannels || []).map((social) => ({
          ...social,
          href: social.href || "#",
        })),
        image: resolveAssetUrl(section.image),
        cta: section.cta
          ? { ...section.cta, link: toRelativeLink(section.cta.link) }
          : null,
      }
    : section;

const mapGlobalReachSection = (section) =>
  section
    ? {
        ...section,
        stats: (section.stats || []).map((stat) => ({
          ...stat,
          image: resolveAssetUrl(stat.image),
        })),
      }
    : section;

/* HOOK */
export function useHome() {
  // Initialize state directly from cache or fallback synchronously
  const [data, setData] = useState(() => cache || FALLBACK);

  useEffect(() => {
    let isMounted = true;

    if (!inflight) {
      inflight = Promise.all([getHomeData(), getEventsData(), getBlogData()]).catch((error) => {
        inflight = null;
        throw error;
      });
    }

    inflight
      .then(([homeData, eventsData, blogData]) => {
        inflight = null;
        const d = homeData || {};
        const events = eventsData?.events || [];

        const mappedPrograms =
          events.length > 0
            ? events.map((event) => ({
                id: event.slug,
                title: event.title,
                description: event.excerpt || event.description || "",
                image: event.coverMedia?.src || null,
                category: event.category || "Voima Initiative",
                date: event.date || "",
                location: event.location || "",
                featured: event.featured || false,
                slug: event.slug,
                link: `/events/${event.slug}`,
              }))
            : FALLBACK.programs;

        const mappedArticles = blogData
          ? [
              ...(blogData.featuredPost ? [blogData.featuredPost] : []),
              ...(blogData.posts || []),
            ]
              .filter(Boolean)
              .slice(0, 6)
              .map((post) => ({
                id: post.slug,
                slug: post.slug,
                title: post.title,
                description: post.excerpt || "",
                image: post.image || null,
                date: post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "",
                category: post.category || "",
                readTime: post.readTime || "",
              }))
          : [];

        cache = {
          heroSlides: d.heroSlides?.length > 0 ? d.heroSlides : FALLBACK.heroSlides,
          backgroundVideo: d.backgroundVideo || FALLBACK.backgroundVideo,

          impactSection:
            d.impactSection?.areas?.length > 0
              ? mapImpact(d.impactSection)
              : FALLBACK.impactSection,
          impactStatsSection: d.impactStatsSection || FALLBACK.impactStatsSection,

          missionSection:
            d.missionSection?.steps?.length > 0
              ? d.missionSection
              : FALLBACK.missionSection,

          storySection: d.storySection || FALLBACK.storySection,
          storyShiftSection:
            d.storyShiftSection?.stories?.length > 0
              ? mapStoryShiftSection(d.storyShiftSection)
              : FALLBACK.storyShiftSection,

          appShowcaseSection: d.appShowcaseSection || FALLBACK.appShowcaseSection,

          sdgSection:
            d.sdgSection?.goals?.length > 0
              ? d.sdgSection
              : FALLBACK.sdgSection,

          ctaSection: d.ctaSection ? mapCtaSection(d.ctaSection) : FALLBACK.ctaSection,
          whoIsVoima: d.whoIsVoima ? mapWhoIsVoima(d.whoIsVoima) : FALLBACK.whoIsVoima,

          traceFrameworkSection:
            d.traceFrameworkSection?.pillars?.length > 0
              ? mapTraceFrameworkSection(d.traceFrameworkSection)
              : FALLBACK.traceFrameworkSection,

          globalReachSection:
            d.globalReachSection?.stats?.length > 0
              ? mapGlobalReachSection(d.globalReachSection)
              : FALLBACK.globalReachSection,

          programsPreviewSection: {
            ...FALLBACK.programsPreviewSection,
            ...(d.programsPreviewSection || {}),
            programs: mappedPrograms,
          },

          newsPreviewSection: {
            ...FALLBACK.newsPreviewSection,
            ...(d.newsPreviewSection || {}),
            articles:
              mappedArticles.length > 0
                ? mappedArticles
                : FALLBACK.newsPreviewSection?.articles || [],
          },

          faqSection: {
            ...FALLBACK.faqSection,
            ...(d.faqSection || {}),
            faqs:
              d.faqSection?.faqs?.length > 0
                ? d.faqSection.faqs
                : FALLBACK.faqSection?.faqs || [],
          },

          programs: mappedPrograms,
        };

        if (isMounted) setData(cache);
      })
      .catch((error) => {
        console.error("Failed to load home data:", error);
        if (isMounted) setData(FALLBACK);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
}