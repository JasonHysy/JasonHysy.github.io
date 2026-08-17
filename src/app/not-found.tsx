import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies, caseStudyOrder } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const ordered = caseStudyOrder
    .map((slug) => caseStudies.find((s) => s.slug === slug))
    .filter((s): s is (typeof caseStudies)[number] => Boolean(s));

  return (
    <div className="shell py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="eyebrow flex items-center gap-3">
          <span className="text-accent-strong dark:text-accent">404</span>
          <span aria-hidden="true" className="h-px w-8 bg-line dark:bg-line-dark" />
          <span>Error — not found</span>
        </p>
        <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          This page drifted off the map.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg dark:text-slate-soft">
          The URL doesn’t match anything on this site. If you followed a link
          from somewhere, the page may have moved — the work below is still
          here.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>

      <nav aria-label="Projects" className="mt-16 border-t border-line pt-8 dark:border-line-dark">
        <p className="eyebrow mb-5">Selected work</p>
        <ul className="grid gap-3 md:grid-cols-3">
          {ordered.map((study, i) => (
            <li key={study.slug}>
              <Link
                href={`/work/${study.slug}`}
                className="panel group flex items-center justify-between gap-3 rounded-xl p-5 transition-colors hover:border-accent"
              >
                <span>
                  <span className="eyebrow block">
                    {String(i + 1).padStart(2, "0")} — {study.eyebrow}
                  </span>
                  <span className="mt-2 block font-serif text-lg leading-snug">
                    {study.shortName ?? study.name}
                  </span>
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-accent-strong dark:text-slate-soft dark:group-hover:text-accent"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
