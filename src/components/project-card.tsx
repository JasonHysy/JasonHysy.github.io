import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/portfolio";
import { ArchitectureDiagram } from "./architecture-diagram";
import { ExternalLink } from "./external-link";

/** First architecture flow defined in a case study (used on cards). */
export function getArchitectureFlow(study: CaseStudy) {
  for (const section of study.sections) {
    for (const block of section.blocks) {
      if (block.type === "architecture") return block.flow;
    }
  }
  return null;
}

/** Large featured card for the flagship project. */
export function FeaturedProjectCard({ study }: { study: CaseStudy }) {
  const flow = getArchitectureFlow(study);

  return (
    <article className="panel group relative overflow-hidden rounded-2xl">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-line p-6 md:p-10 lg:border-b-0 lg:border-r dark:border-line-dark">
          <p className="eyebrow">01 — {study.eyebrow}</p>
          <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            {study.title}
          </h3>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft dark:text-slate-soft">
            {study.role} · {study.dates}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft dark:text-slate-soft">
            {study.intro}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {study.tags.slice(0, 8).map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            {study.links.map((link) =>
              link.external ? (
                <ExternalLink
                  key={link.label}
                  href={link.href}
                  className="btn-primary"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </ExternalLink>
              ) : (
                <Link key={link.label} href={link.href} className="btn-secondary">
                  {link.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )
            )}
          </div>
          {study.publicNote ? (
            <p className="mt-5 font-mono text-xs text-teal-ink dark:text-mint">
              <span aria-hidden="true" className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-teal-ink align-middle dark:bg-mint" />
              {study.publicNote}
            </p>
          ) : null}
        </div>
        {flow ? (
          <div className="bg-paper-deep/50 p-6 md:p-8 dark:bg-navy-deep/40">
            <ArchitectureDiagram flow={flow} compact />
          </div>
        ) : null}
      </div>
    </article>
  );
}

/** Standard card for the remaining projects. */
export function ProjectCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: string;
}) {
  return (
    <article className="panel group relative flex flex-col rounded-2xl p-6 transition-colors duration-200 hover:border-accent md:p-8 dark:hover:border-accent">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">
            {index} — {study.eyebrow}
          </p>
          <h3 className="mt-3 font-serif text-2xl leading-snug tracking-tight md:text-[1.65rem]">
            <Link
              href={`/work/${study.slug}`}
              className="transition-colors hover:text-accent-strong dark:hover:text-accent"
            >
              {study.shortName ?? study.name}
            </Link>
          </h3>
        </div>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-ink-soft transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong dark:text-slate-soft dark:group-hover:text-accent"
          aria-hidden="true"
        />
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-[0.95rem] dark:text-slate-soft">
        {study.intro}
      </p>
      {study.publicNote ? (
        <p className="mt-3 font-mono text-xs text-teal-ink dark:text-mint">
          <span aria-hidden="true" className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-teal-ink align-middle dark:bg-mint" />
          {study.publicNote}
        </p>
      ) : null}
      {study.result ? (
        <p className="mt-3 font-mono text-xs text-teal-ink dark:text-mint">
          {study.result}
        </p>
      ) : null}
      <ul className="mt-5 flex flex-wrap gap-2">
        {study.tags.slice(0, 6).map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2 pt-1">
        {study.links.map((link) =>
          link.external ? (
            <ExternalLink
              key={link.label}
              href={link.href}
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong dark:text-accent"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </ExternalLink>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong dark:text-accent"
            >
              {link.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )
        )}
      </div>
    </article>
  );
}
