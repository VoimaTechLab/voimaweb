// src/seo/SEOHead.jsx

import { Helmet } from "react-helmet-async";

import { SEO_DEFAULTS } from "@/config/seo.config";
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function SEOHead({
  title,
  description,
  image,
  url,
  type = "website",
}) {
  const s = useSiteSettings();

  const siteTitle =
    s?.seo?.metaTitle ||
    SEO_DEFAULTS.title ||
    "Voima Initiative";

  const siteDescription =
    s?.seo?.metaDescription ||
    SEO_DEFAULTS.description ||
    "";

  const siteImage =
    s?.seo?.ogImage ||
    SEO_DEFAULTS.ogImage;

  const siteName =
    SEO_DEFAULTS.siteName || "Voima Initiative";

  const fullTitle = title
    ? `${title} — ${siteName}`
    : siteTitle;

  const metaDesc = description || siteDescription;
  const metaImage = image || siteImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={metaDesc}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={fullTitle}
      />
      <meta
        property="og:description"
        content={metaDesc}
      />
      <meta
        property="og:image"
        content={metaImage}
      />
      <meta
        property="og:type"
        content={type}
      />

      {url && (
        <meta
          property="og:url"
          content={url}
        />
      )}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={fullTitle}
      />
      <meta
        name="twitter:description"
        content={metaDesc}
      />
      <meta
        name="twitter:image"
        content={metaImage}
      />

      {/* Canonical */}
      {url && (
        <link
          rel="canonical"
          href={url}
        />
      )}
    </Helmet>
  );
}