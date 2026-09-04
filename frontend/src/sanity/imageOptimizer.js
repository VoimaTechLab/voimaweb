import { urlFor } from "./client";

/**
 * Transforms a Sanity image reference or asset object into a responsive,
 * modern format URL (WebP/AVIF) with bounded dimensions and compression.
 *
 * @param {object|string} source - Sanity image object or direct URL string
 * @param {object} options
 * @param {number} [options.width=800] - Max width in pixels
 * @param {number} [options.quality=80] - Image quality (1-100)
 * @param {string} [options.fit='max'] - Crop/fit behavior ('max', 'crop', 'fill')
 * @returns {string|null} Optimized image URL
 */
export function getOptimizedSanityUrl(source, { width = 800, quality = 80, fit = "max" } = {}) {
  if (!source) return null;

  // Direct string URL (e.g. local assets or already resolved URLs)
  if (typeof source === "string") {
    return source;
  }

  // Handle Sanity image object
  try {
    const builder = urlFor(source);
    if (width) builder.width(width);
    if (quality) builder.quality(quality);
    if (fit) builder.fit(fit);
    // Automatically serve WebP or AVIF based on browser Accept headers
    builder.auto("format");
    return builder.url();
  } catch {
    // Fallback to raw asset URL if builder encounters an error
    return source?.asset?.url || null;
  }
}
