import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import {
  getCategory,
  getProduct,
  products,
} from "@/content/products";
import { getIndustry } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.title,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.category);

  return (
    <>
      <PageHero
        eyebrow={category?.title ?? "Product"}
        title={product.title}
        description={product.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display h2">Applications</h2>
            <ul className="mt-4 space-y-2">
              {product.applications.map((item) => (
                <li key={item} className="text-steel">
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="display h2 mt-10">Technical characteristics</h2>
            <ul className="mt-4 space-y-3">
              {product.characteristics.map((item) => (
                <li key={item} className="border-l-2 border-brand pl-4 text-steel">
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="display h2 mt-10">Manufacturer note</h2>
            <p className="mt-4 text-steel">{product.manufacturerNote}</p>
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <div className="border border-border p-5">
              <h2 className="display text-xl">Industries</h2>
              <ul className="mt-3 space-y-2">
                {product.industrySlugs.map((industrySlug) => {
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
              <h2 className="display text-xl">Request a quotation</h2>
              <p className="mt-2 text-sm text-steel">
                No online pricing or checkout. Submit requirements for a formal quote.
              </p>
              <div className="mt-4">
                <Button href={`/request-a-quote?product=${product.slug}`}>
                  Request a quote
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
