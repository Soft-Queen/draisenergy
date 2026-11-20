"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-industrial.jpg"
          alt=""
          fill
          preload
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />
      </div>

      <div className="container relative grid min-h-[min(88vh,52rem)] items-end gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-8 lg:col-span-7">
          <motion.p
            className="eyebrow text-[#ffb4b8]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {site.eyebrow}
          </motion.p>
          <motion.h1
            className="display h1 mt-4 max-w-4xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            {site.brandPromise}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-lg text-white/80"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
          >
            {site.supportingCopy}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24 }}
          >
            <Button href="/request-a-quote">Request a quote</Button>
            <Button href="/capabilities" variant="inverse">
              Explore our capabilities
            </Button>
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/75"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.32 }}
          >
            <Link href="/industries/oil-and-gas" className="underline-offset-4 hover:underline">
              Oil & Gas
            </Link>
            <span aria-hidden>·</span>
            <Link
              href="/industries/power-and-renewables"
              className="underline-offset-4 hover:underline"
            >
              Power & Renewables
            </Link>
            <span aria-hidden>·</span>
            <Link
              href="/industries/telecommunications"
              className="underline-offset-4 hover:underline"
            >
              Telecommunications
            </Link>
          </motion.div>
        </div>

        <div className="md:col-span-4 lg:col-span-5 md:self-end">
          <p className="mb-3 text-xs text-white/55">
            Illustrative industrial photography — not a Drais project site.
          </p>
          <dl className="grid grid-cols-1 gap-3 border border-white/15 bg-white/5 p-4 backdrop-blur-sm sm:grid-cols-3 md:grid-cols-1">
            {site.evidenceStrip.map((item) => (
              <div key={item.label} className="border-l-2 border-[var(--brand-red)] pl-3">
                <dt className="text-xs tracking-[0.08em] text-white/55 uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1 font-display text-xl font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
