import type { Metadata } from "next";
import { site } from "@/content/site";

const DEFAULT_OG_IMAGE = {
  url: "/images/og-default.jpg",
  width: 1920,
  height: 1280,
  alt: `${site.shortName} — engineering and infrastructure solutions`,
};

type PageSeoInput = {
  title: string;
  description: string;
  /** Absolute path beginning with `/`, e.g. `/contact`. */
  path: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  /** When true, use the page title as the document title without the site template. */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

/**
 * Builds unique title, description, canonical, Open Graph and Twitter metadata
 * for a route. Icons inherit from the root layout / file-based favicon.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  absoluteTitle = false,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = path === "/" ? site.url : new URL(path, site.url).toString();
  const ogImage = image
    ? {
        url: image.url,
        width: image.width ?? 1200,
        height: image.height ?? 630,
        alt: image.alt ?? title,
      }
    : DEFAULT_OG_IMAGE;

  const fullTitle = absoluteTitle
    ? title
    : `${title} | ${site.shortName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.legalName,
      locale: site.locale,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
