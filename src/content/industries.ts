import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    id: "ind-oil-gas",
    slug: "oil-and-gas",
    title: "Oil & Gas",
    eyebrow: "Upstream · midstream · downstream support",
    summary:
      "Engineering, procurement and technical support for oil and gas facilities — with clear attribution of Drais scope on every engagement.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    challenges: [
      "Sourcing certified industrial equipment under demanding project schedules",
      "Coordinating electrical, instrumentation and mechanical packages",
      "Supporting contractors with reliable local technical and commercial follow-through",
    ],
    capabilitySlugs: [
      "engineering-and-design",
      "procurement-and-supply",
      "construction-and-installation",
      "testing-and-commissioning",
      "operations-and-maintenance",
      "consultancy-and-training",
    ],
    productCategorySlugs: [
      "electrical-equipment",
      "instrumentation-and-control",
      "mechanical-equipment",
      "cable-management",
      "safety-and-protection",
      "power-systems",
    ],
    projectSlugs: ["nlng-train-7-instrumentation-valves"],
    image: {
      src: "/images/oil-gas.jpg",
      alt: "Illustrative industrial process facility photography",
      illustrative: true,
    },
  },
  {
    id: "ind-power",
    slug: "power-and-renewables",
    title: "Power & Renewable Energy",
    eyebrow: "Distribution · backup power · automation",
    summary:
      "Power infrastructure solutions spanning distribution equipment, backup systems, motors and control, with renewables and grid automation in scope where approved.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    challenges: [
      "Specifying transformers, switchboards and protection systems for reliable distribution",
      "Providing UPS and backup power for critical loads",
      "Supporting SCADA and automation requirements with qualified partners",
    ],
    capabilitySlugs: [
      "engineering-and-design",
      "procurement-and-supply",
      "construction-and-installation",
      "testing-and-commissioning",
      "operations-and-maintenance",
    ],
    productCategorySlugs: [
      "electrical-equipment",
      "power-systems",
      "mechanical-equipment",
      "cable-management",
      "safety-and-protection",
    ],
    projectSlugs: ["alausa-power-plant-battery-supply"],
    image: {
      src: "/images/power-energy.jpg",
      alt: "Illustrative high-voltage transmission photography",
      illustrative: true,
    },
  },
  {
    id: "ind-telecoms",
    slug: "telecommunications",
    title: "Telecommunications",
    eyebrow: "Connectivity · critical power · security",
    summary:
      "Telecommunications infrastructure support covering outside and inside plant fibre, wireless and towers, critical power, data centre infrastructure and electronic security.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    challenges: [
      "Delivering fibre and wireless infrastructure with disciplined project coordination",
      "Protecting uptime with critical power and environmental systems",
      "Integrating electronic security without compromising network operations",
    ],
    capabilitySlugs: [
      "engineering-and-design",
      "procurement-and-supply",
      "construction-and-installation",
      "testing-and-commissioning",
      "operations-and-maintenance",
      "critical-infrastructure-and-security",
    ],
    productCategorySlugs: [
      "power-systems",
      "electronic-security",
      "cable-management",
      "electrical-equipment",
    ],
    projectSlugs: [],
    image: {
      src: "/images/telecoms.jpg",
      alt: "Illustrative telecommunications and network infrastructure photography",
      illustrative: true,
    },
  },
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}

export function getPublishedIndustries() {
  return industries.filter((item) => item.publicationState === "published");
}
