import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { getCapability } from "@/content/capabilities";
import { getIndustry } from "@/content/industries";
import { getProject, projects } from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const industry = getIndustry(project.industrySlug);

  return (
    <>
      <PageHero
        eyebrow="Project"
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      >
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="review-badge">
            {project.publicationState === "pending-review"
              ? "Pending review"
              : "Published"}
          </span>
        </div>
      </PageHero>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Scope", project.scope],
                ["Drais role", project.draisRole],
                ["Relationship", project.relationshipLabel],
                ["Location", project.location],
                ["Year", project.year],
                ["Status", `${project.status} (as of ${project.statusAsOf})`],
              ].map(([label, value]) => (
                <div key={label} className="border border-border p-4">
                  <dt className="text-xs tracking-[0.08em] text-steel uppercase">
                    {label}
                  </dt>
                  <dd className="mt-2 font-semibold">{value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="display h2 mt-10">Capabilities involved</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.capabilitySlugs.map((capabilitySlug) => {
                const capability = getCapability(capabilitySlug);
                if (!capability) return null;
                return (
                  <li key={capabilitySlug}>
                    <Link
                      href={`/capabilities/${capability.slug}`}
                      className="inline-flex min-h-10 items-center border border-border px-3 text-sm font-semibold hover:border-charcoal"
                    >
                      {capability.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <aside className="space-y-6 lg:col-span-5">
            {project.image ? (
              <figure>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-steel">
                  Illustrative imagery only.
                </figcaption>
              </figure>
            ) : null}
            {industry ? (
              <p className="text-sm text-steel">
                Industry:{" "}
                <Link
                  href={`/industries/${industry.slug}`}
                  className="font-semibold text-charcoal underline-offset-4 hover:underline"
                >
                  {industry.title}
                </Link>
              </p>
            ) : null}
            <Button href={`/request-a-quote?project=${project.slug}`}>
              Request a related quote
            </Button>
          </aside>
        </div>
      </section>
    </>
  );
}
