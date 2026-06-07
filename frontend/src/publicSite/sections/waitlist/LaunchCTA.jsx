export default function LaunchCTA() {
  return (
    <section className="px-6 py-32">
      <div
        className="
          mx-auto
          max-w-6xl
          rounded-[40px]
          bg-[#BC1D26]
          p-16
          text-center
          text-white
        "
      >
        <h2 className="text-5xl font-bold">
          The future of healthcare support is almost here.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-white/80">
          Join the waitlist today and get early access,
          launch updates and exclusive previews.
        </p>

        <a
          href="#countdown"
          className="
            mt-10
            inline-block
            rounded-full
            bg-white
            px-8
            py-4
            font-semibold
            text-[#BC1D26]
          "
        >
          Join Waitlist
        </a>
      </div>
    </section>
  );
}