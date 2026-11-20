import type { CapabilitySlug } from "@/content/types";

export const capabilityHeroImages: Partial<
  Record<CapabilitySlug, { src: string; alt: string }>
> = {
  "engineering-and-design": {
    src: "/images/engineering-detail.jpg",
    alt: "Representative engineering detail photography",
  },
  "procurement-and-supply": {
    src: "/images/procurement.jpg",
    alt: "Representative industrial procurement photography",
  },
  "construction-and-installation": {
    src: "/images/about-workshop.jpg",
    alt: "Representative workshop and installation photography",
  },
  "testing-and-commissioning": {
    src: "/images/electrical.jpg",
    alt: "Representative electrical systems photography",
  },
  "operations-and-maintenance": {
    src: "/images/power-energy.jpg",
    alt: "Representative power infrastructure photography",
  },
  "consultancy-and-training": {
    src: "/images/engineering-detail.jpg",
    alt: "Representative technical consultancy photography",
  },
  "critical-infrastructure-and-security": {
    src: "/images/telecoms.jpg",
    alt: "Representative critical infrastructure photography",
  },
};

export const deliveryApproachSteps = [
  "Understand technical requirements and site constraints with your team.",
  "Align specifications, standards and delivery milestones.",
  "Source, procure and coordinate packages with traceable documentation.",
  "Support installation, testing and handover where scope includes field work.",
] as const;