import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppContactCard } from "@/components/contact/WhatsAppContactCard";
import { PageHero } from "@/components/layout/PageHero";
import { CardBody, CardShell } from "@/components/ui/Card";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Drais Energy to discuss a project, partnership or procurement enquiry. Our team reviews messages during business hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discuss your project"
        description="Share enough context for a useful first conversation. Our team reviews enquiries during business hours."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="space-y-4 lg:col-span-5">
            <CardShell className="bg-surface">
              <CardBody>
              <h2 className="display text-xl">Direct contact</h2>
              <p className="mt-3 text-sm">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="font-semibold underline-offset-4 hover:underline"
                >
                  {site.contact.email}
                </a>
              </p>
              <address className="mt-4 text-sm not-italic text-steel">
                {site.contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              </CardBody>
            </CardShell>
            <WhatsAppContactCard />
            <CardShell>
              <CardBody>
              <h2 className="display text-xl">Request a quotation</h2>
              <p className="mt-2 text-sm text-steel">
                For procurement packages, use the quotation workflow so we can capture
                specifications and delivery context.
              </p>
              </CardBody>
            </CardShell>
          </aside>
        </div>
      </section>
    </>
  );
}