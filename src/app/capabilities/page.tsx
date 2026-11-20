import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CardBody, InteractiveCardLink } from "@/components/ui/Card";
import { getPublishedCapabilities } from "@/content/capabilities";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Capabilities",
  description:
    "Engineering, procurement, construction, commissioning, operations and maintenance — plus consultancy, training and critical infrastructure.",
  path: "/capabilities",
});

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
            <InteractiveCardLink
              key={capability.slug}
              href={`/capabilities/${capability.slug}`}
            >
              <CardBody>
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
              </CardBody>
            </InteractiveCardLink>
          ))}
        </div>
      </section>
    </>
  );
}