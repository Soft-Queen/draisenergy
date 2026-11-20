import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/content/site";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy notice",
  description:
    "How Drais Energy handles website enquiry information submitted through contact and request-a-quote forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy notice"
        description="This notice explains how enquiry information submitted through this website is handled."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />
      <section className="section">
        <div className="container prose-narrow space-y-5 text-steel">
          <p>
            {site.legalName} (“Drais Energy”) collects personal information submitted through
            the contact and request-a-quote forms for the sole purpose of responding to your
            enquiry.
          </p>
          <p>
            Typical fields include name, work email, organisation, phone (optional), project
            context and message content. We do not require marketing opt-in to process a
            project or procurement enquiry.
          </p>
          <p>
            Enquiry delivery is processed server-side. Until an approved email or CRM provider
            is configured, production submissions are not accepted. Local development may use
            an explicitly labeled mock mode.
          </p>
          <p>
            We do not sell enquiry data. Retention periods should be defined with the business
            before launch. For privacy questions, contact{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="font-semibold text-charcoal underline-offset-4 hover:underline"
            >
              {site.contact.email}
            </a>{" "}
            (address pending verification).
          </p>
        </div>
      </section>
    </>
  );
}
