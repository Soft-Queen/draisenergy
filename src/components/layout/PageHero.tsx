import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  breadcrumbs?: Crumb[];
  tone?: "light" | "dark";
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  tone = "light",
  children,
}: Props) {
  const dark = tone === "dark";

  return (
    <section
      className={[
        "border-b",
        dark
          ? "illuminated-dark border-white/10"
          : "border-border bg-surface",
      ].join(" ")}
    >
      <div className="container py-12 md:py-16">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} tone={tone} /> : null}
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <h1 className="display h1 max-w-4xl">{title}</h1>
        {description ? (
          <div className={["mt-5 lede", dark ? "text-white/80" : ""].join(" ")}>
            {description}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
