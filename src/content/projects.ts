import type { Project } from "./types";

/**
 * Candidate projects from the implementation brief.
 * Roles are stated precisely. Do not imply Drais delivered complete plants.
 */
export const projects: Project[] = [
  {
    id: "proj-nlng-train7",
    slug: "nlng-train-7-instrumentation-valves",
    title: "NLNG Train 7 — instrumentation valve supply",
    summary:
      "Instrumentation valve supply supporting the NLNG Train 7 project through Saipem E&C.",
    publicationState: "pending-review",
    reviewedAt: null,
    scope: "Instrumentation valve supply",
    draisRole: "Equipment supply",
    relationshipLabel: "Via Saipem E&C (contractor relationship)",
    location: "Bonny, Nigeria",
    year: "2025",
    status: "Concluded",
    statusAsOf: "2025",
    industrySlug: "oil-and-gas",
    capabilitySlugs: ["procurement-and-supply"],
    image: {
      src: "/images/oil-gas.jpg",
      alt: "Illustrative industrial facility photography — not an NLNG site photograph",
      illustrative: true,
    },
  },
  {
    id: "proj-alausa",
    slug: "alausa-power-plant-battery-supply",
    title: "Alausa Power Plant — heavy-duty battery supply",
    summary:
      "Heavy-duty battery supply for the Alausa Power Plant engagement via Elektron Energy.",
    publicationState: "pending-review",
    reviewedAt: null,
    scope: "Heavy-duty battery supply",
    draisRole: "Equipment supply",
    relationshipLabel: "Via Elektron Energy",
    location: "Lagos, Nigeria",
    year: "2024",
    status: "Completed",
    statusAsOf: "2024",
    industrySlug: "power-and-renewables",
    capabilitySlugs: ["procurement-and-supply"],
    image: {
      src: "/images/power-energy.jpg",
      alt: "Illustrative power infrastructure photography — not an Alausa site photograph",
      illustrative: true,
    },
  },
  {
    id: "proj-mtn",
    slug: "mtn-infrastructure-support",
    title: "MTN infrastructure support",
    summary:
      "Selected MTN infrastructure support engagements listed as ongoing in the July 2026 presentation. Status must be refreshed before public launch.",
    publicationState: "draft",
    reviewedAt: null,
    scope: "Telecommunications infrastructure support",
    draisRole: "Infrastructure support — scope under internal refresh",
    relationshipLabel: "Project relationship referenced in company materials",
    location: "Nigeria",
    year: "2026",
    status: "Internal refresh",
    statusAsOf: "July 2026 presentation",
    industrySlug: "telecommunications",
    capabilitySlugs: [
      "procurement-and-supply",
      "construction-and-installation",
      "operations-and-maintenance",
    ],
    image: {
      src: "/images/telecoms.jpg",
      alt: "Illustrative telecommunications photography — not an MTN site photograph",
      illustrative: true,
    },
  },
];

/** Names shown for credibility — not endorsements or proof of direct contracts. */
export const relationshipNames = [
  {
    name: "NLNG",
    note: "Appears in project references",
    logoAsset: "/brand/relationships/nlng.svg",
  },
  {
    name: "TotalEnergies",
    note: "Appears in project / vendor references",
    logoAsset: "/brand/relationships/totalenergies.svg",
  },
  {
    name: "Saipem",
    note: "Appears in project references",
    logoAsset: "/brand/relationships/saipem.svg",
  },
  {
    name: "Daewoo E&C",
    note: "Appears in project / vendor references",
    logoAsset: "/brand/relationships/daewoo-enc.svg",
  },
  {
    name: "Julius Berger",
    note: "Appears in project / vendor references",
    logoAsset: "/brand/relationships/julius-berger.svg",
  },
  {
    name: "Alcon",
    note: "Appears in project references",
    logoAsset: "/brand/relationships/alcon.svg",
  },
] as const;

export function getProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project || project.publicationState === "draft") return undefined;
  return project;
}

/** Public portfolio and homepage listings (excludes draft). */
export function getPublishableProjects() {
  return projects.filter((item) => item.publicationState !== "draft");
}

export function getFeaturedProjects() {
  return getPublishableProjects();
}
