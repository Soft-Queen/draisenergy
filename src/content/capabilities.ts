import type { Capability } from "./types";

export const capabilities: Capability[] = [
  {
    id: "cap-engineering",
    slug: "engineering-and-design",
    title: "Engineering & Design",
    summary:
      "Electrical, instrumentation, civil/structural, mechanical/piping, process and technical safety engineering support aligned to project requirements.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    lifecycleStep: 1,
    industrySlugs: ["oil-and-gas", "power-and-renewables", "telecommunications"],
    highlights: [
      "Multi-discipline engineering support",
      "Specification and design coordination",
      "Standards-aware technical documentation",
    ],
  },
  {
    id: "cap-procurement",
    slug: "procurement-and-supply",
    title: "Procurement & Supply",
    summary:
      "An established commercial strength: industrial equipment sourcing, vendor coordination and supply for oil & gas, power and telecommunications projects.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    lifecycleStep: 2,
    industrySlugs: ["oil-and-gas", "power-and-renewables", "telecommunications"],
    highlights: [
      "Industrial electrical, mechanical and instrumentation supply",
      "Manufacturer and distributor relationships under review for publication",
      "Quotation and fulfilment support for project packages",
    ],
  },
  {
    id: "cap-construction",
    slug: "construction-and-installation",
    title: "Construction & Installation",
    summary:
      "Field installation and construction support as part of an integrated delivery model — scope is engagement-specific and will not be overstated.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    lifecycleStep: 3,
    industrySlugs: ["oil-and-gas", "power-and-renewables", "telecommunications"],
    highlights: [
      "Installation coordination with project stakeholders",
      "Site-aware logistics and package readiness",
      "Safety-conscious work practices",
    ],
  },
  {
    id: "cap-commissioning",
    slug: "testing-and-commissioning",
    title: "Testing & Commissioning",
    summary:
      "Structured testing and commissioning support to bring installed systems into reliable operation.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    lifecycleStep: 4,
    industrySlugs: ["oil-and-gas", "power-and-renewables", "telecommunications"],
    highlights: [
      "Pre-commissioning checks",
      "Functional testing coordination",
      "Handover documentation support",
    ],
  },
  {
    id: "cap-om",
    slug: "operations-and-maintenance",
    title: "Operations & Maintenance",
    summary:
      "Ongoing operations and maintenance support for infrastructure assets where contracted.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    lifecycleStep: 5,
    industrySlugs: ["oil-and-gas", "power-and-renewables", "telecommunications"],
    highlights: [
      "Planned maintenance support",
      "Technical manpower where approved",
      "Lifecycle continuity after commissioning",
    ],
  },
  {
    id: "cap-consultancy",
    slug: "consultancy-and-training",
    title: "Consultancy & Training",
    summary:
      "Technical consultancy, training and manpower support as a cross-cutting capability.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    crossCutting: true,
    industrySlugs: ["oil-and-gas", "power-and-renewables", "telecommunications"],
    highlights: [
      "Technical advisory",
      "Skills development support",
      "Project manpower coordination",
    ],
  },
  {
    id: "cap-security",
    slug: "critical-infrastructure-and-security",
    title: "Critical infrastructure & security",
    summary:
      "Electronic security, data centre infrastructure and related critical systems that cut across industry pathways.",
    publicationState: "published",
    reviewedAt: "2026-11-20",
    crossCutting: true,
    industrySlugs: ["telecommunications", "power-and-renewables", "oil-and-gas"],
    highlights: [
      "Electronic security systems",
      "Data centre infrastructure support",
      "Cross-industry critical systems",
    ],
  },
];

export function getCapability(slug: string) {
  return capabilities.find((item) => item.slug === slug);
}

export function getPublishedCapabilities() {
  return capabilities.filter((item) => item.publicationState === "published");
}

export function getLifecycleCapabilities() {
  return getPublishedCapabilities()
    .filter((item) => typeof item.lifecycleStep === "number")
    .sort((a, b) => (a.lifecycleStep ?? 0) - (b.lifecycleStep ?? 0));
}
