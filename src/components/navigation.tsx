"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";

const SECTION_IDS = ["work", "experience", "about", "contact"];

/** Sticky header with scroll-spy on the home page and a mobile menu. */
export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const onHome = pathname === "/";

  // Close the mobile menu when navigating (adjust state during render —
  // the React-recommended pattern for deriving state from a prop change).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Scroll spy — highlights the section currently in view (home only).
  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [onHome]);

  // Close the mobile menu on Escape.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const active = onHome ? activeSection : null;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md dark:border-line-dark dark:bg-navy/90">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-lg"
          aria-label={`${siteConfig.shortName} — home`}
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-serif text-sm font-semibold text-paper transition-colors group-hover:bg-accent-strong dark:bg-paper dark:text-navy dark:group-hover:bg-accent dark:group-hover:text-white"
          >
            {siteConfig.initials}
          </span>
          <span className="hidden font-serif text-base font-semibold tracking-tight sm:block">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={
                onHome && active === item.href.slice(2) ? "true" : undefined
              }
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                onHome && active === item.href.slice(2)
                  ? "text-accent-strong dark:text-accent"
                  : "text-ink-soft hover:text-ink dark:text-slate-soft dark:hover:text-paper"
              }`}
            >
              {item.label}
            </a>
          ))}
          {siteConfig.resumeUrl ? (
            <a
              href={siteConfig.resumeUrl}
              className="ml-2 rounded-lg border border-line px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent-strong dark:border-line-dark dark:text-paper dark:hover:border-accent dark:hover:text-accent"
            >
              Resume
            </a>
          ) : null}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent-strong md:hidden dark:border-line-dark dark:text-slate-soft dark:hover:border-accent dark:hover:text-accent"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-paper md:hidden dark:border-line-dark dark:bg-navy"
        >
          <div className="shell flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink dark:text-slate-soft dark:hover:bg-navy-soft dark:hover:text-paper"
              >
                {item.label}
              </a>
            ))}
            {siteConfig.resumeUrl ? (
              <a
                href={siteConfig.resumeUrl}
                className="mt-2 rounded-lg border border-line px-3 py-3 text-center text-base font-medium text-ink transition-colors hover:border-accent dark:border-line-dark dark:text-paper"
              >
                Resume
              </a>
            ) : null}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
