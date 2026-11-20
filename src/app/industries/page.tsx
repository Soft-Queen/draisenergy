import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { getPublishedIndustries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Oil & Gas, Power & Renewable Energy, and Telecommunications — the three principal industry pathways for Drais Energy.",
};

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
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group border border-border bg-white"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={industry.image.src}
                  alt={industry.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs tracking-[0.12em] text-steel uppercase">
                  {industry.eyebrow}
                </p>
                <h2 className="display mt-2 text-2xl">{industry.title}</h2>
                <p className="mt-3 text-sm text-steel">{industry.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
