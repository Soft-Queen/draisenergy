import type { Product, ProductCategorySlug } from "./types";

export const productCategories: {
  slug: ProductCategorySlug;
  title: string;
  summary: string;
}[] = [
  {
    slug: "electrical-equipment",
    title: "Electrical equipment",
    summary: "Distribution, protection and industrial electrical packages.",
  },
  {
    slug: "instrumentation-and-control",
    title: "Instrumentation & control",
    summary: "Measurement, control and process instrumentation.",
  },
  {
    slug: "mechanical-equipment",
    title: "Mechanical equipment",
    summary: "Mechanical packages and related industrial equipment.",
  },
  {
    slug: "cable-management",
    title: "Cable management & accessories",
    summary: "Cable trays, glands, cleats, transits and accessories.",
  },
  {
    slug: "safety-and-protection",
    title: "Safety & protection",
    summary: "Safety systems, PPE supply and protective equipment.",
  },
  {
    slug: "power-systems",
    title: "Power systems",
    summary: "UPS, backup power, motors and related power infrastructure.",
  },
  {
    slug: "electronic-security",
    title: "Electronic security",
    summary: "Security systems for critical and telecoms infrastructure.",
  },
];

export const products: Product[] = [
  {
    id: "prod-ups",
    slug: "ups-and-backup-power",
    title: "UPS & backup power",
    summary:
      "Uninterruptible power supply and backup systems for critical loads across power and telecommunications environments.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    category: "power-systems",
    applications: [
      "Critical facility backup",
      "Telecoms sites",
      "Industrial control rooms",
    ],
    manufacturerNote:
      "Manufacturer relationships for specific brands require business confirmation before publication as authorised distributorships.",
    characteristics: [
      "Scoped to project load requirements",
      "Suitable for industrial and telecoms environments",
      "Technical datasheets available on approved request",
    ],
    industrySlugs: ["power-and-renewables", "telecommunications", "oil-and-gas"],
  },
  {
    id: "prod-cable-glands",
    slug: "cable-glands-and-cleats",
    title: "Cable glands & cleats",
    summary:
      "Cable glands, cleats and related accessories for industrial cable termination and retention.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    category: "cable-management",
    applications: ["Oil & gas facilities", "Power installations", "Industrial plants"],
    manufacturerNote:
      "Candidate manufacturer references in company materials include CMP Products and related cable accessory brands — verify relationship type before marketing claims.",
    characteristics: [
      "Industrial-grade termination accessories",
      "Project package supply",
      "Specification support on request",
    ],
    industrySlugs: ["oil-and-gas", "power-and-renewables"],
  },
  {
    id: "prod-cable-trays",
    slug: "cable-trays-and-management",
    title: "Cable trays & management",
    summary:
      "Cable tray systems and management solutions for organised industrial and facility cabling.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    category: "cable-management",
    applications: ["Plant cabling routes", "Facilities infrastructure", "Telecoms plant"],
    manufacturerNote:
      "Legrand cable trays are referenced on the current public website; confirm current commercial relationship and mark rights.",
    characteristics: [
      "Structured cable routing",
      "Industrial installation support",
      "Quotation by project specification",
    ],
    industrySlugs: ["oil-and-gas", "power-and-renewables", "telecommunications"],
  },
  {
    id: "prod-motors",
    slug: "motors-and-control",
    title: "Motors & control systems",
    summary:
      "Industrial motors and associated control systems for power and process applications.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    category: "power-systems",
    applications: ["Process plants", "Power infrastructure", "Industrial facilities"],
    manufacturerNote:
      "Candidate brands in materials include Innomotics and related motor suppliers — verify before authorised-partner claims.",
    characteristics: [
      "Application-driven selection",
      "Control package coordination",
      "Technical clarification during RFQ",
    ],
    industrySlugs: ["power-and-renewables", "oil-and-gas"],
  },
  {
    id: "prod-earthing",
    slug: "earthing-and-lightning-protection",
    title: "Earthing & lightning protection",
    summary:
      "Earthing and lightning protection equipment for facilities and infrastructure sites.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    category: "safety-and-protection",
    applications: ["Power sites", "Telecoms towers", "Industrial facilities"],
    manufacturerNote:
      "Specific OEM attribution pending relationship confirmation.",
    characteristics: [
      "Site-appropriate protection scope",
      "Package supply for project bids",
      "Standards discussion during enquiry",
    ],
    industrySlugs: ["power-and-renewables", "telecommunications", "oil-and-gas"],
  },
  {
    id: "prod-fire-gas",
    slug: "fire-and-gas-instruments",
    title: "Fire & gas instruments",
    summary:
      "Fire and gas detection instrumentation for industrial safety applications.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    category: "instrumentation-and-control",
    applications: ["Oil & gas facilities", "Industrial plants", "Critical infrastructure"],
    manufacturerNote:
      "Product-level specifications released only when verified for the enquiry.",
    characteristics: [
      "Safety-critical instrumentation supply",
      "Project specification alignment",
      "No fabricated SKUs or ratings published",
    ],
    industrySlugs: ["oil-and-gas", "power-and-renewables"],
  },
  {
    id: "prod-lighting",
    slug: "industrial-lighting",
    title: "Industrial lighting",
    summary:
      "Industrial and facility lighting packages for operational environments.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    category: "electrical-equipment",
    applications: ["Plant areas", "Facilities", "Infrastructure sites"],
    manufacturerNote:
      "Philips and related lighting brands appear as candidates in source materials — verify relationship.",
    characteristics: [
      "Application-based selection",
      "Project quotation support",
      "Datasheets on approved request",
    ],
    industrySlugs: ["oil-and-gas", "power-and-renewables", "telecommunications"],
  },
  {
    id: "prod-security",
    slug: "electronic-security-systems",
    title: "Electronic security systems",
    summary:
      "Electronic security solutions supporting telecoms and critical infrastructure environments.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    category: "electronic-security",
    applications: ["Telecoms sites", "Data centres", "Critical facilities"],
    manufacturerNote:
      "ASSA ABLOY and related security brands are candidate references pending confirmation.",
    characteristics: [
      "Security system supply and coordination",
      "Site-specific scoping",
      "Integration discussed during project enquiry",
    ],
    industrySlugs: ["telecommunications", "power-and-renewables"],
  },
];

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function getPublishedProducts() {
  return products.filter((item) => item.publicationState === "published");
}

export function getProductsByCategory(category?: ProductCategorySlug) {
  const published = getPublishedProducts();
  if (!category) return published;
  return published.filter((item) => item.category === category);
}

export function getCategory(slug: string) {
  return productCategories.find((item) => item.slug === slug);
}
