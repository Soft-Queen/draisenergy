import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { credentials } from "@/content/partners";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "HSSEQ & certifications",
  description:
    "Quality, health, safety, security and environment overview for Drais Energy. Candidate certifications require verification before public claims.",
  path: "/company/hsseq",
});

export default function HsseqPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="HSSEQ & certifications"
        description="Documented policies and credentials support trustworthy delivery. Unsupported safety statistics and unverified badges are not published."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/company" },
          { label: "HSSEQ" },
        ]}
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="prose-narrow lg:col-span-7">
            <h2 className="display h2">Quality and safety as operating discipline</h2>
            <p className="mt-5 text-steel">
              Drais Energy treats health, safety, security, environment and quality as
              integral to engineering and procurement work. Public claims about incident
              rates, guarantees or ranking are withheld until independently verified.
            </p>
            <p className="mt-4 text-steel">
              Staff training certificates are distinct from company certifications. Only
              credentials with confirmed issuer, scope, validity and publication permission
              should appear with badge artwork.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Discuss compliance requirements
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <h2 className="display text-xl">Credentials on record</h2>
            <ul className="mt-4 space-y-3">
              {credentials.map((credential) => (
                <li key={credential.id} className="border border-border p-4">
                  <p className="font-semibold">{credential.name}</p>
                  <p className="mt-2 text-sm text-steel">{credential.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
