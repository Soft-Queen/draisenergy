import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { getPublishedCapabilities } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Engineering, procurement, construction, commissioning, operations and maintenance — plus consultancy, training and critical infrastructure.",
};

export default function CapabilitiesPage() {
  const capabilities = getPublishedCapabilities();

  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="What we do"
        description="Capabilities describe how Drais delivers. Industries describe who we serve. Products describe what we supply."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Capabilities" },
        ]}
      />
      <section className="section">
        <div className="container grid gap-4 md:grid-cols-2">
          {capabilities.map((capability) => (
            <Link
              key={capability.slug}
              href={`/capabilities/${capability.slug}`}
              className="border border-border p-6 hover:border-charcoal"
            >
              <div className="flex flex-wrap items-center gap-2">
                {typeof capability.lifecycleStep === "number" ? (
                  <span className="text-xs font-bold tracking-[0.12em] text-brand uppercase">
                    Step {capability.lifecycleStep}
                  </span>
                ) : null}
                {capability.crossCutting ? (
                  <span className="review-badge">Cross-cutting</span>
                ) : null}
              </div>
              <h2 className="display mt-2 text-2xl">{capability.title}</h2>
              <p className="mt-3 text-sm text-steel">{capability.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
