import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import {
  CardBody,
  CardMedia,
  CardMediaImage,
  InteractiveCardLink,
} from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { getFeaturedProjects } from "@/content/projects";
import { getIndustry } from "@/content/industries";
import type { IndustrySlug } from "@/content/types";

export const instant = false;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project portfolio with precise Drais role attribution across oil & gas, power and telecommunications.",
};

type Props = {
  searchParams: Promise<{ sector?: string }>;
};

function isSector(value?: string): value is IndustrySlug {
  return (
    value === "oil-and-gas" ||
    value === "power-and-renewables" ||
    value === "telecommunications"
  );
}

export default async function ProjectsPage({ searchParams }: Props) {
  const params = await searchParams;
  const sector = isSector(params.sector) ? params.sector : undefined;
  const projects = getFeaturedProjects().filter((project) =>
    sector ? project.industrySlug === sector : true,
  );

  const filters: { label: string; value?: IndustrySlug }[] = [
    { label: "All" },
    { label: "Oil & Gas", value: "oil-and-gas" },
    { label: "Power", value: "power-and-renewables" },
    { label: "Telecoms", value: "telecommunications" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Project portfolio"
        description="Each entry states scope and Drais role. Do not interpret equipment supply as delivery of an entire facility."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const href = filter.value
                ? `/projects?sector=${filter.value}`
                : "/projects";
              const active = filter.value === sector || (!filter.value && !sector);
              return (
                <Link
                  key={filter.label}
                  href={href}
                  className={cn(
                    "chip-filter",
                    active && "chip-filter--active",
                  )}
                >
                  {filter.label}
                </Link>
              );
            })}
          </div>

          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => {
              const industry = getIndustry(project.industrySlug);
              return (
                <li key={project.slug}>
                  <InteractiveCardLink
                    href={`/projects/${project.slug}`}
                    ariaLabel={project.title}
                    className="h-full overflow-hidden"
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
                    <CardBody>
                      {industry ? (
                        <p className="text-xs text-steel">{industry.title}</p>
                      ) : null}
                      <h2 className="display mt-3 text-xl">{project.title}</h2>
                      <p className="mt-3 text-sm text-steel">{project.scope}</p>
                    </CardBody>
                  </InteractiveCardLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}