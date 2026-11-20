export const site = {
  name: "Drais Energy Nigeria Limited",
  shortName: "Drais Energy",
  legalName: "Drais Energy Nigeria Limited",
  rcNumber: "923607",
  incorporatedOn: "26 November 2010",
  brandPromise: "Engineering the infrastructure that drives progress.",
  supportingCopy:
    "Integrated engineering, procurement and infrastructure solutions across oil & gas, power and telecommunications.",
  eyebrow: "ENGINEERING · ENERGY · INFRASTRUCTURE",
  descriptor:
    "An indigenous engineering and infrastructure solutions partner, combining local expertise with access to global manufacturers and technical relationships.",
  url: "https://www.draisenergy.com",
  locale: "en_NG",
  contact: {
    email: "info@draisenergy.com",
    emailStatus: "pending-verification" as const,
    addressLines: [
      "144, Egbeda Idimu Road",
      "Celiat Bus Stop, Egbeda",
      "Lagos State, Nigeria",
    ],
    addressStatus: "pending-verification" as const,
    phone: null as string | null,
  },
  evidenceStrip: [
    { label: "Established", value: "2010" },
    { label: "Industry pathways", value: "3 principal" },
    { label: "Delivery model", value: "Engineering + procurement" },
  ],
  values: [
    {
      title: "Integrity",
      description:
        "Transparent commercial practice and accurate representation of scope, relationships and delivery responsibility.",
    },
    {
      title: "Excellence",
      description:
        "Technical diligence in sourcing, engineering support and project coordination.",
    },
    {
      title: "Innovation",
      description:
        "Practical adoption of proven technologies and delivery methods suited to Nigerian infrastructure needs.",
    },
    {
      title: "Client success",
      description:
        "Responsive engagement focused on qualified enquiry handling and reliable fulfilment.",
    },
  ],
} as const;
