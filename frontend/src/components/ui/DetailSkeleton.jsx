export default function DetailSkeleton({ type = "article" }) {
  return (
    <main className="pt-[90px] min-h-screen bg-[#fafafa]">
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl space-y-8 animate-pulse">
          {/* Back button placeholder */}
          <div className="h-10 w-36 rounded-full bg-black/10 border border-black/10" />

          {/* Hero Banner / Cover Media */}
          <div className="h-[380px] sm:h-[480px] w-full border-4 border-black bg-black/15 shadow-[8px_8px_0px_rgba(0,0,0,1)] flex items-end p-8">
            <div className="space-y-4 w-full max-w-2xl">
              <div className="h-6 w-32 bg-white/40 border border-black" />
              <div className="h-12 w-3/4 bg-white/60" />
              <div className="h-6 w-1/2 bg-white/40" />
            </div>
          </div>

          {/* Content Body Skeletons */}
          <div className="space-y-4 pt-8">
            <div className="h-5 w-full bg-black/10 rounded" />
            <div className="h-5 w-11/12 bg-black/10 rounded" />
            <div className="h-5 w-4/5 bg-black/10 rounded" />
            <div className="h-5 w-full bg-black/10 rounded" />
            <div className="h-5 w-3/4 bg-black/10 rounded" />
          </div>

          {type === "event" && (
            <div className="grid gap-6 md:grid-cols-3 pt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-40 border-2 border-black bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 space-y-3">
                  <div className="h-6 w-24 bg-black/10" />
                  <div className="h-4 w-full bg-black/10" />
                  <div className="h-4 w-2/3 bg-black/10" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
