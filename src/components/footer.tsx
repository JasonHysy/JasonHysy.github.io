import Link from "next/link";
import { Mail } from "lucide-react";
import { footer, navItems, siteConfig } from "@/data/portfolio";
import { ExternalLink } from "./external-link";

/** Site footer with navigation and confirmed public links. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-deep/60 dark:border-line-dark dark:bg-navy-deep/60">
      <div className="shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-lg"
              aria-label={`${siteConfig.shortName} — home`}
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-serif text-sm font-semibold text-paper dark:bg-paper dark:text-navy"
              >
                {siteConfig.initials}
              </span>
              <span className="font-serif text-base font-semibold tracking-tight">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft dark:text-slate-soft">
              {footer.tagline}
            </p>
            <p className="mt-4 font-mono text-xs text-ink-soft dark:text-slate-soft">
              {siteConfig.location}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="eyebrow">{footer.navigationLabel}</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-accent-strong dark:text-slate-soft dark:hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">{footer.externalLabel}</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <ExternalLink
                  href={siteConfig.links.prismaSub}
                  className="text-sm text-ink-soft transition-colors hover:text-accent-strong dark:text-slate-soft dark:hover:text-accent"
                >
                  PrismaSub — product
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={siteConfig.links.vltNet}
                  className="text-sm text-ink-soft transition-colors hover:text-accent-strong dark:text-slate-soft dark:hover:text-accent"
                >
                  VLTNet — research
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={siteConfig.links.githubRag}
                  className="text-sm text-ink-soft transition-colors hover:text-accent-strong dark:text-slate-soft dark:hover:text-accent"
                >
                  Video QA RAG — code
                </ExternalLink>
              </li>
            </ul>
            <p className="eyebrow mt-6">{footer.contactLabel}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-accent-strong dark:text-slate-soft dark:hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 md:flex-row md:items-center md:justify-between dark:border-line-dark">
          <p className="font-mono text-xs text-ink-soft dark:text-slate-soft">
            © {year} {siteConfig.name}
          </p>
          <p className="font-mono text-xs text-ink-soft dark:text-slate-soft">
            Software Engineering · Applied AI
          </p>
        </div>
      </div>
    </footer>
  );
}
