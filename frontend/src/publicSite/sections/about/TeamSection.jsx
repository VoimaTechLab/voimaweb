import { teamData } from "@/publicSite/data/aboutData";

export default function TeamSection() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
            {teamData.eyebrow}
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#BC1D26]">
            {teamData.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-black/65">
            {teamData.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {teamData.members.map((member, index) => (
                <article
                key={index}
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border border-black/5
                    bg-white
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#BC1D26]/20
                    hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                "
                >
                {/* Glow */}
                <div
                    className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    "
                >
                    <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#BC1D26]/10 blur-3xl" />
                </div>

                {/* Image */}
                <div className="relative overflow-hidden">
                    <img
                    src={member.image}
                    alt={member.name}
                    className="
                        h-[360px]
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
                    />

                    <div
                    className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/10
                        to-transparent
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                    "
                    />
                </div>

                {/* Content */}
                <div className="relative p-7">
                    <span
                    className="
                        inline-flex
                        rounded-full
                        bg-[#BC1D26]/10
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#BC1D26]
                    "
                    >
                    {member.role}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold text-[#BC1D26]">
                    {member.name}
                    </h3>

                    {/* Hidden hover content */}
                    <div
                    className="
                        max-h-0
                        overflow-hidden
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:mt-5
                        group-hover:max-h-40
                        group-hover:opacity-100
                    "
                    >
                    <p className="text-sm leading-7 text-black/60">
                        {member.bio}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                        <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            rounded-full
                            border
                            border-black/10
                            px-4
                            py-2
                            text-sm
                            font-medium
                            transition
                            hover:border-[#BC1D26]
                            hover:text-[#BC1D26]
                        "
                        >
                        LinkedIn →
                        </a>
                    </div>
                    </div>
                </div>
                </article>
            ))}
            </div>
      </div>
    </section>
  );
}