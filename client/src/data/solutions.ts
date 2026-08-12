import type { Solution } from "@/src/types/solution";

export const solutions: Solution[] = [
  {
    slug: "critical-care",
    index: "01",
    title: "Critical Care Systems",
    description:
      "Integrated monitoring and diagnostic tools that give ICU teams a continuous, accurate read on patient status when minutes matter.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1400&auto=format&fit=crop",
    capabilities: [
      "Multi-parameter bedside monitoring",
      "Predictive early-warning alerts",
      "Centralized ward surveillance",
    ],
  },
  {
    slug: "surgical-precision",
    index: "02",
    title: "Surgical Precision Platforms",
    description:
      "Robotic-assisted and image-guided systems that extend a surgeon's control to sub-millimeter accuracy across a range of procedures.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1400&auto=format&fit=crop",
    capabilities: [
      "Robotic instrument control",
      "Real-time 3D visualization",
      "Tremor-filtered manipulation",
    ],
  },
  {
    slug: "diagnostic-imaging",
    index: "03",
    title: "Diagnostic Imaging Networks",
    description:
      "High-fidelity ultrasound, MRI, and imaging systems built to move from acquisition to diagnosis with minimal friction.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
    capabilities: [
      "Pixel-level image resolution",
      "DICOM-native workflows",
      "Cross-site image sharing",
    ],
  },
  {
    slug: "connected-hospital",
    index: "04",
    title: "Connected Hospital Infrastructure",
    description:
      "Interoperable data architecture that lets every MedTech Pro device speak the same language across a health system.",
    image:
      "https://images.unsplash.com/photo-1631563019676-dade0dbdb8fb?q=80&w=1400&auto=format&fit=crop",
    capabilities: [
      "HL7 / FHIR interoperability",
      "Fleet-wide device management",
      "Audit-ready data logging",
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
