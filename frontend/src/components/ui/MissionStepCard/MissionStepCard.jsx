export default function MissionStepCard({ number, title, description }) {
  return (
    <div
      className="
        group
        relative h-full
        overflow-hidden
        rounded-[36px]
        border border-black/5
        bg-white
        p-10
        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >
      <div
        className="
          absolute right-[-60px] top-[-60px]
          h-52 w-52
          rounded-full
          bg-[#BC1D26]/5
          blur-3xl
        "
      />

      <div
        className="
          relative z-10
          flex h-16 w-16
          items-center justify-center
          rounded-2xl
          bg-[#BC1D26]
          text-lg font-bold
          text-white
          shadow-lg shadow-[#BC1D26]/20
        "
      >
        {number}
      </div>

      <div className="relative z-10 mt-10">
        <h3 className="text-2xl font-bold leading-tight text-[#800000]">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-black/65">{description}</p>
      </div>
    </div>
  );
}
