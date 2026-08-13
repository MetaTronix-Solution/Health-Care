export type Service = {
  number: string;
  slug: string;
  title: string;
  description: string;
  ctaLabel: string;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "equipment-sales",
    title: "Equipment Sales",
    description:
      "Medical equipment selected around your clinical requirements — from diagnostics to critical care.",
    ctaLabel: "Explore Equipment",
  },
  {
    number: "02",
    slug: "equipment-rental",
    title: "Equipment Rental",
    description:
      "Flexible rental options for temporary, short-term, or home-care equipment needs.",
    ctaLabel: "Ask About Rental",
  },
  {
    number: "03",
    slug: "installation",
    title: "Installation & Setup",
    description:
      "Professional installation and commissioning to get equipment operating correctly from day one.",
    ctaLabel: "Learn About Installation",
  },
  {
    number: "04",
    slug: "maintenance-support",
    title: "Maintenance & Support",
    description:
      "Preventive maintenance, repairs, and biomedical technical support to keep systems reliable.",
    ctaLabel: "Learn About Support",
  },
  {
    number: "05",
    slug: "consultation-training",
    title: "Consultation & Training",
    description:
      "Equipment planning, facility guidance, and staff training from selection through operation.",
    ctaLabel: "Request a Consultation",
  },
];
