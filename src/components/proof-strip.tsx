import { proofStrip } from "@/data/portfolio";
import { CountUp } from "./count-up";

/** Four contextual evidence facts with a hairline grid. */
export function ProofStrip() {
  return (
    <section aria-label="Key evidence" className="border-b border-line dark:border-line-dark">
      <div className="shell py-10 md:py-14">
        <p className="eyebrow flex items-center gap-3">
          <span className="text-accent-strong dark:text-accent">01</span>
          <span aria-hidden="true" className="h-px w-8 bg-line dark:bg-line-dark" />
          <span>{proofStrip.heading}</span>
        </p>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4 dark:border-line-dark dark:bg-line-dark">
          {proofStrip.items.map((item) => (
            <div key={item.label} className="bg-paper p-6 md:p-7 dark:bg-navy">
              <p className="eyebrow">{item.label}</p>
              <p className="mt-3 font-serif text-[1.9rem] leading-tight tracking-tight md:text-[2.1rem]">
                {item.count ? (
                  <CountUp
                    value={item.count.value}
                    decimals={item.count.decimals ?? 0}
                    prefix={item.count.prefix ?? ""}
                    suffix={item.count.suffix}
                    className="tabular-nums"
                  />
                ) : (
                  item.value
                )}
              </p>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-ink-soft dark:text-slate-soft">
                {item.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
