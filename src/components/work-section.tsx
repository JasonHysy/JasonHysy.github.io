import { requireStudy, selectedWork } from "@/data/portfolio";
import { FeaturedProjectCard, ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

/** Selected Work: featured PrismaSub + three supporting projects. */
export function WorkSection() {
  const prismasub = requireStudy("prismasub");
  const visionAssist = requireStudy("visionassist");
  const rag = requireStudy("multimodal-video-qa-rag");
  const vltnet = requireStudy("vltnet");

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-line dark:border-line-dark"
    >
      <div className="shell py-20 md:py-28">
        <div id="work-heading">
          <SectionHeading
            index="02"
            eyebrow={selectedWork.eyebrow}
            title={selectedWork.title}
            description={selectedWork.description}
          />
        </div>
        <div className="space-y-6">
          <FeaturedProjectCard study={prismasub} />
          <div className="grid gap-6 lg:grid-cols-3">
            <ProjectCard study={visionAssist} index="02" />
            <ProjectCard study={rag} index="03" />
            <ProjectCard study={vltnet} index="04" />
          </div>
        </div>
      </div>
    </section>
  );
}
