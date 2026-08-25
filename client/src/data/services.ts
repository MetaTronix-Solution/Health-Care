export type ServiceCapability = string;

export type Service = {
  number: string;
  slug: string;
  title: string;
  description: string;
  capabilities: ServiceCapability[];
  ctaLabel: string;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "equipment-sales",
    title: "Medical Equipment Sales",
    description:
      "Hospitals, clinics, diagnostic centers, and healthcare professionals can purchase medical equipment selected around their clinical requirements.",
    capabilities: [
      "Diagnostic equipment",
      "Patient monitoring",
      "Respiratory equipment",
      "Critical-care equipment",
      "Surgical & clinical equipment",
    ],
    ctaLabel: "Explore Equipment",
  },
  {
    number: "02",
    slug: "equipment-rental",
    title: "Medical Equipment Rental",
    description:
      "Flexible rental options for healthcare facilities and patients who need equipment for temporary or short-term use.",
    capabilities: [
      "Patient monitoring equipment",
      "Respiratory equipment",
      "Oxygen equipment",
      "Mobility & clinical equipment",
    ],
    ctaLabel: "Ask About Rental",
  },
  {
    number: "03",
    slug: "installation",
    title: "Installation & Setup",
    description:
      "Professional installation and commissioning of medical equipment to ensure proper operation within the healthcare environment.",
    capabilities: [
      "Site assessment",
      "Equipment installation",
      "Configuration",
      "Initial testing",
      "Operational handover",
    ],
    ctaLabel: "Learn About Installation",
  },
  {
    number: "04",
    slug: "maintenance-repair",
    title: "Maintenance & Repair",
    description:
      "Keep medical equipment reliable and operational through preventive maintenance and technical repair services.",
    capabilities: [
      "Preventive maintenance",
      "Troubleshooting",
      "Equipment inspection",
      "Calibration coordination",
      "Repair support",
    ],
    ctaLabel: "Learn About Maintenance",
  },
  {
    number: "05",
    slug: "biomedical-support",
    title: "Biomedical & Technical Support",
    description:
      "Technical assistance from experienced biomedical and technical professionals.",
    capabilities: [
      "Equipment diagnostics",
      "Technical troubleshooting",
      "Remote assistance",
      "On-site technical support",
      "Equipment performance guidance",
    ],
    ctaLabel: "Learn About Technical Support",
  },
  {
    number: "06",
    slug: "facility-solutions",
    title: "Medical Facility Solutions",
    description:
      "Support for hospitals, clinics, diagnostic centers, and healthcare facilities as they plan and equip their environments.",
    capabilities: [
      "Equipment planning",
      "Department requirements",
      "Clinical workflow considerations",
      "Equipment selection",
      "Facility technology planning",
    ],
    ctaLabel: "Learn About Facility Solutions",
  },
  {
    number: "07",
    slug: "consultation",
    title: "Consultation & Equipment Planning",
    description:
      "Helping healthcare organizations identify the right equipment based on clinical needs, workflow, capacity, and budget.",
    capabilities: [
      "Equipment selection",
      "Requirement assessment",
      "Facility planning",
      "Technology recommendations",
      "Procurement guidance",
    ],
    ctaLabel: "Request a Consultation",
  },
  {
    number: "08",
    slug: "training-demonstration",
    title: "Training & Product Demonstration",
    description:
      "Helping healthcare professionals understand and use equipment correctly.",
    capabilities: [
      "Product demonstrations",
      "Operator training",
      "Equipment orientation",
      "Basic operational guidance",
      "Staff training",
    ],
    ctaLabel: "Request a Demonstration",
  },
];
