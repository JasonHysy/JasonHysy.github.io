"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Light/dark toggle. The current theme is applied by an inline script in the
 * root layout before paint; the icon swap is driven purely by CSS on the
 * `dark` class, so there is no client/server mismatch.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Storage unavailable — the class toggle still applies for this session.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent-strong dark:border-line-dark dark:text-slate-soft dark:hover:border-accent dark:hover:text-accent"
    >
      <Sun className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <Moon className="hidden h-4 w-4 dark:block" aria-hidden="true" />
    </button>
  );
}
