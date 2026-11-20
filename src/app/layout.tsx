import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { OrganizationJsonLd } from "@/components/layout/OrganizationJsonLd";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Engineering & Infrastructure Solutions`,
    template: `%s | ${site.shortName}`,
  },
  description: site.supportingCopy,
  openGraph: {
    title: site.shortName,
    description: site.supportingCopy,
    url: site.url,
    siteName: site.legalName,
    locale: site.locale,
    type: "website",
    images: [{ url: "/images/og-default.jpg", width: 1920, height: 1280 }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        <MotionProvider>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
