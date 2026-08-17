import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { requireStudy } from "@/data/portfolio";
import { JsonLd, caseStudyJsonLd } from "@/lib/json-ld";

const study = requireStudy("prismasub");

export const metadata: Metadata = {
  title: `${study.name} — Case Study`,
  description: study.metaDescription,
  alternates: { canonical: `/work/${study.slug}` },
  openGraph: {
    title: `${study.name} — Case Study`,
    description: study.metaDescription,
    url: `/work/${study.slug}`,
    type: "article",
  },
};

export default function PrismaSubPage() {
  return (
    <>
      <CaseStudyLayout study={study} index="01" />
      <JsonLd data={caseStudyJsonLd(study) ?? {}} />
    </>
  );
}
