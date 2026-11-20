import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { capabilities, getCapability } from "@/content/capabilities";
import { getIndustry } from "@/content/industries";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return capabilities.map((capability) => ({ slug: capability.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) return {};
  return {
    title: capability.title,
    description: capability.summary,
  };
}

export default async function CapabilityDetailPage({ params }: Props) {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) notFound();

  return (
    <>
      <PageHero
        eyebrow="Capability"
        title={capability.title}
        description={capability.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Capabilities", href: "/capabilities" },
          { label: capability.title },
        ]}
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display h2">Highlights</h2>
            <ul className="mt-5 space-y-3">
              {capability.highlights.map((item) => (
                <li key={item} className="border-l-2 border-brand pl-4 text-steel">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <div className="border border-border p-5">
              <h2 className="display text-xl">Relevant industries</h2>
              <ul className="mt-4 space-y-2">
                {capability.industrySlugs.map((industrySlug) => {
                  const industry = getIndustry(industrySlug);
                  if (!industry) return null;
                  return (
                    <li key={industrySlug}>
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="font-semibold underline-offset-4 hover:underline"
                      >
                        {industry.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="border border-border bg-surface p-5">
              <h2 className="display text-xl">Start an enquiry</h2>
              <p className="mt-2 text-sm text-steel">
                Carry this capability into a quotation or project discussion.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Button href={`/request-a-quote?service=${capability.slug}`}>
                  Request a quote
                </Button>
                <Button href="/contact" variant="secondary">
                  Discuss a project
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
