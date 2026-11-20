import { ArrowRight } from "lucide-react";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardTone = "light" | "dark" | "surface";

const toneClass: Record<CardTone, string> = {
  light: "card-interactive",
  dark: "card-interactive card-interactive--dark",
  surface: "card-interactive card-interactive--surface",
};

type InteractiveCardLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: CardTone;
  showArrow?: boolean;
  arrowText?: string;
  /** When set, prevents child text from concatenating into the link’s accessible name. */
  ariaLabel?: string;
};

export function InteractiveCardLink({
  href,
  children,
  className,
  tone = "light",
  showArrow = false,
  arrowText = "View details",
  ariaLabel,
}: InteractiveCardLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(toneClass[tone], "group/card", className)}
    >
      {children}
      {showArrow ? (
        <span className="card-arrow mt-5 inline-flex items-center gap-2 px-5 pb-5 text-sm font-semibold">
          {arrowText}
          <ArrowRight className="size-4" aria-hidden />
        </span>
      ) : null}
    </Link>
  );
}

type CardShellProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
};

export function CardShell({ children, className, as = "div" }: CardShellProps) {
  const Component = as;
  return <Component className={cn("card-static", className)}>{children}</Component>;
}

type CardMediaProps = {
  children?: ReactNode;
  className?: string;
  aspect?: string;
};

export function CardMedia({
  children,
  className,
  aspect = "aspect-[16/10]",
}: CardMediaProps) {
  return (
    <div className={cn("card-media relative overflow-hidden", aspect, className)}>
      {children}
    </div>
  );
}

type CardMediaImageProps = Omit<ImageProps, "className"> & {
  className?: string;
};

export function CardMediaImage({ className, ...props }: CardMediaImageProps) {
  return (
    <Image
      {...props}
      fill
      className={cn("object-cover", className)}
    />
  );
}

type CardBodyProps = {
  children: ReactNode;
  className?: string;
};

export function CardBody({ children, className }: CardBodyProps) {
  return <div className={cn("card-body", className)}>{children}</div>;
}

type InteractiveArticleCardProps = {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: CardTone;
  /** Accessible name for the card link (usually the card title). */
  ariaLabel: string;
};

/** Whole-card link pattern for listings where the outer element is not a direct Link. */
export function InteractiveArticleCard({
  href,
  children,
  className,
  tone = "light",
  ariaLabel,
}: InteractiveArticleCardProps) {
  return (
    <article
      className={cn(
        toneClass[tone],
        "group/card relative flex h-full flex-col",
        className,
      )}
    >
      <Link href={href} className="card-stretch-link" aria-label={ariaLabel} />
      {children}
    </article>
  );
}