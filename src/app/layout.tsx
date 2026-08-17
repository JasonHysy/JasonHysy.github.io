import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@fontsource-variable/inter";
import "@fontsource/newsreader/400.css";
import "@fontsource/newsreader/400-italic.css";
import "@fontsource/newsreader/500.css";
import "@fontsource/newsreader/600.css";
import "@fontsource/newsreader/700.css";

import "@/styles/globals.css";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SkipLink } from "@/components/skip-link";
import { siteConfig } from "@/data/portfolio";

/**
 * Applies the saved theme before first paint to avoid a flash of the wrong
 * color scheme. Runs inline in <head>, so no client JS is needed for it.
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var dark=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",dark);}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.homeTitle,
    template: `%s — ${siteConfig.shortName}`,
  },
  description: siteConfig.homeDescription,
  applicationName: `${siteConfig.shortName} — Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  keywords: [
    "Software Engineer",
    "Applied AI",
    "Machine Learning",
    "Computer Vision",
    "Full-Stack Engineer",
    "PrismaSub",
    "RAG",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.shortName,
    title: siteConfig.homeTitle,
    description: siteConfig.homeDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.homeTitle,
    description: siteConfig.homeDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0b111a" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <SkipLink />
        <Navigation />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
