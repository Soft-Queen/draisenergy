"use client";

import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { getPublicPartners } from "@/lib/partners-display";
import { PartnerLogoTile } from "./PartnerLogoTile";

type Props = {
  tone?: "light" | "dark";
  /** Homepage continuous marquee */
  marquee?: boolean;
  className?: string;
};

export function PartnerLogoGrid({
  tone = "dark",
  marquee = false,
  className = "",
}: Props) {
  const reduceMotion = useReducedMotion();
  const items = getPublicPartners();
  const [paused, setPaused] = useState(false);
  const labelId = useId();

  if (marquee) {
    const shouldAnimate = !reduceMotion;
    const duplicated = shouldAnimate ? [...items, ...items] : items;

    return (
      <div className={["partner-marquee-wrap", className].filter(Boolean).join(" ")}>
        <div className="flex items-center justify-between gap-3">
          <p id={labelId} className="sr-only">
            Manufacturer and partner logo references
          </p>
          {shouldAnimate ? (
            <button
              type="button"
              className="partner-marquee-control"
              aria-pressed={paused}
              aria-controls={`${labelId}-track`}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? (
                <>
                  <Play className="size-3.5" aria-hidden />
                  Play logo scroll
                </>
              ) : (
                <>
                  <Pause className="size-3.5" aria-hidden />
                  Pause logo scroll
                </>
              )}
            </button>
          ) : null}
        </div>

        <div
          className={[
            "partner-marquee",
            paused ? "is-paused" : "",
            tone === "light" ? "partner-marquee--light" : "partner-marquee--dark",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-labelledby={labelId}
        >
          <ul
            id={`${labelId}-track`}
            className={[
              "partner-marquee-track",
              shouldAnimate ? "" : "partner-marquee-track--static",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {duplicated.map((partner, index) => (
              <li
                key={`${partner.id}-${index}`}
                className="partner-marquee-item"
                aria-hidden={shouldAnimate && index >= items.length ? true : undefined}
              >
                <PartnerLogoTile partner={partner} tone={tone} size="marquee" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <ul
      className={[
        "partner-static-grid",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Manufacturer and partner references"
    >
      {items.map((partner) => (
        <li key={partner.id} className="partner-static-cell">
          <PartnerLogoTile partner={partner} tone={tone} size="grid" />
        </li>
      ))}
    </ul>
  );
}
