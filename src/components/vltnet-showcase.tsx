import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Asterisk, FlaskConical, Route } from "lucide-react";

import {
  caseStudies,
  caseStudyOrder,
  requireStudy,
  vltnetShowcase,
} from "@/data/portfolio";
import { ExternalLink } from "./external-link";
import { TrajectoryDemo } from "./trajectory-demo";

const study = requireStudy("vltnet");

/** Dedicated editorial research page using the real VLTNet figures and demos. */
export function VltNetShowcase() {
  const moreWork = caseStudyOrder
    .filter((slug) => slug !== "vltnet")
    .map((slug) => caseStudies.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <article>
      <header className="relative overflow-hidden border-b border-line dark:border-line-dark">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="shell relative py-12 md:py-18 lg:py-20">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-accent-strong dark:text-slate-soft dark:hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all work
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(30rem,1.08fr)] lg:gap-14">
            <div>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-accent dark:bg-mint" aria-hidden="true" />
                Published Research · ICPR 2024
              </p>
              <h1 className="mt-6 max-w-3xl font-serif text-[2.75rem] leading-[1.03] tracking-tight sm:text-5xl lg:text-[3.65rem]">
                Reasoning about where to look next.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft dark:text-slate-soft">
                {study.intro}
              </p>

              <div className="mt-7 flex flex-wrap gap-x-2 gap-y-2 text-sm leading-relaxed text-ink-soft dark:text-slate-soft">
                {vltnetShowcase.authors.map((author, index) => (
                  <span key={author.name}>
                    <span
                      className={
                        "highlight" in author && author.highlight
                          ? "font-semibold text-ink dark:text-paper"
                          : undefined
                      }
                    >
                      {author.name}
                    </span>
                    {"equalContribution" in author && author.equalContribution ? "*" : ""}
                    {index < vltnetShowcase.authors.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
              <p className="mt-2 flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.13em] text-ink-soft dark:text-slate-soft">
                <Asterisk className="h-3 w-3" aria-hidden="true" />
                Equal contribution
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ExternalLink href={study.links[0].href} className="btn-primary">
                  View original project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </ExternalLink>
                <a href="#trajectory-demo" className="btn-secondary">
                  Explore trajectories
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <ResearchFigure
              {...vltnetShowcase.heroFigure}
              caption="Language-guided frontier selection can use contextual object goals that distance-only exploration misses."
              priority
              darkFrame
            />
          </div>

          <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4 dark:border-line-dark dark:bg-line-dark">
            {vltnetShowcase.metrics.map((metric) => (
              <div key={metric.value} className="bg-paper p-5 md:p-6 dark:bg-navy">
                <dt className="text-xs leading-relaxed text-ink-soft dark:text-slate-soft">
                  {metric.label}
                </dt>
                <dd className="mt-3 font-serif text-2xl tracking-tight md:text-[1.7rem]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="border-b border-line dark:border-line-dark" aria-labelledby="approach-title">
        <div className="shell py-20 md:py-28">
          <SectionIntro
            id="approach-title"
            index="01"
            eyebrow="System architecture"
            title="One navigation loop, four inspectable decisions."
            description="VLTNet turns an open-ended language goal into a sequence of grounded decisions: understand the scene, build spatial memory, reason over unexplored frontiers, and verify the target before stopping."
          />
          <div className="mt-10">
            <ResearchFigure
              {...vltnetShowcase.pipelineFigure}
              caption="The complete VLTNet navigation loop. Open the figure for the full-resolution research diagram."
            />
          </div>
        </div>
      </section>

      <section
        className="border-b border-line bg-paper-deep/35 dark:border-line-dark dark:bg-navy-deep/30"
        aria-labelledby="modules-title"
      >
        <div className="shell py-20 md:py-28">
          <SectionIntro
            id="modules-title"
            index="02"
            eyebrow="Core modules"
            title="Decomposed so every decision can be tested."
            description="The research architecture is intentionally modular. Each stage exposes a concrete intermediate representation that can be inspected, evaluated, and ablated."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {vltnetShowcase.modules.map((module) => (
              <article
                key={module.index}
                className="panel overflow-hidden rounded-2xl transition-colors hover:border-accent"
              >
                <a
                  href={module.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open full-resolution figure for ${module.title}`}
                  className="block overflow-hidden border-b border-line bg-white p-3 dark:border-line-dark sm:p-5"
                >
                  <Image
                    src={module.image}
                    alt={module.alt}
                    width={module.width}
                    height={module.height}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="aspect-[16/8.8] w-full object-contain transition-transform duration-300 hover:scale-[1.015]"
                  />
                </a>
                <div className="p-6 sm:p-7">
                  <p className="font-mono text-[0.65rem] text-accent-strong dark:text-accent">
                    MODULE {module.index}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">
                    {module.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-slate-soft">
                    {module.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trajectory-demo" className="scroll-mt-24 border-b border-line dark:border-line-dark" aria-labelledby="trajectory-title">
        <div className="shell py-20 md:py-28">
          <SectionIntro
            id="trajectory-title"
            index="03"
            eyebrow="Trajectory demo"
            title="Watch the reasoning become movement."
            description="These recordings come from the original evaluated navigation environments. Switch goal types to see how the agent behaves under long-tail, spatial, and appearance-based instructions."
          />
          <div className="mt-12">
            <TrajectoryDemo demos={vltnetShowcase.demos} />
          </div>
        </div>
      </section>

      <section className="border-b border-line dark:border-line-dark" aria-labelledby="evidence-title">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-navy p-8 text-paper sm:p-10 dark:bg-navy-soft">
              <FlaskConical className="h-6 w-6 text-mint" aria-hidden="true" />
              <p className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mint">
                Evaluation
              </p>
              <p className="mt-4 font-serif text-5xl leading-none text-white sm:text-6xl">
                33.7%
              </p>
              <h2 id="evidence-title" className="mt-5 font-serif text-2xl leading-tight">
                Reported improvement over the baseline
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-soft">
                This result belongs to the paper&apos;s evaluated benchmark setting and comparison baseline. The system was studied through controlled experiments and ablations in RoboTHOR and PASTURE.
              </p>
            </div>

            <div className="panel rounded-2xl p-8 sm:p-10">
              <Route className="h-6 w-6 text-accent-strong dark:text-accent" aria-hidden="true" />
              <p className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent-strong dark:text-accent">
                Research contribution
              </p>
              <h2 className="mt-4 font-serif text-2xl leading-tight">
                From pipeline implementation to controlled evaluation.
              </h2>
              <ul className="mt-6 space-y-4">
                {vltnetShowcase.contributions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft dark:text-slate-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-mint" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="mx-auto mt-16 max-w-4xl border-l-2 border-accent pl-6 sm:pl-8 dark:border-mint">
            <p className="font-serif text-2xl italic leading-snug sm:text-3xl">
              “Research taught me to decompose and experimentally validate AI systems. Building production software taught me to make those systems reliable for real users.”
            </p>
          </blockquote>
        </div>
      </section>

      <nav aria-label="More projects" className="border-b border-line dark:border-line-dark">
        <div className="shell py-12 md:py-16">
          <p className="eyebrow mb-6">Continue exploring</p>
          <div className="grid gap-4 md:grid-cols-2">
            {moreWork.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="panel group flex items-center justify-between gap-4 rounded-xl p-5 transition-colors hover:border-accent"
              >
                <span>
                  <span className="eyebrow block">{item.eyebrow}</span>
                  <span className="mt-2 block font-serif text-xl">
                    {item.shortName ?? item.name}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </article>
  );
}

function SectionIntro({
  id,
  index,
  eyebrow,
  title,
  description,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow flex items-center gap-3">
        <span className="text-accent-strong dark:text-accent">{index}</span>
        <span className="h-px w-8 bg-line dark:bg-line-dark" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-5 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg dark:text-slate-soft">
        {description}
      </p>
    </div>
  );
}

function ResearchFigure({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  darkFrame = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  priority?: boolean;
  darkFrame?: boolean;
}) {
  return (
    <figure className={`overflow-hidden rounded-2xl border ${darkFrame ? "border-line-dark bg-navy-soft" : "border-line bg-white dark:border-line-dark"}`}>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open research figure at full resolution"
        className={`block p-3 sm:p-5 ${darkFrame ? "bg-navy-deep" : "bg-white"}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="h-auto w-full rounded-lg object-contain"
        />
      </a>
      <figcaption className={`flex items-center justify-between gap-4 border-t px-4 py-3 text-xs leading-relaxed sm:px-5 ${darkFrame ? "border-line-dark text-slate-soft" : "border-line text-ink-soft dark:border-line-dark dark:bg-navy-soft dark:text-slate-soft"}`}>
        <span>{caption}</span>
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      </figcaption>
    </figure>
  );
}
