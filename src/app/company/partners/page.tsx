import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import {
  getPartnerLogoSrc,
  getPublicPartners,
  isPartnerLogoPreviewEnabled,
  relationshipLabels,
} from "@/lib/partners-display";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Partners",
  description:
    "Manufacturer and supplier brands referenced in Drais Energy project delivery materials. Listing a brand does not imply authorised distributor status.",
  path: "/company/partners",
});

export default function PartnersPage() {
  const partners = getPublicPartners();
  const preview = isPartnerLogoPreviewEnabled();

  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Partners"
        description="Manufacturer and supplier names from company materials. Listing a brand does not imply authorised distributor status."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/company" },
          { label: "Partners" },
        ]}
      />
      <section className="section">
        <div className="container">
          {preview ? (
            <p className="mb-8 max-w-3xl text-sm text-steel">
              Logo preview mode is active for visual review. Marks are not
              production-approved until relationship classification and brand
              usage rights are confirmed.
            </p>
          ) : null}

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => {
              const logoSrc = getPartnerLogoSrc(partner, "light");
              return (
                <li key={partner.id} className="border-t border-border pt-6">
                  <div className="partner-logo-optical partner-logo-optical--page">
                    {logoSrc ? (
                      <Image
                        src={logoSrc}
                        alt={`${partner.name} logo`}
                        width={200}
                        height={72}
                        unoptimized
                        className="h-12 w-auto max-w-[11rem] object-contain object-left"
                        sizes="180px"
                      />
                    ) : (
                      <span className="font-display text-xl font-semibold">
                        {partner.name}
                      </span>
                    )}
                  </div>
                  <h2 className="display mt-5 text-xl">{partner.name}</h2>
                  <p className="mt-2 text-xs tracking-[0.08em] text-steel uppercase">
                    {relationshipLabels[partner.relationshipType]}
                  </p>
                  {partner.productCategory ? (
                    <p className="mt-3 text-sm text-steel">{partner.productCategory}</p>
                  ) : null}
                  {partner.website ? (
                    <p className="mt-4">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold underline-offset-4 hover:underline"
                      >
                        Official website
                      </a>
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
