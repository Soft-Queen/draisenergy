import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { OrganizationJsonLd } from "@/components/layout/OrganizationJsonLd";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppFloatingButton } from "@/components/contact/WhatsAppFloatingButton";
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
  applicationName: site.shortName,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  keywords: [
    "Drais Energy",
    "engineering",
    "procurement",
    "oil and gas",
    "power",
    "telecommunications",
    "Nigeria",
    "infrastructure",
  ],
  icons: {
    icon: [
      { url: "/brand/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/brand/icons/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/brand/icons/favicon-32.png"],
  },
  openGraph: {
    title: `${site.shortName} | Engineering & Infrastructure Solutions`,
    description: site.supportingCopy,
    url: site.url,
    siteName: site.legalName,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1920,
        height: 1280,
        alt: `${site.shortName} — engineering and infrastructure solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} | Engineering & Infrastructure Solutions`,
    description: site.supportingCopy,
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
          <WhatsAppFloatingButton />
        </MotionProvider>
      </body>
    </html>
  );
}
