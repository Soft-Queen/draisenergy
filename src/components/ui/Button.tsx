import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-hover border border-transparent",
  secondary:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-white",
  ghost:
    "bg-transparent text-charcoal border border-border hover:border-charcoal",
    inverse:
    "bg-white text-charcoal border border-transparent hover:bg-surface",
};

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = Common &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", className = "" } = props;
  const classes = [
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[6px] px-5 py-2.5 text-[0.95rem] font-semibold tracking-[-0.01em] transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-55",
    variants[variant],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} target={props.target} rel={props.rel}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
