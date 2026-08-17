export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper focus:outline-2 focus:outline-offset-2 focus:outline-accent dark:focus:bg-paper dark:focus:text-navy"
    >
      Skip to content
    </a>
  );
}
