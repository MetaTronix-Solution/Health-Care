export type ServiceCapability = string;

export type Service = {
  number: string;
  slug: string;
  title: string;
  description: string;
  capabilities: ServiceCapability[];
  ctaLabel: string;
  href?: string;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "equipment-sales",
    title: "Medical Equipment Sales",
    description:
      "Hospitals, sleep labs, clinics, and patients can purchase respiratory care and sleep medicine equipment, including BMC Medical's advanced device range.",
    capabilities: [
      "CPAP & Auto CPAP machines",
      "BiPAP (Bilevel) devices",
      "BMC G3 Series devices",
    ],
    ctaLabel: "Explore Equipment",
    href: "/products",
  },
  {
    number: "02",
    slug: "equipment-rental",
    title: "Medical Equipment Rental",
    description:
      "Flexible rental options for patients and facilities needing sleep therapy or respiratory support equipment on a short-term or home-care basis.",
    capabilities: ["CPAP & BiPAP machines", "Home sleep testing devices"],
    ctaLabel: "Ask About Rental",
    href: "/contact",
  },
  {
    number: "03",
    slug: "installation",
    title: "Installation & Setup",
    description:
      "Professional installation and commissioning of sleep and respiratory equipment to ensure it's set up correctly from day one.",
    capabilities: [
      "CPAP/BiPAP setup & configuration",
      "Mask fitting & titration guidance",
      "Patient handover & orientation",
    ],
    ctaLabel: "Learn About Installation",
    href: "/contact",
  },
  {
    number: "04",
    slug: "maintenance-repair",
    title: "Maintenance & Repair",
    description:
      "Keep CPAP, BiPAP, and respiratory equipment reliable through preventive maintenance and technical repair services.",
    capabilities: [
      "CPAP/BiPAP servicing",
      "Preventive maintenance checks",
      "Repair support for BMC devices",
    ],
    ctaLabel: "Learn About Maintenance",
    href: "/contact",
  },
  {
    number: "05",
    slug: "biomedical-support",
    title: "Biomedical & Technical Support",
    description:
      "Technical assistance for sleep therapy and respiratory equipment from experienced biomedical professionals.",
    capabilities: [
      "Remote troubleshooting assistance",
      "On-site technical visits",
      "BMC product support",
    ],
    ctaLabel: "Learn About Technical Support",
    href: "/contact",
  },
];
