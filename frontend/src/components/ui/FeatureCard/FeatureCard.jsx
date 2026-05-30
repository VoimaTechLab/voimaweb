export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgClassName,
  iconColorClassName,
}) {
  return (
    <div
      className="
        rounded-[28px]
        border border-black/5
        bg-white
        p-8
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div
        className={`
          mb-6
          flex h-14 w-14
          items-center justify-center
          rounded-2xl
          ${iconBgClassName}
          ${iconColorClassName}
        `}
      >
        <Icon size={24} strokeWidth={2.2} />
      </div>

      <h3 className="text-2xl font-bold text-[#BC1D26]">{title}</h3>

      <p className="mt-4 leading-8 text-black/65">{description}</p>
    </div>
  );
}
