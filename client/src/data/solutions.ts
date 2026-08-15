import type { Solution } from "@/src/types/solution";

export const solutions: Solution[] = [
  {
    slug: "sleep-lab-solutions",
    index: "01",
    title: "Sleep Lab & Sleep Study Solutions",
    description:
      "Equipment and support for sleep laboratories and sleep study workflows, helping clinicians assess and manage sleep-related conditions.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1400&auto=format&fit=crop",
    capabilities: [
      "Sleep study equipment guidance",
      "Sleep lab setup support",
      "Clinical workflow consultation",
    ],
  },
  {
    slug: "cpap-therapy",
    index: "02",
    title: "CPAP & Auto CPAP Therapy",
    description:
      "CPAP and Auto CPAP solutions for sleep apnea management, including BMC Medical products available through Himanshi Biomedical in Nepal.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1400&auto=format&fit=crop",
    capabilities: [
      "CPAP and Auto CPAP device options",
      "Product selection guidance",
      "Setup and technical support",
    ],
  },
  {
    slug: "bipap-respiratory-care",
    index: "03",
    title: "BiPAP & Respiratory Care",
    description:
      "BiPAP and respiratory care equipment for appropriate clinical and home-care settings, with installation and after-sales support.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1400&auto=format&fit=crop",
    capabilities: [
      "BiPAP therapy solutions",
      "Respiratory equipment support",
      "Ongoing maintenance assistance",
    ],
  },
  {
    slug: "patient-monitoring",
    index: "04",
    title: "Patient Monitoring & Diagnostics",
    description:
      "Patient monitoring and diagnostic solutions for hospitals and clinics, supported by professional installation and technical service.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
    capabilities: [
      "Monitoring system guidance",
      "Installation and commissioning",
      "After-sales customer support",
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
