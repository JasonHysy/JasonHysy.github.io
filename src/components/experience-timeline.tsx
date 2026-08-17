import { experience } from "@/data/portfolio";

/** Compact role timeline with a ruled rail. */
export function ExperienceTimeline() {
  return (
    <ol className="relative">
      {experience.entries.map((entry) => (
        <li
          key={entry.org}
          className="relative border-l border-line pb-10 pl-6 last:pb-0 md:pl-8 dark:border-line-dark"
        >
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent-strong bg-paper dark:border-accent dark:bg-navy"
          />
          <p className="eyebrow">
            {entry.period} · {entry.location}
          </p>
          <h3 className="mt-2 font-serif text-xl leading-snug md:text-2xl">
            {entry.role}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-accent-strong dark:text-accent">
            {entry.org}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base dark:text-slate-soft">
            {entry.description}
          </p>
          {entry.tech ? (
            <ul className="mt-4 flex max-w-2xl flex-wrap gap-2">
              {entry.tech.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
