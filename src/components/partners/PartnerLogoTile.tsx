import Image from "next/image";
import { getPartnerLogoSrc } from "@/lib/partners-display";
import type { Partner } from "@/content/types";

type Props = {
  partner: Partner;
  tone?: "light" | "dark";
  className?: string;
  size?: "marquee" | "grid";
};

export function PartnerLogoTile({
  partner,
  tone = "dark",
  className = "",
  size = "grid",
}: Props) {
  const logoSrc = getPartnerLogoSrc(partner, tone);
  const textTone = tone === "dark" ? "text-white/90" : "text-charcoal";
  const invert =
    tone === "dark" && partner.invertOnDark ? "partner-logo-invert" : "";
  const frame =
    size === "marquee"
      ? "partner-logo-frame partner-logo-frame--marquee"
      : "partner-logo-frame";

  return (
    <div className={[frame, className].filter(Boolean).join(" ")}>
      {logoSrc ? (
        <div
          className={["partner-logo-optical", invert].filter(Boolean).join(" ")}
        >
          <Image
            src={logoSrc}
            alt={`${partner.name} logo`}
            width={180}
            height={64}
            unoptimized
            className="h-full w-auto max-w-full object-contain object-center"
            sizes={size === "marquee" ? "160px" : "180px"}
          />
        </div>
      ) : (
        <span
          className={[
            "font-display text-center text-sm leading-tight font-semibold tracking-[-0.02em]",
            textTone,
          ].join(" ")}
        >
          {partner.name}
        </span>
      )}
    </div>
  );
}
