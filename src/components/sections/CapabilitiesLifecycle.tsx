import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getLifecycleCapabilities,
  getPublishedCapabilities,
} from "@/content/capabilities";

export function CapabilitiesLifecycle() {
  const lifecycle = getLifecycleCapabilities();
  const crossCutting = getPublishedCapabilities().filter((item) => item.crossCutting);

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="From concept to commissioning and beyond."
            description="An integrated delivery model. Procurement remains a core commercial strength within the wider engineering lifecycle."
          />
        </Reveal>

        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {lifecycle.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.05} className="h-full">
              <li className="flex h-full flex-col border border-border bg-white p-5">
                <span className="font-display text-sm font-bold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-3 text-xl">
                  <Link
                    href={`/capabilities/${item.slug}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm text-steel">{item.summary}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-8 border border-border bg-surface p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="eyebrow">Cross-cutting</p>
            <h3 className="display mt-2 text-2xl">Consultancy, training and critical systems</h3>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {crossCutting.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/capabilities/${item.slug}`}
                    className="font-semibold text-charcoal underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 md:mt-0">
            <Button href="/capabilities/procurement-and-supply">
              Procurement & Supply
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
