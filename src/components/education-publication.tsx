import { ArrowUpRight, GraduationCap } from "lucide-react";
import { educationPublication } from "@/data/portfolio";
import { ExternalLink } from "./external-link";
import { SectionHeading } from "./section-heading";

/** Education and the ICPR 2024 publication. */
export function EducationPublication() {
  return (
    <section
      aria-labelledby="education-heading"
      className="border-t border-line dark:border-line-dark"
    >
      <div className="shell py-20 md:py-28">
        <div id="education-heading">
          <SectionHeading
            index="06"
            eyebrow={educationPublication.eyebrow}
            title={educationPublication.title}
          />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="panel rounded-2xl p-6 md:p-8">
            <p className="eyebrow flex items-center gap-2">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
              Education
            </p>
            <ul className="mt-5 space-y-6">
              {educationPublication.education.map((entry) => (
                <li key={entry.degree} className="border-l-2 border-line pl-5 dark:border-line-dark">
                  <p className="font-serif text-lg leading-snug md:text-xl">
                    {entry.school}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft dark:text-slate-soft">
                    {entry.degree}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft dark:text-slate-soft">
                    {entry.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel relative rounded-2xl p-6 md:p-8">
            <p className="eyebrow flex items-center gap-2">
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-accent dark:bg-mint" />
              Publication
            </p>
            <h3 className="mt-5 font-serif text-lg leading-snug md:text-xl">
              {educationPublication.publication.title}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft dark:text-slate-soft">
              {educationPublication.publication.venue} · {educationPublication.publication.role}
            </p>
            <ExternalLink
              href={educationPublication.publication.href}
              className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong dark:text-accent"
            >
              View research project
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
