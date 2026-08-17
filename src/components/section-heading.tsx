interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

/** Editorial section header: index · rule · eyebrow, then a serif title. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="eyebrow flex items-center gap-3">
        <span className="text-accent-strong dark:text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line dark:bg-line-dark" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.12] dark:text-paper">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg dark:text-slate-soft">
          {description}
        </p>
      ) : null}
    </div>
  );
}
