export default function LaunchCTA() {
  return (
    <section className="px-6 py-32">
      <div
        className="
          mx-auto
          max-w-6xl
          border-4 border-black
          shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
          bg-[#BC1D26]
          p-16
          text-center
          text-white
        "
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-none font-heading tracking-tight">
          The future of healthcare support is almost here.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-white/90 font-semibold">
          Join the waitlist today and get early access,
          launch updates and exclusive previews.
        </p>

        <a
          href="#countdown"
          className="
            mt-10
            inline-block
            bg-white border-2 border-black
            px-8 py-4
            text-sm font-black uppercase tracking-wider
            text-[#BC1D26]
            shadow-[6px_6px_0px_rgba(0,0,0,1)]
            transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
          "
        >
          Join Waitlist
        </a>
      </div>
    </section>
  );
}