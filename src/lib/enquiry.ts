import type { ContactInput, RfqInput } from "./validation";

export type EnquiryResult =
  | { ok: true; mode: "provider" | "mock"; reference: string }
  | {
      ok: false;
      code: "not_configured" | "rate_limited" | "provider_error";
      message: string;
    };

const recent = new Map<string, number[]>();

function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const stamps = (recent.get(key) ?? []).filter((time) => now - time < windowMs);
  if (stamps.length >= limit) {
    recent.set(key, stamps);
    return false;
  }
  stamps.push(now);
  recent.set(key, stamps);
  return true;
}

function referenceId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

async function deliver(
  type: "contact" | "rfq",
  payload: Record<string, unknown>,
): Promise<EnquiryResult> {
  const mode = process.env.ENQUIRY_MODE ?? "unset";
  const providerConfigured = Boolean(process.env.ENQUIRY_WEBHOOK_URL);

  if (mode === "mock") {
    console.info(`[enquiry:mock:${type}]`, {
      name: payload.name,
      email: payload.email,
      organisation: payload.organisation,
      industryOrService: payload.industryOrService,
      subject: payload.subject,
    });
    return { ok: true, mode: "mock", reference: referenceId(type) };
  }

  if (!providerConfigured || mode !== "provider") {
    return {
      ok: false,
      code: "not_configured",
      message:
        "Enquiry delivery is not configured yet. Please email info@draisenergy.com meanwhile.",
    };
  }

  try {
    const response = await fetch(process.env.ENQUIRY_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(process.env.ENQUIRY_WEBHOOK_TOKEN
          ? { authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({ type, ...payload }),
    });
    if (!response.ok) {
      return {
        ok: false,
        code: "provider_error",
        message:
          "We could not deliver your enquiry. Please try again or email us directly.",
      };
    }
    return { ok: true, mode: "provider", reference: referenceId(type) };
  } catch {
    return {
      ok: false,
      code: "provider_error",
      message:
        "We could not deliver your enquiry. Please try again or email us directly.",
    };
  }
}

export async function submitContactEnquiry(
  input: ContactInput,
  meta: { ip?: string | null },
): Promise<EnquiryResult> {
  if (input.website) {
    return { ok: true, mode: "mock", reference: referenceId("bot") };
  }

  if (!rateLimit(`contact:${meta.ip ?? "unknown"}`)) {
    return {
      ok: false,
      code: "rate_limited",
      message: "Too many requests. Please wait a minute and try again.",
    };
  }

  const { website: _honeypot, ...payload } = input;
  return deliver("contact", payload);
}

export async function submitRfqEnquiry(
  input: RfqInput,
  meta: { ip?: string | null },
): Promise<EnquiryResult> {
  if (input.website) {
    return { ok: true, mode: "mock", reference: referenceId("bot") };
  }

  if (!rateLimit(`rfq:${meta.ip ?? "unknown"}`)) {
    return {
      ok: false,
      code: "rate_limited",
      message: "Too many requests. Please wait a minute and try again.",
    };
  }

  const { website: _honeypot, ...payload } = input;
  return deliver("rfq", payload);
}
