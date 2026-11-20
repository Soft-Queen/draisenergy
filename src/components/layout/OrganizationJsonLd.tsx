import { site } from "@/content/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    email: site.contact.email,
    foundingDate: "2010-11-26",
    identifier: site.rcNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.addressLines[0],
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
