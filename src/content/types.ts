export type PublicationState = "published" | "pending-review" | "draft";

export type IndustrySlug =
  | "oil-and-gas"
  | "power-and-renewables"
  | "telecommunications";

export type CapabilitySlug =
  | "engineering-and-design"
  | "procurement-and-supply"
  | "construction-and-installation"
  | "testing-and-commissioning"
  | "operations-and-maintenance"
  | "consultancy-and-training"
  | "critical-infrastructure-and-security";

export type ProductCategorySlug =
  | "electrical-equipment"
  | "instrumentation-and-control"
  | "mechanical-equipment"
  | "cable-management"
  | "safety-and-protection"
  | "power-systems"
  | "electronic-security";

export interface ContentMeta {
  id: string;
  slug: string;
  title: string;
  summary: string;
  publicationState: PublicationState;
  reviewedAt: string | null;
}

export interface Industry extends ContentMeta {
  slug: IndustrySlug;
  eyebrow: string;
  challenges: string[];
  capabilitySlugs: CapabilitySlug[];
  productCategorySlugs: ProductCategorySlug[];
  projectSlugs: string[];
  image: {
    src: string;
    alt: string;
    illustrative: true;
  };
}

export interface Capability extends ContentMeta {
  slug: CapabilitySlug;
  lifecycleStep?: number;
  crossCutting?: boolean;
  industrySlugs: IndustrySlug[];
  highlights: string[];
}

export interface Product extends ContentMeta {
  slug: string;
  category: ProductCategorySlug;
  applications: string[];
  manufacturerNote: string;
  characteristics: string[];
  industrySlugs: IndustrySlug[];
}

export interface Project extends ContentMeta {
  slug: string;
  scope: string;
  draisRole: string;
  relationshipLabel: string;
  location: string;
  year: string;
  status: string;
  statusAsOf: string;
  industrySlug: IndustrySlug;
  capabilitySlugs: CapabilitySlug[];
  image?: {
    src: string;
    alt: string;
    illustrative: true;
  };
}

export interface Partner {
  id: string;
  name: string;
  relationshipType:
    | "manufacturer"
    | "supplier"
    | "distributor"
    | "technical-partner"
    | "project-collaborator"
    | "unverified";
  publicationState: PublicationState;
  note: string;
}

export interface Credential {
  id: string;
  name: string;
  publicationState: PublicationState;
  note: string;
}
