/**
 * JSON-LD structured data. Only confirmed, public facts are emitted — no
 * LinkedIn, no unverified claims (see CONTENT_TODO.md).
 */
import { siteConfig, type CaseStudy } from "@/data/portfolio";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function personJsonLd() {
  const sameAs = [
    siteConfig.links.linkedin,
    siteConfig.links.githubProfile,
  ].filter(Boolean) as string[];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    jobTitle: siteConfig.headline,
    url: siteConfig.siteUrl,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Quincy",
      addressRegion: "MA",
      addressCountry: "US",
    },
    sameAs,
  };
}

export function prismaSubJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PrismaSub",
    url: siteConfig.links.prismaSub,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Windows",
    description:
      "Real-time AI subtitle translation for Windows: OCR, cloud LLM translation workflows, and bilingual subtitle rendering.",
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.siteUrl },
  };
}

export function vltNetJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    name: "Zero-Shot Object Navigation with Vision-Language Models Reasoning",
    url: siteConfig.links.vltNet,
    description:
      "A modular vision-language navigation system for zero-shot object navigation, co-authored and published at ICPR 2024.",
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.siteUrl },
    isPartOf: { "@type": "PublicationEvent", name: "ICPR 2024" },
  };
}

export function ragJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "Multimodal Video QA RAG",
    codeRepository: siteConfig.links.githubRag,
    programmingLanguage: "Python",
    description:
      "A multimodal retrieval system for answering questions about video content using frames, subtitles, embeddings, vector search, and a locally hosted language model. Two-person NYU course project.",
    contributor: { "@type": "Person", name: siteConfig.name },
  };
}

export function caseStudyJsonLd(study: CaseStudy) {
  switch (study.slug) {
    case "prismasub":
      return prismaSubJsonLd();
    case "vltnet":
      return vltNetJsonLd();
    case "multimodal-video-qa-rag":
      return ragJsonLd();
    default:
      return null;
  }
}
