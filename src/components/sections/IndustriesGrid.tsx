"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPublishedIndustries } from "@/content/industries";

export function IndustriesGrid() {
  const industries = getPublishedIndustries();
  const reduce = useReducedMotion();

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
              <Link
                href={`/industries/${industry.slug}`}
                className="group block h-full overflow-hidden border border-white/15 bg-white/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={reduce ? undefined : { scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image
                      src={industry.image.src}
                      alt={industry.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-xs tracking-[0.12em] text-white/55 uppercase">
                    {industry.eyebrow}
                  </p>
                  <h3 className="display mt-2 text-2xl">{industry.title}</h3>
                  <p className="mt-3 text-sm text-white/75">{industry.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    Explore industry
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
