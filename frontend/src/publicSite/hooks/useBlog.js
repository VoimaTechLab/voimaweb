import {
    communityStories as fbCommunity,
    featuredPost as fbFeatured,
    blogHero as fbHero,
    posts as fbPosts,
} from "@/publicSite/data/blogData";
import { getBlogData, getBlogPost } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

/*  Blog list (hero/featured/posts/community)  */
export function useBlog() {
  const [data, setData] = useState({
    hero: fbHero,
    featuredPost: fbFeatured,
    posts: fbPosts,
    communityStories: fbCommunity,
  });

  useEffect(() => {
    getBlogData().then((d) => {
      if (!d) return; // keep static fallback
      setData({
        hero: d.page || fbHero,
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

export function useBlogPost(slug, initialPost) {
  const [post, setPost] = useState(() => initialPost || staticFind(slug));
  const [loading, setLoading] = useState(() => !initialPost && !staticFind(slug));

  useEffect(() => {
    let mounted = true;
    getBlogPost(slug).then((p) => {
      if (!mounted) return;
      if (p) {
        setPost(p);
      } else if (!initialPost) {
        setPost(staticFind(slug));
      }
      setLoading(false);
    });
    return () => { mounted = false; };
  }, [slug, initialPost]);

  return { post, loading };
}