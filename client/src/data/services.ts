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
      "Hospitals, sleep labs, clinics, and patients can purchase respiratory care and sleep medicine equipment, including BMC Medical's advanced device range.",
    capabilities: [
      "CPAP & Auto CPAP machines",
      "BiPAP (Bilevel) devices",
      "Sleep lab testing equipment",
      "Respiratory care equipment",
      "BMC G3 Series devices",
    ],
    ctaLabel: "Explore Equipment",
  },
  {
    number: "02",
    slug: "equipment-rental",
    title: "Medical Equipment Rental",
    description:
      "Flexible rental options for patients and facilities needing sleep therapy or respiratory support equipment on a short-term or home-care basis.",
    capabilities: [
      "CPAP & BiPAP machines",
      "Auto CPAP devices",
      "Oxygen & respiratory equipment",
      "Home sleep testing devices",
    ],
    ctaLabel: "Ask About Rental",
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
      "Sleep lab equipment installation",
      "Initial device testing",
      "Patient handover & orientation",
    ],
    ctaLabel: "Learn About Installation",
  },
  {
    number: "04",
    slug: "maintenance-repair",
    title: "Maintenance & Repair",
    description:
      "Keep CPAP, BiPAP, and respiratory equipment reliable through preventive maintenance and technical repair services.",
    capabilities: [
      "CPAP/BiPAP servicing",
      "Filter & mask replacement guidance",
      "Device troubleshooting",
      "Preventive maintenance checks",
      "Repair support for BMC devices",
    ],
    ctaLabel: "Learn About Maintenance",
  },
  {
    number: "05",
    slug: "biomedical-support",
    title: "Biomedical & Technical Support",
    description:
      "Technical assistance for sleep therapy and respiratory equipment from experienced biomedical professionals.",
    capabilities: [
      "Sleep therapy device diagnostics",
      "Remote troubleshooting assistance",
      "On-site technical visits",
      "BMC product support",
    ],
    ctaLabel: "Learn About Technical Support",
  },
  {
    number: "06",
    slug: "facility-solutions",
    title: "Medical Facility Solutions",
    description:
      "Support for hospitals, clinics, and sleep laboratories as they plan and equip their sleep medicine and respiratory care departments.",
    capabilities: [
      "Sleep lab planning & setup",
      "Respiratory care department equipment",
      "Diagnostic & patient monitoring equipment",
      "Clinical workflow consultation",
      "Equipment selection for sleep studies",
    ],
    ctaLabel: "Learn About Facility Solutions",
  },
  {
    number: "07",
    slug: "consultation",
    title: "Consultation & Equipment Planning",
    description:
      "Helping healthcare organizations and patients identify the right sleep apnea and respiratory care equipment for their needs.",
    capabilities: [
      "Sleep apnea management planning",
      "CPAP/BiPAP selection guidance",
      "Facility & budget-based recommendations",
      "BMC product consultation",
    ],
    ctaLabel: "Request a Consultation",
  },
  {
    number: "08",
    slug: "training-demonstration",
    title: "Training & Product Demonstration",
    description:
      "Helping patients and healthcare professionals understand and use CPAP, BiPAP, and respiratory equipment correctly.",
    capabilities: [
      "CPAP/BiPAP product demonstrations",
      "Patient usage training",
      "Mask fitting training for staff",
      "Sleep study device orientation",
      "Ongoing usage support guidance",
    ],
    ctaLabel: "Request a Demonstration",
  },
];
