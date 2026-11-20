import Image from "next/image";
import Link from "next/link";

type Props = {
  tone?: "light" | "dark";
  className?: string;
  /** Show a text wordmark beside the mark (useful on dark surfaces). */
  showWordmark?: boolean;
};

export function Logo({
  tone = "light",
  className = "",
  showWordmark = false,
}: Props) {
  return (
    <Link
      href="/"
      className={["group inline-flex items-center gap-3", className].join(" ")}
      aria-label="Drais Energy home"
    >
      {/*
        logo-existing.png has a baked black background.
        On dark surfaces, invert turns the whole asset into a white block.
        Use screen blending so black drops out while colour remains.
      */}
      <Image
        src="/brand/logo-existing.png"
        alt=""
        width={146}
        height={38}
        className={[
          "h-8 w-auto sm:h-9",
          tone === "dark" ? "mix-blend-screen" : "",
        ].join(" ")}
        preload
      />
      {showWordmark ? (
        <span
          className={[
            "font-display text-sm font-bold tracking-[0.04em] uppercase sm:text-base",
            tone === "dark" ? "text-white" : "text-charcoal",
          ].join(" ")}
        >
          Drais Energy
        </span>
      ) : (
        <span className="sr-only">Drais Energy Nigeria Limited</span>
      )}
    </Link>
  );
}
