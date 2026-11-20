import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Approved public documents for Drais Energy. Raw presentations with confidential material are not published.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resources"
        description="Only approved current public documents will appear here with file type, size and a readable HTML summary."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />
      <section className="section">
        <div className="container max-w-3xl">
          <div className="border border-dashed border-border bg-surface p-8">
            <p className="review-badge">No public downloads yet</p>
            <h2 className="display mt-4 text-2xl">Documents pending approval</h2>
            <p className="mt-3 text-steel">
              The original company profile PDFs were not available in the local project
              environment at build time. Even when supplied, raw presentations that contain
              purchase orders, bids, personal information or sensitive QR data must not be
              published without redaction and owner approval.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="secondary">
                Request an approved company profile
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
