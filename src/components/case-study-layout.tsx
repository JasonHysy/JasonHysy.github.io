import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies, caseStudyOrder, type CaseStudy } from "@/data/portfolio";
import { ArchitectureDiagram } from "./architecture-diagram";
import { ExternalLink } from "./external-link";

interface CaseStudyLayoutProps {
  study: CaseStudy;
  /** Section number prefix, e.g. "01". */
  index: string;
}

/**
 * Shared case-study page: header block, numbered sections with typed blocks
 * (paragraph / bullets / quote / architecture), and a "more work" rail.
 */
export function CaseStudyLayout({ study, index }: CaseStudyLayoutProps) {
  const ordered = caseStudyOrder.map((slug) =>
    caseStudies.find((s) => s.slug === slug)
  ).filter((s): s is CaseStudy => Boolean(s));
  const headerLinks = study.links.filter(
    (link) => link.external || link.href !== `/work/${study.slug}`
  );

  return (
    <article>
      {/* Header */}
      <div className="border-b border-line dark:border-line-dark">
        <div className="shell py-12 md:py-16">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-accent-strong dark:text-slate-soft dark:hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all work
          </Link>
          <p className="eyebrow mt-8">{study.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">
            {study.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft dark:text-slate-soft">
            {study.intro}
          </p>
          <dl className="mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-3">
            <div>
              <dt className="eyebrow">Role</dt>
              <dd className="mt-1.5 text-sm font-medium">{study.role}</dd>
            </div>
            <div>
              <dt className="eyebrow">Timeline</dt>
              <dd className="mt-1.5 text-sm font-medium">{study.dates}</dd>
            </div>
            <div>
              <dt className="eyebrow">Context</dt>
              <dd className="mt-1.5 text-sm font-medium">
                {study.location ?? study.eyebrow}
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            {headerLinks.map((link) =>
              link.external ? (
                <ExternalLink key={link.label} href={link.href} className="btn-primary">
                  {link.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
      </div>

      {/* Sections */}
      <div className="shell py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-16 md:gap-20">
          {study.sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className={`w-full ${
                section.blocks.some((b) => b.type === "architecture")
                  ? "max-w-5xl"
                  : "max-w-3xl"
              }`}
            >
              <p className="eyebrow flex items-center gap-3">
                <span className="text-accent-strong dark:text-accent">
                  {index} · {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="h-px w-8 bg-line dark:bg-line-dark" />
                <span>{section.heading}</span>
              </p>
              <h2
                id={`${section.id}-title`}
                className="mt-4 font-serif text-2xl leading-snug tracking-tight md:text-3xl"
              >
                {section.heading}
              </h2>
              <div className="mt-6 space-y-6">
                {section.blocks.map((block, bi) => (
                  <BlockView key={bi} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* More work rail */}
      <nav aria-label="More projects" className="border-t border-line dark:border-line-dark">
        <div className="shell py-12 md:py-16">
          <p className="eyebrow mb-6">More work</p>
          <div className="grid gap-4 md:grid-cols-3">
            {ordered.map((s) =>
              s.slug === study.slug ? (
                <div
                  key={s.slug}
                  aria-current="page"
                  className="panel flex items-center justify-between gap-3 rounded-xl p-5 opacity-55"
                >
                  <span>
                    <span className="eyebrow block">Current project</span>
                    <span className="mt-2 block font-serif text-lg leading-snug">
                      {s.shortName ?? s.name}
                    </span>
                  </span>
                </div>
              ) : (
                <Link
                  key={s.slug}
                  href={`/work/${s.slug}`}
                  className="panel group flex items-center justify-between gap-3 rounded-xl p-5 transition-colors hover:border-accent"
                >
                  <span>
                    <span className="eyebrow block">{s.eyebrow}</span>
                    <span className="mt-2 block font-serif text-lg leading-snug">
                      {s.shortName ?? s.name}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-accent-strong dark:text-slate-soft dark:group-hover:text-accent"
                    aria-hidden="true"
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </article>
  );
}

function BlockView({ block }: { block: CaseStudy["sections"][number]["blocks"][number] }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="max-w-3xl text-base leading-relaxed text-ink-soft md:text-lg dark:text-slate-soft">
          {block.text}
        </p>
      );
    case "bullets":
      return (
        <div>
          {block.heading ? (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft dark:text-slate-soft">
              {block.heading}
            </p>
          ) : null}
          <ul className="space-y-3">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-mint"
                />
                <span className="max-w-3xl text-sm leading-relaxed text-ink-soft md:text-base dark:text-slate-soft">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-accent pl-5 md:pl-6 dark:border-mint">
          <p className="font-serif text-xl italic leading-snug md:text-2xl">
            {block.text}
          </p>
        </blockquote>
      );
    case "architecture":
      return (
        <div>
          <ArchitectureDiagram flow={block.flow} />
          {block.caption ? (
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft dark:text-slate-soft">
              {block.caption}
            </p>
          ) : null}
        </div>
      );
    default:
      return null;
  }
}
