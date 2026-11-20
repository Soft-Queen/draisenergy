import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { partners } from "@/content/partners";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Manufacturer, supplier and project relationships under review for public publication.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Partners"
        description="Manufacturer supplied does not imply authorised distributor. Relationship category, active status and logo rights must be confirmed before mark usage."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/company" },
          { label: "Partners" },
        ]}
      />
      <section className="section">
        <div className="container">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <li key={partner.id} className="border border-border bg-white p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="display text-xl">{partner.name}</h2>
                  <span className="review-badge">Pending review</span>
                </div>
                <p className="mt-2 text-xs tracking-[0.08em] text-steel uppercase">
                  Relationship: {partner.relationshipType}
                </p>
                <p className="mt-3 text-sm text-steel">{partner.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm text-steel">
            Logos are intentionally omitted. Text names are candidate references from
            company materials and the existing public website, not verified endorsements.
          </p>
        </div>
      </section>
    </>
  );
}
