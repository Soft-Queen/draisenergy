import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { CardShell } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { relationshipNames } from "@/content/projects";

export function Credibility() {
  return (
    <section className="section surface">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Relationships"
            title="Experience built through industry relationships."
            description="Organisation names below appear in project references or vendor records. Their presence is not proof of a direct contract or endorsement."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {relationshipNames.map((item) => (
              <li key={item.name}>
                <CardShell className="flex min-h-24 items-center justify-center px-3 py-4 text-center">
                  <div className="relative flex h-10 w-full max-w-[9.5rem] items-center justify-center">
                    <Image
                      src={item.logoAsset}
                      alt={`${item.name} logo`}
                      width={180}
                      height={48}
                      unoptimized
                      className="h-full w-auto max-w-full object-contain object-center"
                    />
                  </div>
                </CardShell>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-steel">
            Labeled relationship references only.{" "}
            <Link
              href="/projects"
              className="font-semibold text-charcoal underline-offset-4 hover:underline"
            >
              View project portfolio
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
