"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { primaryActions, primaryNav } from "@/content/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) menuButtonRef.current?.focus();
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur-md">
      <div className="container flex min-h-[4.25rem] items-center justify-between gap-4 py-3">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((group) => {
            const expanded = activeMenu === group.label;
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(group.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center gap-1 rounded-[6px] px-3 text-sm font-semibold text-charcoal hover:bg-surface"
                  aria-expanded={expanded}
                  aria-haspopup="true"
                  onClick={() =>
                    setActiveMenu((current) =>
                      current === group.label ? null : group.label,
                    )
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setActiveMenu(null);
                  }}
                >
                  {group.label}
                  <ChevronDown className="size-4 opacity-70" aria-hidden />
                </button>
                <AnimatePresence>
                  {expanded ? (
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: 4 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full z-20 min-w-[18rem] pt-2"
                    >
                      <div className="rounded-[8px] border border-border bg-white p-2 shadow-[0_18px_40px_rgba(25,27,30,0.12)]">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-[6px] px-3 py-2.5 hover:bg-surface"
                            onClick={() => setActiveMenu(null)}
                          >
                            <span className="block text-sm font-semibold text-charcoal">
                              {item.label}
                            </span>
                            {item.description ? (
                              <span className="mt-0.5 block text-xs text-steel">
                                {item.description}
                              </span>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={primaryActions.contact.href} variant="ghost">
            {primaryActions.contact.label}
          </Button>
          <Button href={primaryActions.rfq.href}>{primaryActions.rfq.label}</Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[6px] border border-border lg:hidden"
          aria-expanded={open}
          aria-controls={mobileNavId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={mobileNavId}
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-white lg:hidden"
          >
            <div className="container max-h-[calc(100dvh-4.25rem)] overflow-y-auto py-4">
              <nav aria-label="Mobile primary" className="space-y-4">
                {primaryNav.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-xs font-bold tracking-[0.12em] text-steel uppercase">
                      {group.label}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-[6px] px-3 py-3 text-base font-semibold text-charcoal hover:bg-surface"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-4">
                <Button href={primaryActions.rfq.href}>
                  {primaryActions.rfq.label}
                </Button>
                <Button href={primaryActions.contact.href} variant="secondary">
                  {primaryActions.contact.label}
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
