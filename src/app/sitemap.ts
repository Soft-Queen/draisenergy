import type { MetadataRoute } from "next";
import { capabilities } from "@/content/capabilities";
import { industries } from "@/content/industries";
import { products } from "@/content/products";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/company",
    "/company/hsseq",
    "/company/partners",
    "/industries",
    "/capabilities",
    "/products",
    "/projects",
    "/resources",
    "/contact",
    "/request-a-quote",
    "/privacy",
  ];

  const dynamic = [
    ...industries.map((item) => `/industries/${item.slug}`),
    ...capabilities.map((item) => `/capabilities/${item.slug}`),
    ...products.map((item) => `/products/${item.slug}`),
    ...projects.map((item) => `/projects/${item.slug}`),
  ];

  return [...staticRoutes, ...dynamic].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
