import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CardBody,
  CardMedia,
  CardMediaImage,
  InteractiveCardLink,
} from "@/components/ui/Card";
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
            description="Each reference states Drais scope precisely — equipment supply and support are not presented as full facility delivery."
          />
        </Reveal>

        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Reveal delay={index * 0.06} className="h-full">
                <InteractiveCardLink
                  href={`/projects/${project.slug}`}
                  ariaLabel={project.title}
                  className="flex h-full flex-col overflow-hidden"
                >
                  {project.image ? (
                    <CardMedia>
                      <CardMediaImage
                        src={project.image.src}
                        alt={project.image.alt}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </CardMedia>
                  ) : null}
                  <CardBody className="flex flex-1 flex-col">
                    <p className="text-xs text-steel">
                      {project.year} · {project.location}
                    </p>
                    <h3 className="display mt-3 text-xl">{project.title}</h3>
                    <p className="mt-3 text-sm text-steel">{project.scope}</p>
                    <p className="mt-2 text-sm">
                      <span className="font-semibold">Drais role:</span>{" "}
                      {project.draisRole}
                    </p>
                    <p className="mt-auto pt-4 text-xs text-steel">
                      Status: {project.status} (as of {project.statusAsOf})
                    </p>
                  </CardBody>
                </InteractiveCardLink>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-8">
          <Button href="/projects" variant="secondary">
            Explore our project portfolio
          </Button>
        </Reveal>
      </div>
    </section>
  );
}