import { useBlogPost } from "@/publicSite/hooks/useBlog";
import { Link, useParams } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();
  const { post, loading } = useBlogPost(slug);

  if (loading && !post) {
    return (
      <div className="py-40 text-center text-black/50">Loading…</div>
    );
  }

  if (!post) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-4xl font-bold text-[#BC1D26]">Article Not Found</h2>
        <Link
          to="/blog"
          className="mt-8 inline-flex rounded-full bg-[#BC1D26] px-6 py-3 text-white"
        >
          Back To Blog
        </Link>
      </div>
    );
  }

  const mediaSrc = post.media?.src || post.image;

  return (
    <main className="pt-[90px]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/blog"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 transition-all duration-300 hover:border-[#BC1D26] hover:text-[#BC1D26]"
          >
            ← Back to Blog
          </Link>

          <p className="uppercase tracking-[0.2em] text-[#BC1D26]/60">
            {post.category}
          </p>

          <h1 className="mt-4 text-5xl font-bold text-[#BC1D26] lg:text-6xl">
            {post.title}
          </h1>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#BC1D26]/10 font-bold text-[#BC1D26]">
              {post.author?.initials || "VA"}
            </div>
            <div>
              <h3 className="font-semibold">{post.author?.name || "Voima"}</h3>
              <p className="text-black/50">
                {post.publishedAt} • {post.readTime}
              </p>
            </div>
          </div>

          {post.media?.type === "video" ? (
            <video controls className="mt-12 w-full rounded-[40px]">
              <source src={mediaSrc} />
            </video>
          ) : (
            <img
              src={mediaSrc}
              alt={post.title}
              className="mt-12 h-[550px] w-full rounded-[40px] object-cover"
            />
          )}

          <div className="mt-16 space-y-8">
            {post.story?.content?.map((paragraph, index) => (
              <p key={index} className="text-lg leading-9 text-black/70">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 rounded-[32px] bg-[#fafafa] p-10">
            <h3 className="text-2xl font-bold text-[#BC1D26]">Key Takeaways</h3>
            <ul className="mt-8 space-y-4">
              {post.story?.highlights?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}