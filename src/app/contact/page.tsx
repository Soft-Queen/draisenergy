import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss a project or partnership with Drais Energy.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discuss your project"
        description="Share enough context for a useful first conversation. Enquiry delivery requires an approved provider before production acceptance."
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
            <div className="border border-border bg-surface p-5">
              <h2 className="display text-xl">Direct contact</h2>
              <p className="mt-3 text-sm">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="font-semibold underline-offset-4 hover:underline"
                >
                  {site.contact.email}
                </a>
              </p>
              <p className="mt-1 text-xs text-steel">Email pending verification</p>
              <address className="mt-4 text-sm not-italic text-steel">
                {site.contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-1 text-xs text-steel">Address pending verification</p>
            </div>
            <p className="text-sm text-steel">
              Set <code className="rounded bg-white px-1">ENQUIRY_MODE=mock</code> locally to
              exercise the form without a provider. Production requires{" "}
              <code className="rounded bg-white px-1">ENQUIRY_MODE=provider</code> and a webhook.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
