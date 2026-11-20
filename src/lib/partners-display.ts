import { partners } from "@/content/partners";
import type { Partner } from "@/content/types";

/** Partners visible on public pages (excludes draft entries). */
export function getPublicPartners(): Partner[] {
  return partners.filter((partner) => partner.publicationState !== "draft");
}

/**
 * Development / protected-preview logo review.
 * Does NOT set logoApproved or alter relationship classifications.
 */
export function isPartnerLogoPreviewEnabled(): boolean {
  if (process.env.NEXT_PUBLIC_PARTNER_LOGO_PREVIEW === "true") return true;
  // Prefer explicit public flag on Vercel Preview; server-only fallback below.
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") return true;
  if (typeof window === "undefined" && process.env.VERCEL_ENV === "preview") {
    return true;
  }
  if (process.env.NODE_ENV === "development") return true;
  return false;
}

/**
 * Logo path for rendering.
 * Production: published + logoApproved + asset.
 * Preview: sourced asset when file is mapped, without implying approval.
 */
export function getPartnerLogoSrc(
  partner: Partner,
  tone: "light" | "dark" = "light",
): string | null {
  const asset =
    tone === "dark" && partner.logoOnDarkAsset
      ? partner.logoOnDarkAsset
      : partner.logoAsset;

  if (!asset) return null;

  const productionReady =
    partner.publicationState === "published" && partner.logoApproved === true;

  if (productionReady || isPartnerLogoPreviewEnabled()) {
    return `/brand/partners/${asset}`;
  }

  return null;
}

export function partnerShowsLogo(
  partner: Partner,
  tone: "light" | "dark" = "light",
): boolean {
  return getPartnerLogoSrc(partner, tone) !== null;
}

export const relationshipLabels: Record<Partner["relationshipType"], string> = {
  manufacturer: "Manufacturer",
  supplier: "Supplier",
  distributor: "Distributor",
  "technical-partner": "Technical partner",
  "project-collaborator": "Project collaborator",
  unverified: "Relationship under confirmation",
};
