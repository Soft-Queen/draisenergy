export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items: NavItem[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Company",
    href: "/company",
    items: [
      {
        label: "About Drais Energy",
        href: "/company",
        description: "Origin, mission and how we work",
      },
      {
        label: "HSSEQ & certifications",
        href: "/company/hsseq",
        description: "Quality, safety and credentials under review",
      },
      {
        label: "Partners",
        href: "/company/partners",
        description: "Manufacturer and project relationships",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      {
        label: "Oil & Gas",
        href: "/industries/oil-and-gas",
        description: "Procurement, engineering and field support",
      },
      {
        label: "Power & Renewables",
        href: "/industries/power-and-renewables",
        description: "Distribution, backup power and automation",
      },
      {
        label: "Telecommunications",
        href: "/industries/telecommunications",
        description: "Fibre, towers, critical power and security",
      },
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    items: [
      {
        label: "Engineering & Design",
        href: "/capabilities/engineering-and-design",
      },
      {
        label: "Procurement & Supply",
        href: "/capabilities/procurement-and-supply",
      },
      {
        label: "Construction & Installation",
        href: "/capabilities/construction-and-installation",
      },
      {
        label: "Testing & Commissioning",
        href: "/capabilities/testing-and-commissioning",
      },
      {
        label: "Operations & Maintenance",
        href: "/capabilities/operations-and-maintenance",
      },
      {
        label: "Consultancy & Training",
        href: "/capabilities/consultancy-and-training",
      },
      {
        label: "Critical infrastructure & security",
        href: "/capabilities/critical-infrastructure-and-security",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    items: [
      {
        label: "Product catalogue",
        href: "/products",
        description: "Categories for quotation requests",
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    items: [
      {
        label: "Project portfolio",
        href: "/projects",
        description: "Approved delivery references",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      {
        label: "Resources",
        href: "/resources",
        description: "Approved public documents",
      },
    ],
  },
];

export const primaryActions = {
  rfq: { label: "Request a quote", href: "/request-a-quote" },
  contact: { label: "Discuss a project", href: "/contact" },
} as const;
