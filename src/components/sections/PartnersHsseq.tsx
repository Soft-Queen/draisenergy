import Link from "next/link";
import { PartnerLogoGrid } from "@/components/partners/PartnerLogoGrid";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { credentials } from "@/content/partners";

export function PartnersHsseq() {
  return (
    <section className="section illuminated-dark">
      <div className="container">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              tone="dark"
              eyebrow="Partners"
              title="Global relationships. Local delivery."
              description="Manufacturer brands referenced in company materials. Commercial relationship categories remain under confirmation."
            />
            <div className="shrink-0 pb-1">
              <Button href="/company/partners" variant="inverse">
                View partners
              </Button>
            </div>
          </div>
          <PartnerLogoGrid tone="dark" marquee className="mt-10" />
        </Reveal>

        <Reveal delay={0.08} className="mt-16 border-t border-white/10 pt-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                tone="dark"
                eyebrow="HSSEQ"
                title="Quality, health, safety and environment"
                description="HSSEQ is integral to how we plan procurement and field work. Company-level credentials are listed for verification; badge artwork is used only after issuer confirmation."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-3">
                {credentials.map((credential) => (
                  <li
                    key={credential.id}
                    className="border border-white/15 px-4 py-4"
                  >
                    <p className="font-display text-lg font-semibold">
                      {credential.name}
                    </p>
                    <p className="mt-2 text-sm text-white/70">{credential.note}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/70">
                Individual training certificates are not company certifications.{" "}
                <Link
                  href="/company/hsseq"
                  className="font-semibold text-white underline-offset-4 hover:underline"
                >
                  Read HSSEQ overview
                </Link>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
