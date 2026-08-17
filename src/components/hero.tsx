import { Mail, MapPin } from "lucide-react";
import { hero, siteConfig } from "@/data/portfolio";
import { ProfilePortrait } from "./profile-portrait";
import { Reveal } from "./reveal";

/** Above-the-fold section with the end-to-end system diagram. */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line dark:border-line-dark">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="shell relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-28">
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-accent dark:bg-mint" />
              <span>{hero.eyebrow}</span>
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] dark:text-paper">
              {hero.titleLead}{" "}
              <em className="italic text-accent-strong dark:text-accent">
                {hero.titleAccent}
              </em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl dark:text-slate-soft">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft dark:text-slate-soft">
              {hero.description}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {hero.ctas.map((cta) =>
                cta.kind === "primary" ? (
                  <a key={cta.label} href={cta.href} className="btn-primary">
                    {cta.label}
                  </a>
                ) : (
                  <a key={cta.label} href={cta.href} className="btn-secondary">
                    {cta.label}
                  </a>
                )
              )}
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-soft dark:text-slate-soft">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {siteConfig.location}
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-accent-strong dark:hover:text-accent"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:pt-1">
          <Reveal delay={0.15} className="h-full">
            <ProfilePortrait />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
