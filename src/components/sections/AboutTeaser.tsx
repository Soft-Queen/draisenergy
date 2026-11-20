import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyStory } from "@/content/company";

export function AboutTeaser() {
  return (
    <section className="section">
      <div className="container grid items-center gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <SectionHeading
            eyebrow="Company"
            title={companyStory.heading}
            description={companyStory.origin}
          />
          <p className="prose-narrow mt-5 text-steel">{companyStory.evolution}</p>
          <div className="mt-8">
            <Button href="/company" variant="secondary">
              Discover our story
            </Button>
          </div>
        </Reveal>
        <Reveal className="md:col-span-6" delay={0.08}>
          <figure className="relative overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/about-workshop.jpg"
                alt="Illustrative industrial workshop photography"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-3 text-sm text-steel">
              Illustrative imagery — replace with approved Drais photography before launch.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
