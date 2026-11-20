import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EnquiryCta() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="border border-border bg-surface px-6 py-12 md:px-12 md:py-16">
            <SectionHeading
              title="Your next project starts with a conversation."
              description="Tell us about a procurement package, a technical specification, or a project discussion. We will respond through the approved enquiry channel once delivery is configured."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/request-a-quote">Request a quote</Button>
              <Button href="/contact" variant="secondary">
                Discuss your project
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
