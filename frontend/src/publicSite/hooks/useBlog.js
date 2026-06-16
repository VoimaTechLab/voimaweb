import {
    communityStories as fbCommunity,
    featuredPost as fbFeatured,
    posts as fbPosts,
} from "@/publicSite/data/blogData";
import { getBlogData, getBlogPost } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

/*  Blog list (hero/featured/posts/community)  */
export function useBlog() {
  const [data, setData] = useState({
    featuredPost: fbFeatured,
    posts: fbPosts,
    communityStories: fbCommunity,
  });

  useEffect(() => {
    getBlogData().then((d) => {
      if (!d) return; // keep static fallback
      setData({
        featuredPost: d.featuredPost || fbFeatured,
        posts: d.posts.length ? d.posts : fbPosts,
        communityStories: d.communityStories.length ? d.communityStories : fbCommunity,
      });
    });
  }, []);

  return data;
}

/*  Single post (detail page)  */
const staticFind = (slug) =>
  [
    fbFeatured,
    ...fbPosts,
    ...fbCommunity.map((s) => ({
      ...s,
      category: "Community Story",
      readTime: "4 min read",
      publishedAt: "Community Submission",
      media: { type: "image", src: s.image },
    })),
  ].find((p) => p.slug === slug) || null;

export function useBlogPost(slug) {
  const [post, setPost] = useState(() => staticFind(slug));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getBlogPost(slug).then((p) => {
      if (!mounted) return;
      setPost(p || staticFind(slug)); // Sanity first, else static
      setLoading(false);
    });
    return () => { mounted = false; };
  }, [slug]);

  return { post, loading };
}