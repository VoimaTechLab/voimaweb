import { useBlogPost } from "@/publicSite/hooks/useBlog";
import { Link, useParams } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

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
        <h2 className="text-4xl font-black uppercase text-black font-heading tracking-tight">Article Not Found</h2>
        <Link
          to="/blog"
          className="mt-8 inline-flex bg-[#BC1D26] border-2 border-black px-6 py-3 font-black uppercase tracking-widest text-white shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
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
            className="mb-10 inline-flex items-center gap-2 border-2 border-black bg-white px-5 py-3 font-black uppercase tracking-widest text-xs text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(188,29,38,1)]"
          >
            ← Back to Blog
          </Link>

          <ScrollReveal variant="fade-up">
            <div className="mb-4">
              <span className="inline-block bg-[#BC1D26] border-2 border-black px-4 py-1.5 shadow-[3px_3px_0px_rgba(0,0,0,1)] text-xs font-black uppercase tracking-[0.2em] text-white">
                {post.category}
              </span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-black font-heading tracking-tight">
              {post.title}
            </h1>

            <div className="mt-6 sm:mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center border-2 border-black bg-[#BC1D26]/10 font-black text-black">
                {post.author?.initials || "VA"}
              </div>
              <div>
                <h3 className="font-black uppercase text-black">{post.author?.name || "Voima"}</h3>
                <p className="text-xs sm:text-sm font-semibold text-black/75">
                  {post.publishedAt} • {post.readTime}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale-in" delay={0.15}>
            {post.media?.type === "video" ? (
              <video controls className="mt-8 sm:mt-12 w-full border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]">
                <source src={mediaSrc} />
              </video>
            ) : (
              <img
                src={mediaSrc}
                alt={post.title}
                className="mt-8 sm:mt-12 h-[260px] sm:h-[400px] md:h-[550px] w-full border-4 border-black object-cover shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]"
              />
            )}
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="mt-10 sm:mt-16 space-y-6 sm:space-y-8">
              {post.story?.content?.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg leading-7 sm:leading-9 text-black/80 font-medium">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="mt-10 sm:mt-16 border-4 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)] p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black font-heading tracking-tight">Key Takeaways</h3>
              <ul className="mt-6 sm:mt-8 space-y-4">
                {post.story?.highlights?.map((item, index) => (
                  <li key={index} className="text-base sm:text-lg font-semibold text-black/75 flex gap-3">
                    <span className="text-[#BC1D26] font-black">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}