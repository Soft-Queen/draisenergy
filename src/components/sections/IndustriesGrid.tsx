"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CardBody,
  CardMedia,
  CardMediaImage,
  InteractiveCardLink,
} from "@/components/ui/Card";
import { getPublishedIndustries } from "@/content/industries";

export function IndustriesGrid() {
  const industries = getPublishedIndustries();

  return (
    <section className="section illuminated-dark">
      <div className="container">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Industries"
            title="Connecting expertise across critical industries."
            description="Three principal pathways. Each page covers relevant capabilities, products and project references without duplicating the entire brochure."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 0.06}>
              <InteractiveCardLink
                href={`/industries/${industry.slug}`}
                tone="dark"
                showArrow
                arrowText="Explore industry"
                className="h-full overflow-hidden"
              >
                <CardMedia>
                  <CardMediaImage
                    src={industry.image.src}
                    alt={industry.image.alt}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                </CardMedia>
                <CardBody>
                  <p className="text-xs tracking-[0.12em] text-white/55 uppercase">
                    {industry.eyebrow}
                  </p>
                  <h3 className="display mt-2 text-2xl">{industry.title}</h3>
                  <p className="mt-3 text-sm text-white/75">{industry.summary}</p>
                </CardBody>
              </InteractiveCardLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}