import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/content/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="section surface">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Experience that speaks for itself."
            description="Featured references state Drais scope precisely. Candidate entries remain labeled pending final publication approval."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06} className="h-full">
              <article className="flex h-full flex-col border border-border bg-white">
                {project.image ? (
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="review-badge">
                      {project.publicationState === "pending-review"
                        ? "Pending review"
                        : "Published"}
                    </span>
                    <span className="text-xs text-steel">
                      {project.year} · {project.location}
                    </span>
                  </div>
                  <h3 className="display mt-3 text-xl">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-steel">{project.scope}</p>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold">Drais role:</span> {project.draisRole}
                  </p>
                  <p className="mt-auto pt-4 text-xs text-steel">
                    Status: {project.status} (as of {project.statusAsOf})
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <Button href="/projects" variant="secondary">
            Explore our project portfolio
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
