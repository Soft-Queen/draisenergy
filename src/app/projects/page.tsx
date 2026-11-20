import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { getFeaturedProjects } from "@/content/projects";
import { getIndustry } from "@/content/industries";
import type { IndustrySlug } from "@/content/types";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project portfolio with precise Drais role attribution. Candidate entries remain labeled pending publication approval.",
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
                  className={[
                    "inline-flex min-h-10 items-center border px-3 text-sm font-semibold",
                    active
                      ? "border-charcoal bg-charcoal text-white"
                      : "border-border",
                  ].join(" ")}
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
                <li key={project.slug} className="border border-border bg-white">
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
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="review-badge">
                        {project.publicationState === "pending-review"
                          ? "Pending review"
                          : "Published"}
                      </span>
                      {industry ? (
                        <span className="text-xs text-steel">{industry.title}</span>
                      ) : null}
                    </div>
                    <h2 className="display mt-3 text-xl">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="underline-offset-4 hover:underline"
                      >
                        {project.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm text-steel">{project.scope}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
