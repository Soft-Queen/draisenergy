import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CardBody, CardShell } from "@/components/ui/Card";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Resources",
  description:
    "Approved public documents and company profiles from Drais Energy. Request publication-safe materials through contact or request a quote.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resources"
        description="Downloadable company profiles and presentations appear here after editorial and legal review."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />
      <section className="section">
        <div className="container max-w-3xl">
          <CardShell className="bg-surface">
            <CardBody className="p-8">
            <h2 className="display text-2xl">Company profiles</h2>
            <p className="mt-3 text-steel">
              We are preparing redacted, publication-safe versions of our industry
              profiles. Until they are listed here, you can request a copy through
              contact or request a quote.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="secondary">
                Request a company profile
              </Button>
              <Button href="/request-a-quote" variant="ghost">
                Request a quote
              </Button>
            </div>
            </CardBody>
          </CardShell>
        </div>
      </section>
    </>
  );
}