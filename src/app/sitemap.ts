import type { MetadataRoute } from "next";
import { caseStudies, siteConfig } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const workEntries: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${siteConfig.siteUrl}/work/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...workEntries,
  ];
}
