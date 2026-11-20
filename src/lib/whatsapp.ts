import { getCapability } from "@/content/capabilities";
import { getIndustry } from "@/content/industries";
import { getProduct } from "@/content/products";
import { getProject } from "@/content/projects";
import { getWhatsAppNumber } from "./contact-config";

export function buildWhatsAppUrl(numberDigits: string, message: string): string {
  return `https://wa.me/${numberDigits}?text=${encodeURIComponent(message)}`;
}

function slugFromPath(pathname: string, segment: string): string | null {
  const parts = pathname.split("/").filter(Boolean);
  const index = parts.indexOf(segment);
  if (index === -1 || !parts[index + 1]) return null;
  return parts[index + 1];
}

/** Context-aware prefilled message for the current route. */
export function whatsAppMessageForPath(pathname: string): string {
  const greeting = "Hello Drais Energy,";

  if (pathname === "/" || pathname === "") {
    return `${greeting} I would like to discuss an engineering or procurement enquiry.`;
  }

  if (pathname.startsWith("/request-a-quote")) {
    return `${greeting} I would like to request a quotation. Please let me know what information you need from me.`;
  }

  if (pathname.startsWith("/contact")) {
    return `${greeting} I would like to get in touch about a project.`;
  }

  const industrySlug = slugFromPath(pathname, "industries");
  if (industrySlug) {
    const industry = getIndustry(industrySlug);
    if (industry) {
      return `${greeting} I am interested in your ${industry.title} capabilities and would like to discuss a project.`;
    }
  }

  const capabilitySlug = slugFromPath(pathname, "capabilities");
  if (capabilitySlug) {
    const capability = getCapability(capabilitySlug);
    if (capability) {
      return `${greeting} I would like to discuss ${capability.title} for an upcoming requirement.`;
    }
  }

  const productSlug = slugFromPath(pathname, "products");
  if (productSlug) {
    const product = getProduct(productSlug);
    if (product) {
      return `${greeting} I would like a quotation related to ${product.title}.`;
    }
  }

  const projectSlug = slugFromPath(pathname, "projects");
  if (projectSlug) {
    const project = getProject(projectSlug);
    if (project) {
      return `${greeting} I saw your reference project “${project.title}” and would like to discuss something similar.`;
    }
  }

  if (pathname.startsWith("/company/partners")) {
    return `${greeting} I would like to discuss equipment sourcing and manufacturer relationships.`;
  }

  if (pathname.startsWith("/company/hsseq")) {
    return `${greeting} I would like to discuss quality, safety and compliance requirements for a project.`;
  }

  return `${greeting} I am visiting your website and would like to discuss a project enquiry.`;
}

export function getWhatsAppHref(pathname: string): string | null {
  const number = getWhatsAppNumber();
  if (!number) return null;
  return buildWhatsAppUrl(number, whatsAppMessageForPath(pathname));
}