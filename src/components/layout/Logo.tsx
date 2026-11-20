import Image from "next/image";
import Link from "next/link";

type Props = {
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ tone = "light", className = "" }: Props) {
  return (
    <Link
      href="/"
      className={["group inline-flex items-center gap-3", className].join(" ")}
      aria-label="Drais Energy home"
    >
      <Image
        src="/brand/logo-existing.png"
        alt=""
        width={146}
        height={38}
        className={[
          "h-8 w-auto sm:h-9",
          tone === "dark" ? "brightness-0 invert" : "",
        ].join(" ")}
        preload
      />
      <span className="sr-only">Drais Energy Nigeria Limited</span>
    </Link>
  );
}
