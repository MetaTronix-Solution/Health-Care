import type { Service } from "@/src/types/service";

export const services: Service[] = [
  {
    slug: "installation",
    index: "01",
    title: "Installation",
    description:
      "Site assessment, logistics, and certified installation for every device class we manufacture, coordinated around your facility's schedule.",
    points: [
      "Pre-installation site survey",
      "Certified field engineers",
      "Post-install verification testing",
    ],
  },
  {
    slug: "maintenance",
    index: "02",
    title: "Maintenance",
    description:
      "Scheduled preventive maintenance programs that keep imaging and monitoring fleets within calibration and compliance tolerances.",
    points: [
      "Preventive maintenance scheduling",
      "Remote diagnostics",
      "Compliance documentation",
    ],
  },
  {
    slug: "technical-support",
    index: "03",
    title: "Technical Support",
    description:
      "24/7 technical support lines staffed by engineers who know the systems, not a call-center script.",
    points: [
      "24/7 emergency support line",
      "Remote troubleshooting",
      "On-site dispatch when required",
    ],
  },
  {
    slug: "training",
    index: "04",
    title: "Training",
    description:
      "Clinical and biomedical training programs that get staff confident on new equipment before it enters daily use.",
    points: [
      "On-site clinical training",
      "Biomedical engineering certification",
      "Ongoing refresher sessions",
    ],
  },
  {
    slug: "consultation",
    index: "05",
    title: "Consultation",
    description:
      "Workflow and capital planning consultation for departments scaling or replacing diagnostic and surgical infrastructure.",
    points: [
      "Capital equipment planning",
      "Workflow optimization review",
      "Regulatory readiness assessment",
    ],
  },
  {
    slug: "product-demonstration",
    index: "06",
    title: "Product Demonstration",
    description:
      "Hands-on demonstrations in your own clinical environment, so evaluation teams see performance under real conditions.",
    points: [
      "In-facility live demonstration",
      "Comparative performance review",
      "Custom evaluation protocols",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
