import { useWaitlist } from "../../hooks/useWaitlist";
export default function Hero() {
  const { waitlistData, waitlistAvatars } = useWaitlist();
  return (
    <section className="px-6 pt-40 pb-20">
      <div className="mx-auto max-w-4xl text-center">

        <span
          className="
            inline-flex
            rounded-full
            bg-[#BC1D26]/10
            px-5
            py-2
            text-sm
            font-semibold
            text-[#BC1D26]
          "
        >
          {waitlistData.eyebrow}
        </span>

        <h1
        className="
            mt-5
            text-4xl
            font-bold
            leading-tight
            sm:text-5xl
            lg:text-7xl
            text-[#BC1D26]
        "
        >
          {waitlistData.title}
        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-9
            text-black/65
          "
        >
          {waitlistData.description}
        </p>

        <div className="mt-12 flex flex-col items-center">

        <div className="flex items-center">

            {waitlistAvatars.map((avatar, index) => (
            <img
                key={index}
                src={avatar}
                alt="Community member"
                className="
                h-12
                w-12
                rounded-full
                border-2
                border-white
                object-cover
                shadow-md
                "
                style={{
                marginLeft: index === 0 ? 0 : "-12px",
                }}
            />
            ))}

            <div
            className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border-2
                border-white
                bg-[#BC1D26]
                text-sm
                font-bold
                text-white
                shadow-md
            "
            >
            +
            </div>

        </div>

        <div
            className="
                flex
                flex-col
                items-center
                gap-4
                sm:flex-row
                sm:justify-center
            "
            >

        <p className="mt-4 text-xl font-bold text-[#BC1D26]">
            {waitlistData.stats.registered}+
        </p>

        <p className="text-black/50">
            {waitlistData.stats.label}
        </p>
        </div>

        </div>

      </div>
    </section>
  );
}