import type { Metadata } from "next";
import { RfqForm } from "@/components/forms/RfqForm";
import { PageHero } from "@/components/layout/PageHero";
import { getCapability } from "@/content/capabilities";
import { getIndustry } from "@/content/industries";
import { getProduct } from "@/content/products";
import { getProject } from "@/content/projects";

export const instant = false;

export const metadata: Metadata = {
  title: "Request a quote",
  description:
    "Request a procurement quotation from Drais Energy with industry, product or project context.",
};

type Props = {
  searchParams: Promise<{
    industry?: string;
    service?: string;
    product?: string;
    project?: string;
  }>;
};

export default async function RequestQuotePage({ searchParams }: Props) {
  const params = await searchParams;
  const industry = params.industry ? getIndustry(params.industry) : undefined;
  const service = params.service ? getCapability(params.service) : undefined;
  const product = params.product ? getProduct(params.product) : undefined;
  const project = params.project ? getProject(params.project) : undefined;

  const industryOrService =
    product?.title ??
    service?.title ??
    industry?.title ??
    project?.title ??
    "";

  const contextParts = [
    industry ? `Industry: ${industry.title}` : null,
    service ? `Capability: ${service.title}` : null,
    product ? `Product: ${product.title}` : null,
    project ? `Project context: ${project.title}` : null,
  ].filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Procurement"
        title="Request a quote"
        description="Tell us what you need. This is a quotation workflow, not ecommerce — no carts, prices or online payment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request a quote" },
        ]}
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <RfqForm
              defaults={{
                industryOrService,
                context: contextParts.join(" · "),
              }}
            />
          </div>
          <aside className="lg:col-span-5">
            <div className="border border-border bg-surface p-5">
              <h2 className="display text-xl">Context carried into this form</h2>
              {contextParts.length > 0 ? (
                <ul className="mt-3 space-y-2 text-sm text-steel">
                  {contextParts.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-steel">
                  No prefilled context. You can still describe the package freely.
                </p>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
