export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  maxWidth = "max-w-3xl",
  eyebrowClassName = "text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]/70",
  titleClassName = "mt-6 text-4xl font-bold leading-tight text-[#BC1D26] md:text-5xl",
  descriptionClassName = "mx-auto mt-8 max-w-2xl text-lg leading-9 text-black/65",
}) {
  const alignmentClass =
    align === "center" ? `mx-auto text-center ${maxWidth}` : maxWidth;

  return (
    <div className={alignmentClass}>
      {eyebrow ? (
        <span className={`inline-block ${eyebrowClassName}`}>{eyebrow}</span>
      ) : null}

      {title ? <h2 className={titleClassName}>{title}</h2> : null}

      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
    </div>
  );
}
