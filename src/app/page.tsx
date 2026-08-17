import type { Metadata } from "next";

import { AboutSection } from "@/components/about-section";
import { CapabilityGrid } from "@/components/capability-grid";
import { ContactSection } from "@/components/contact-section";
import { EducationPublication } from "@/components/education-publication";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { ProofStrip } from "@/components/proof-strip";
import { SectionHeading } from "@/components/section-heading";
import { WorkSection } from "@/components/work-section";
import { capabilities, experience, siteConfig } from "@/data/portfolio";
import { JsonLd, personJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: siteConfig.homeTitle,
  description: siteConfig.homeDescription,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <WorkSection />
      <Experience />
      <Capabilities />
      <AboutSection />
      <EducationPublication />
      <ContactSection />
      <JsonLd data={personJsonLd()} />
    </>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-line dark:border-line-dark"
    >
      <div className="shell py-20 md:py-28">
        <div id="experience-heading">
          <SectionHeading
            index="03"
            eyebrow={experience.eyebrow}
            title={experience.title}
            description={experience.description}
          />
        </div>
        <div className="max-w-3xl">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="border-t border-line bg-paper-deep/40 dark:border-line-dark dark:bg-navy-deep/30"
    >
      <div className="shell py-20 md:py-28">
        <div id="capabilities-heading">
          <SectionHeading
            index="04"
            eyebrow={capabilities.eyebrow}
            title={capabilities.title}
            description={capabilities.description}
          />
        </div>
        <CapabilityGrid />
      </div>
    </section>
  );
}
