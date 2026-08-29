import type { Metadata } from "next";

import { CaseStudyLayout } from "@/components/case-study-layout";
import { requireStudy } from "@/data/portfolio";
import { JsonLd, caseStudyJsonLd } from "@/lib/json-ld";

const study = requireStudy("visionassist");

export const metadata: Metadata = {
  title: `${study.name} — Case Study`,
  description: study.metaDescription,
  alternates: { canonical: `/work/${study.slug}` },
  openGraph: {
    title: `${study.name} — Case Study`,
    description: study.metaDescription,
    url: `/work/${study.slug}`,
    type: "article",
    images: [
      {
        url: "/projects/visionassist/overview.png",
        width: 1200,
        height: 630,
        alt: "VisionAssist wearable iPhone concept and perception architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${study.name} — Case Study`,
    description: study.metaDescription,
    images: ["/projects/visionassist/overview.png"],
  },
};

export default function VisionAssistPage() {
  return (
    <>
      <CaseStudyLayout study={study} index="02" />
      <JsonLd data={caseStudyJsonLd(study) ?? {}} />
    </>
  );
}
