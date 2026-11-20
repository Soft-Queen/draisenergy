import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CardBody, CardShell } from "@/components/ui/Card";
import { companyStory } from "@/content/company";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Drais Energy",
  description: companyStory.origin,
  path: "/company",
});

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About Drais Energy"
        description={site.descriptor}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Company" },
        ]}
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="prose-narrow lg:col-span-7">
            <h2 className="display h2">{companyStory.heading}</h2>
            <p className="mt-5 text-steel">{companyStory.origin}</p>
            <p className="mt-4 text-steel">{companyStory.evolution}</p>
            <p className="mt-4 text-steel">{companyStory.today}</p>
            <p className="mt-4 border-l-2 border-brand pl-4 text-sm text-steel">
              {companyStory.caution}
            </p>
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <CardShell className="bg-surface">
              <CardBody className="p-6">
              <h2 className="display text-xl">Company identity</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-steel">Legal name</dt>
                  <dd className="font-semibold">{site.legalName}</dd>
                </div>
                <div>
                  <dt className="text-steel">RC number</dt>
                  <dd className="font-semibold">{site.rcNumber}</dd>
                </div>
                <div>
                  <dt className="text-steel">Incorporated</dt>
                  <dd className="font-semibold">{site.incorporatedOn}</dd>
                </div>
              </dl>
              </CardBody>
            </CardShell>
            <CardShell>
              <CardBody className="p-6">
              <h2 className="display text-xl">Values</h2>
              <ul className="mt-4 space-y-4">
                {site.values.map((value) => (
                  <li key={value.title}>
                    <p className="font-semibold">{value.title}</p>
                    <p className="mt-1 text-sm text-steel">{value.description}</p>
                  </li>
                ))}
              </ul>
              </CardBody>
            </CardShell>
            <CardShell className="bg-surface">
              <CardBody className="p-6">
              <h2 className="display text-xl">Leadership</h2>
              <p className="mt-3 text-sm text-steel">
                Executive profiles and portraits will be published when names, roles
                and imagery are approved for public use.
              </p>
              </CardBody>
            </CardShell>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/company/hsseq" variant="secondary">
                HSSEQ
              </Button>
              <Button href="/company/partners" variant="ghost">
                Partners
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
