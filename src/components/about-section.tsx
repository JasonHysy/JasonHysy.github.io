import { about } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

/** About: the system around the model. */
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-line dark:border-line-dark"
    >
      <div className="shell grid gap-10 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div id="about-heading">
          <SectionHeading
            index="05"
            eyebrow={about.eyebrow}
            title={about.title}
          />
        </div>
        <div className="lg:pt-2">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg dark:text-slate-soft [&:not(:first-child)]:mt-5"
            >
              {paragraph}
            </p>
          ))}
          <ul className="mt-10 space-y-6">
            {about.focus.map((item, i) => (
              <li key={item.title} className="flex gap-5">
                <span className="font-mono text-xs font-medium text-accent-strong dark:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg leading-snug">{item.title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-soft dark:text-slate-soft">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
