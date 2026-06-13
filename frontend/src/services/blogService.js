import { sanity } from "./sanityClient";

export const blogService = {
  getAll: () =>
    sanity.fetch(`*[_type == "post"] | order(publishedAt desc){
      _id, title, "slug": slug.current, excerpt, coverImage,
      "author": author->name, publishedAt
    }`),

  getBySlug: (slug) =>
    sanity.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        title, body, coverImage, publishedAt, "author": author->name
      }`,
      { slug }
    ),
};