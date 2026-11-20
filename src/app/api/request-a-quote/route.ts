import { NextResponse } from "next/server";
import { submitRfqEnquiry } from "@/lib/enquiry";
import { rfqSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = rfqSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return NextResponse.json(
      { message: "Please correct the highlighted fields.", fieldErrors },
      { status: 400 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip");

  const result = await submitRfqEnquiry(parsed.data, { ip });
  if (!result.ok) {
    const status = result.code === "rate_limited" ? 429 : 503;
    return NextResponse.json({ message: result.message, code: result.code }, { status });
  }

  return NextResponse.json({
    message: "Quotation request accepted.",
    reference: result.reference,
    mode: result.mode,
  });
}
