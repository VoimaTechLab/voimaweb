export const BLOG_QUERY = `*[_type == "post"] | order(publishedAt desc){
  "slug": slug.current,
  title,
  category,
  excerpt,
  readTime,
  publishedAt,
  kind,
  featured,
  location,
  source,
  author,
  story,
  "image": coverImage.asset->url,
  "media": { "type": "image", "src": coverImage.asset->url }
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  "slug": slug.current,
  title, category, excerpt, readTime, publishedAt,
  kind, featured, location, source, author, story,
  "image": coverImage.asset->url,
  "media": { "type": "image", "src": coverImage.asset->url }
}`;

export const EVENTS_QUERY = `*[_type == "event"] | order(_createdAt desc){
  "slug": slug.current, title, category, date, location, excerpt, description,
  featured, content, highlights,
  "coverMedia": { "type": "image", "src": coverImage.asset->url },
  "gallery": gallery[]{ "type": "image", "src": asset->url }
}`;

export const EVENT_BY_SLUG_QUERY = `*[_type == "event" && slug.current == $slug][0]{
  "slug": slug.current, title, category, date, location, excerpt, description,
  featured, content, highlights,
  "coverMedia": { "type": "image", "src": coverImage.asset->url },
  "gallery": gallery[]{ "type": "image", "src": asset->url }
}`;

const MILESTONE_FIELDS = `
  year, "slug": slug.current, title, description,
  "media": select(
    defined(video.asset) => { "type": "video", "src": video.asset->url },
    { "type": "image", "src": coverImage.asset->url }
  ),
  story,
  contributorsSectionTitle,
  "contributors": contributors[]{ name, role, quote, "image": image.asset->url },
  "gallery": gallery[].asset->url
`;

export const MILESTONES_QUERY = `*[_type == "milestone"] | order(year asc){ ${MILESTONE_FIELDS} }`;
export const MILESTONE_BY_SLUG_QUERY = `*[_type == "milestone" && slug.current == $slug][0]{ ${MILESTONE_FIELDS} }`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(_createdAt desc){
  quote, name, role, location,
  "image": image.asset->url
}`;

export const ABOUT_QUERY = `*[_type == "aboutPage"][0]{
  "heroData": {
    "eyebrow": hero.eyebrow, "title": hero.title, "description": hero.description,
    "image": hero.image.asset->url, "stats": hero.stats, "cta": hero.cta
  },
  "storyData": {
    "eyebrow": story.eyebrow, "title": story.title,
    "descriptionOne": story.descriptionOne, "descriptionTwo": story.descriptionTwo,
    "image": story.image.asset->url
  },
  "missionVisionData": missionVision,
  "traceFramework": trace,
  "teamData": {
    "eyebrow": team.eyebrow, "title": team.title, "description": team.description,
    "members": team.members[]{ name, role, bio, linkedin, "image": image.asset->url }
  },
  "galleryData": {
    "eyebrow": galleryCTA.eyebrow, "title": galleryCTA.title, "description": galleryCTA.description,
    "image": galleryCTA.image.asset->url, "cta": galleryCTA.cta
  }
}`;

export const VOIMA_APP_QUERY = `*[_type == "voimaAppPage"][0]{
  "heroData": {
    "eyebrow": hero.eyebrow, "title": hero.title, "description": hero.description,
    "primaryCTA": hero.primaryCTA, "secondaryCTA": hero.secondaryCTA,
    "showcase": {
      "frontScreen": hero.showcase.frontScreen.asset->url,
      "backScreen": hero.showcase.backScreen.asset->url
    }
  },
  "appScreens": appScreens[]{ title, description, "image": image.asset->url },
  "benefits": benefits,
  "faqs": faqs,
  "downloadCTA": {
    "title": downloadCTA.title, "description": downloadCTA.description,
    "backgroundImage": downloadCTA.backgroundImage.asset->url,
    "primaryButton": downloadCTA.primaryButton,
    "secondaryButton": downloadCTA.secondaryButton
  }
}`;

const APP_FEATURE_FIELDS = `
  "slug": slug.current, title, description, iconName,
  "heroImage": heroImage.asset->url, content, highlights
`;
export const APP_FEATURES_QUERY = `*[_type == "appFeature"] | order(_createdAt asc){ ${APP_FEATURE_FIELDS} }`;
export const APP_FEATURE_BY_SLUG_QUERY = `*[_type == "appFeature" && slug.current == $slug][0]{ ${APP_FEATURE_FIELDS} }`;


export const CONTACT_QUERY = `*[_type == "contactPage"][0]{
  "contactHero": hero,
  "officeInfo": officeInfo,
  "socialLinks": socialLinks
}`;


export const WAITLIST_QUERY = `*[_type == "waitlistPage"][0]{
  launchDate, eyebrow, title, description,
  stats, form, launchMessage, features,
  "avatars": avatars[].asset->url,
  "appMockups": appMockups[].asset->url
}`;


export const GET_INVOLVED_QUERY = `*[_type == "getInvolvedPage"][0]{
  "heroData": hero,
  "volunteerData": {
    "badge": volunteer.badge, "title": volunteer.title, "description": volunteer.description,
    "image": volunteer.image.asset->url, "stats": volunteer.stats,
    "opportunities": volunteer.opportunities
  },
  "donationData": { "badge": donation.badge, "title": donation.title,
    "description": donation.description, "stats": donation.stats },
  "careersCTA": careersCTA
}`;

export const HOME_QUERY = `*[_type == "homePage"][0]{
  "heroSlides": heroSlides[]{
    id, eyebrow, description, primaryBtn, primaryLink, secondaryBtn, secondaryLink,
    "image": image.asset->url,
    "title": { "before": titleBefore, "highlight": titleHighlight }
  },
  "impactSection": {
    "eyebrow": impact.eyebrow, "title": impact.title,
    "areas": impact.areas[]{ iconName, colorTheme, title, description },
    "banner": {
      "badge": impact.banner.badge, "title": impact.banner.title,
      "description": impact.banner.description,
      "videoSrc": impact.banner.video.asset->url
    }
  },
  "missionSection": { "eyebrow": mission.eyebrow, "title": mission.title, "steps": mission.steps },
  "storySection": {
    "eyebrow": story.eyebrow, "title": story.title, "description": story.description,
    "quote": story.quote, "image": story.image.asset->url, "cta": story.cta
  },
  "appShowcaseSection": {
    "eyebrow": appShowcase.eyebrow, "title": appShowcase.title, "description": appShowcase.description,
    "primaryCta": appShowcase.primaryCta, "secondaryCta": appShowcase.secondaryCta,
    "storeLinks": appShowcase.storeLinks, "floatingCard": appShowcase.floatingCard,
    "videoSrc": appShowcase.video.asset->url
  },
  "sdgSection": {
    "eyebrow": sdg.eyebrow, "title": sdg.title,
    "goals": sdg.goals[]{ number, color, title, description, "image": image.asset->url }
  },
  "ctaSection": cta
}`;