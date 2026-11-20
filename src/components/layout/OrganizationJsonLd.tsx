import { site } from "@/content/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.shortName,
    url: site.url,
    logo: `${site.url}/brand/logo-existing.png`,
    image: `${site.url}/brand/icons/icon-512.png`,
    email: site.contact.email,
    foundingDate: "2010-11-26",
    identifier: site.rcNumber,
    description: site.supportingCopy,
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
