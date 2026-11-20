import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyDrais } from "@/content/company";

export function WhyDrais() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="Why Drais Energy"
            title="Evidence before superlatives."
            description="Client value comes from coordinated delivery, sourcing depth and transparent attribution — not unsupported rankings or guarantees."
          />
          <figure className="mt-8">
            <div className="reveal-image relative aspect-[4/3]">
              <Image
                src="/images/engineering-detail.jpg"
                alt="Illustrative engineering detail photography"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <figcaption className="mt-3 text-sm text-steel">
              Illustrative detail imagery for technical character.
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-0 lg:col-span-7">
          {whyDrais.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="border-t border-border py-5 first:border-t-0 first:pt-0">
                <h3 className="display text-xl md:text-2xl">
                  <Link href={item.href} className="underline-offset-4 hover:underline">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 max-w-2xl text-steel">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
