import type { Metadata } from "next";
import { VltNetShowcase } from "@/components/vltnet-showcase";
import { requireStudy } from "@/data/portfolio";
import { JsonLd, caseStudyJsonLd } from "@/lib/json-ld";

const study = requireStudy("vltnet");

export const metadata: Metadata = {
  title: `${study.shortName} — Case Study`,
  description: study.metaDescription,
  alternates: { canonical: `/work/${study.slug}` },
  openGraph: {
    title: `${study.shortName} — Case Study`,
    description: study.metaDescription,
    url: `/work/${study.slug}`,
    type: "article",
  },
};

export default function VltNetPage() {
  return (
    <>
      <VltNetShowcase />
      <JsonLd data={caseStudyJsonLd(study) ?? {}} />
    </>
  );
}
