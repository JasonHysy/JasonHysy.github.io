import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { proofStrip } from "@/data/portfolio";

/** Editorial proof-of-work ledger connecting claims to concrete outcomes. */
export function ProofStrip() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="border-b border-line bg-paper-deep/35 dark:border-line-dark dark:bg-navy-deep/25"
    >
      <div className="shell grid gap-12 py-16 md:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <header className="max-w-md">
          <p className="eyebrow flex items-center gap-3">
            <span className="text-accent-strong dark:text-accent">01</span>
            <span
              aria-hidden="true"
              className="h-px w-8 bg-line dark:bg-line-dark"
            />
            <span>{proofStrip.eyebrow}</span>
          </p>
          <h2
            id="proof-heading"
            className="mt-5 max-w-[11ch] font-serif text-4xl leading-[1.04] tracking-tight text-ink md:text-[2.7rem] dark:text-paper"
          >
            {proofStrip.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft dark:text-slate-soft">
            {proofStrip.description}
          </p>
        </header>

        <ol className="border-t border-line dark:border-line-dark">
          {proofStrip.items.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-4 border-b border-line py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)] lg:grid-cols-[2.5rem_minmax(0,1fr)_11rem] lg:items-center lg:gap-6 dark:border-line-dark"
            >
              <span className="font-mono text-xs text-accent-strong dark:text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <p className="eyebrow">{item.label}</p>
                <div className="mt-1.5 flex items-center gap-3">
                  <h3 className="font-serif text-[1.65rem] leading-tight tracking-tight text-ink dark:text-paper">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <Link
                      href={item.href}
                      aria-label={`Read the ${item.title} case study`}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent-strong dark:border-line-dark dark:text-slate-soft dark:hover:border-accent dark:hover:text-accent"
                    >
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft dark:text-slate-soft">
                  {item.context}
                </p>
              </div>

              <div className="sm:col-start-2 lg:col-start-3">
                <p className="font-serif text-xl leading-tight text-ink dark:text-paper">
                  {item.signal}
                </p>
                <p className="mt-1 font-mono text-[0.68rem] leading-relaxed text-ink-soft dark:text-slate-soft">
                  {item.signalNote}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
