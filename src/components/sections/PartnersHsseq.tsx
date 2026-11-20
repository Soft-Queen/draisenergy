import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { credentials, partners } from "@/content/partners";

export function PartnersHsseq() {
  return (
    <section className="section illuminated-dark">
      <div className="container grid gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Partners"
            title="Global relationships. Local delivery."
            description="Manufacturer names are listed as candidates from company materials. No logos are shown until relationship type, status and mark rights are confirmed."
          />
          <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {partners.map((partner) => (
              <li
                key={partner.id}
                className="border border-white/15 px-3 py-4 text-sm font-semibold text-white/90"
              >
                {partner.name}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href="/company/partners" variant="inverse">
              View partners
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading
            tone="dark"
            eyebrow="HSSEQ"
            title="Quality and safety credentials under review."
            description="Candidate certifications appear below. Validity, issuing organisation, scope and public permission must be verified before badge-led claims."
          />
          <ul className="mt-8 space-y-3">
            {credentials.map((credential) => (
              <li
                key={credential.id}
                className="border border-white/15 px-4 py-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-display text-lg font-semibold">{credential.name}</p>
                  <span className="review-badge">Pending review</span>
                </div>
                <p className="mt-2 text-sm text-white/70">{credential.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/70">
            Individual training certificates are not company certifications.{" "}
            <Link href="/company/hsseq" className="font-semibold text-white underline-offset-4 hover:underline">
              Read HSSEQ overview
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
