import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { getCapability } from "@/content/capabilities";
import { getIndustry, industries } from "@/content/industries";
import { getCategory } from "@/content/products";
import { getProject } from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const capabilities = industry.capabilitySlugs
    .map((item) => getCapability(item))
    .filter(Boolean);
  const categories = industry.productCategorySlugs
    .map((item) => getCategory(item))
    .filter(Boolean);
  const projects = industry.projectSlugs
    .map((item) => getProject(item))
    .filter(Boolean);

  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Industry"
        title={industry.title}
        description={industry.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      >
        <p className="mt-4 text-sm text-white/65">{industry.eyebrow}</p>
      </PageHero>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display h2">Client challenges we address</h2>
            <ul className="mt-5 space-y-3">
              {industry.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="border-l-2 border-brand pl-4 text-steel"
                >
                  {challenge}
                </li>
              ))}
            </ul>

            <h2 className="display h2 mt-12">Relevant capabilities</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) =>
                capability ? (
                  <li key={capability.slug} className="border border-border p-4">
                    <Link
                      href={`/capabilities/${capability.slug}`}
                      className="font-semibold underline-offset-4 hover:underline"
                    >
                      {capability.title}
                    </Link>
                    <p className="mt-2 text-sm text-steel">{capability.summary}</p>
                  </li>
                ) : null,
              )}
            </ul>

            <h2 className="display h2 mt-12">Product categories</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) =>
                category ? (
                  <li key={category.slug}>
                    <Link
                      href={`/products?category=${category.slug}`}
                      className="inline-flex min-h-10 items-center border border-border px-3 text-sm font-semibold hover:border-charcoal"
                    >
                      {category.title}
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <figure>
              <div className="relative aspect-[4/3]">
                <Image
                  src={industry.image.src}
                  alt={industry.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <figcaption className="mt-2 text-sm text-steel">
                Representative industry photography.
              </figcaption>
            </figure>

            <div className="border border-border p-5">
              <h2 className="display text-xl">Project references</h2>
              <ul className="mt-4 space-y-4">
                {projects.map((project) =>
                  project ? (
                    <li key={project.slug}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="font-semibold underline-offset-4 hover:underline"
                      >
                        {project.title}
                      </Link>
                      <p className="mt-1 text-sm text-steel">{project.scope}</p>
                      <p className="mt-1 text-xs text-steel">
                        Drais role: {project.draisRole}
                      </p>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>

            <div className="border border-border bg-surface p-5">
              <h2 className="display text-xl">Request a quote</h2>
              <p className="mt-2 text-sm text-steel">
                Prefill this industry context in the quotation form.
              </p>
              <div className="mt-4">
                <Button href={`/request-a-quote?industry=${industry.slug}`}>
                  Request a quote
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
