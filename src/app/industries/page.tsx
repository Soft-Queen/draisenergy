import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  CardBody,
  CardMedia,
  CardMediaImage,
  InteractiveCardLink,
} from "@/components/ui/Card";
import { getPublishedIndustries } from "@/content/industries";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industries",
  description:
    "Oil & Gas, Power & Renewable Energy, and Telecommunications — the three principal industry pathways for Drais Energy.",
  path: "/industries",
});

export default function IndustriesPage() {
  const industries = getPublishedIndustries();

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Who we serve"
        description="Separate industry pathways from capabilities and products. Use each page to evaluate relevance, then request a quotation with context."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
      />
      <section className="section">
        <div className="container grid gap-5 lg:grid-cols-3">
          {industries.map((industry) => (
            <InteractiveCardLink
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="overflow-hidden"
            >
              <CardMedia>
                <CardMediaImage
                  src={industry.image.src}
                  alt={industry.image.alt}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </CardMedia>
              <CardBody>
                <p className="text-xs tracking-[0.12em] text-steel uppercase">
                  {industry.eyebrow}
                </p>
                <h2 className="display mt-2 text-2xl">{industry.title}</h2>
                <p className="mt-3 text-sm text-steel">{industry.summary}</p>
              </CardBody>
            </InteractiveCardLink>
          ))}
        </div>
      </section>
    </>
  );
}