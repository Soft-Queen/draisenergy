import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { getProductsByCategory, productCategories } from "@/content/products";
import type { ProductCategorySlug } from "@/content/types";

export const instant = false;

export const metadata: Metadata = {
  title: "Products",
  description:
    "Industrial product categories for quotation — not an ecommerce catalogue. No prices, stock counts or checkout.",
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

function isCategory(value?: string): value is ProductCategorySlug {
  return productCategories.some((item) => item.slug === value);
}

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = isCategory(params.category) ? params.category : undefined;
  const products = getProductsByCategory(category);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Product catalogue"
        description="Browse categories and request a quotation. Technical characteristics are published only when verified; datasheets are available on approved request."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="flex flex-wrap gap-2" role="list" aria-label="Product categories">
            <Link
              href="/products"
              className={[
                "inline-flex min-h-10 items-center border px-3 text-sm font-semibold",
                !category ? "border-charcoal bg-charcoal text-white" : "border-border",
              ].join(" ")}
            >
              All
            </Link>
            {productCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/products?category=${item.slug}`}
                className={[
                  "inline-flex min-h-10 items-center border px-3 text-sm font-semibold",
                  category === item.slug
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-border",
                ].join(" ")}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {products.length === 0 ? (
            <p className="mt-10 border border-dashed border-border p-8 text-steel">
              No published products in this category yet. Request a quote with your
              specification and we will respond through the approved channel once
              enquiry delivery is configured.
            </p>
          ) : (
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <li key={product.slug} className="border border-border p-5">
                  <p className="text-xs tracking-[0.08em] text-steel uppercase">
                    {productCategories.find((item) => item.slug === product.category)?.title}
                  </p>
                  <h2 className="display mt-2 text-2xl">
                    <Link
                      href={`/products/${product.slug}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {product.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-steel">{product.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
