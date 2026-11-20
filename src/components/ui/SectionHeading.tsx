import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: Props) {
  return (
    <div
      className={[
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className,
      ].join(" ")}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2
        className={[
          "display h2",
          tone === "dark" ? "text-white" : "text-charcoal",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={[
            "mt-4 lede",
            align === "center" ? "mx-auto" : "",
            tone === "dark" ? "text-white/80" : "",
          ].join(" ")}
        >
          {description}
        </div>
      ) : null}
      <div
        className={["rule mt-6", align === "center" ? "mx-auto" : ""].join(" ")}
        aria-hidden
      />
    </div>
  );
}
