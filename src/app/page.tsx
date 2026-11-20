import type { Metadata } from "next";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { CapabilitiesLifecycle } from "@/components/sections/CapabilitiesLifecycle";
import { Credibility } from "@/components/sections/Credibility";
import { EnquiryCta } from "@/components/sections/EnquiryCta";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { PartnersHsseq } from "@/components/sections/PartnersHsseq";
import { WhyDrais } from "@/components/sections/WhyDrais";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: `${site.shortName} | Engineering & Infrastructure Solutions`,
  description: site.supportingCopy,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Credibility />
      <AboutTeaser />
      <IndustriesGrid />
      <CapabilitiesLifecycle />
      <FeaturedProjects />
      <WhyDrais />
      <PartnersHsseq />
      <EnquiryCta />
    </>
  );
}
