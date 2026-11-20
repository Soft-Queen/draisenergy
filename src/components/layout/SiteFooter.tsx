import Link from "next/link";
import { primaryActions, primaryNav } from "@/content/navigation";
import { site } from "@/content/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="illuminated-dark border-t border-white/10">
      <div className="container section">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-sm text-white/75">
              {site.descriptor}
            </p>
            <p className="mt-4 text-sm text-white/60">
              RC {site.rcNumber} · Incorporated {site.incorporatedOn}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-5 md:grid-cols-2">
            {primaryNav.slice(0, 4).map((group) => (
              <div key={group.label}>
                <p className="text-xs font-bold tracking-[0.14em] text-white/55 uppercase">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-2">
                  {group.items.slice(0, 4).map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/85 underline-offset-4 hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold tracking-[0.14em] text-white/55 uppercase">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="underline-offset-4 hover:underline"
                >
                  {site.contact.email}
                </a>
                <span className="mt-1 block text-xs text-white/50">
                  Email pending verification
                </span>
              </li>
              {site.contact.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li className="text-xs text-white/50">
                Address pending verification
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-2">
              <Link
                href={primaryActions.rfq.href}
                className="text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                {primaryActions.rfq.label}
              </Link>
              <Link
                href={primaryActions.contact.href}
                className="text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                {primaryActions.contact.label}
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col gap-3 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2010–2026 {site.legalName}. All rights reserved.
          </p>
          <Link href="/privacy" className="underline-offset-4 hover:underline">
            Privacy notice
          </Link>
        </div>
      </div>
    </footer>
  );
}
