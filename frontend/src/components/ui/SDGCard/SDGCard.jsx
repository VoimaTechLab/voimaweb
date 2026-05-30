export default function SDGCard({ number, image, color, title, description }) {
  return (
    <div
      className="
        group relative flex min-h-[420px]
        flex-col justify-end
        overflow-hidden
        rounded-[32px]
        p-8
        text-white
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
      "
      style={{ backgroundColor: color }}
    >
      <img
        src={image}
        alt={title}
        className="
          absolute inset-0
          h-full w-full
          object-cover
          opacity-25
          transition-all duration-500
          group-hover:scale-110
          group-hover:opacity-30
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/70
          via-black/30
          to-black/10
        "
      />

      <div className="relative z-10">
        <div className="text-6xl font-black text-white/20">{number}</div>

        <h3 className="mt-4 text-2xl font-bold leading-snug text-white">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-white/85">{description}</p>
      </div>
    </div>
  );
}
