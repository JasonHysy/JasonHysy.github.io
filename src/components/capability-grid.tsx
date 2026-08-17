import { capabilities } from "@/data/portfolio";

/** Four structured capability blocks — systems, not a logo wall. */
export function CapabilityGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 dark:border-line-dark dark:bg-line-dark">
      {capabilities.blocks.map((block) => (
        <div key={block.index} className="bg-paper p-6 md:p-8 dark:bg-navy">
          <p className="eyebrow">
            <span className="text-accent-strong dark:text-accent">{block.index}</span>
            <span aria-hidden="true" className="mx-3 h-px w-6 bg-line align-middle dark:bg-line-dark" />
            {block.title}
          </p>
          <h3 className="mt-4 font-serif text-xl leading-snug md:text-2xl">
            {block.title}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft md:text-[0.95rem] dark:text-slate-soft">
            {block.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {block.items.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
