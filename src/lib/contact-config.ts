import { site } from "@/content/site";

/**
 * E.164 digits only (no +).
 * Prefer NEXT_PUBLIC_WHATSAPP_NUMBER; fall back to site.contact.phone.
 * Button stays hidden until a valid number exists.
 */
export function getWhatsAppNumber(): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();
  if (raw) {
    const digits = raw.replace(/\D/g, "");
    if (digits.length >= 10) return digits;
  }
  if (site.contact.phone) {
    const digits = site.contact.phone.replace(/\D/g, "");
    if (digits.length >= 10) return digits;
  }
  return null;
}

export function isWhatsAppEnabled(): boolean {
  return getWhatsAppNumber() !== null;
}