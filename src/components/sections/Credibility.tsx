import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
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
              <li
                key={item.name}
                className="flex min-h-24 items-center justify-center border border-border bg-white px-3 text-center"
              >
                <span className="font-display text-sm font-semibold tracking-[-0.02em] text-charcoal sm:text-base">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-steel">
            Labeled relationship references only.{" "}
            <Link href="/projects" className="font-semibold text-charcoal underline-offset-4 hover:underline">
              View project portfolio
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
