import { ArrowUpRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

const solutions = [
  {
    index: "01",
    title: "Sleep Lab & Sleep Study Solutions",
    description:
      "Equipment and support for sleep laboratories and sleep study workflows, helping clinicians assess and manage sleep-related conditions.",
  },
  {
    index: "02",
    title: "CPAP & Auto CPAP Therapy",
    description:
      "CPAP and Auto CPAP solutions for sleep apnea management, including BMC Medical products available through Himanshi Biomedical in Nepal.",
  },
  {
    index: "03",
    title: "BiPAP & Respiratory Care",
    description:
      "BiPAP and respiratory care equipment for appropriate clinical and home-care settings, with installation and after-sales support.",
  },
  {
    index: "04",
    title: "Patient Monitoring & Diagnostics",
    description:
      "Patient monitoring and diagnostic solutions for hospitals and clinics, supported by professional installation and technical service.",
  },
];

export function SolutionsSection() {
  return (
    <section className="bg-neutral-bg section-padding">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Healthcare Solutions"
          description="Integrated solutions for sleep medicine, respiratory care, and biomedical equipment tailored for clinical environments across Nepal."
        />

        <div className="mt-12 grid grid-cols-1 gap-px border border-neutral-line bg-neutral-line sm:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.index}
              className="flex flex-col justify-between gap-6 bg-neutral-bg p-8"
            >
              <div className="flex items-start justify-between">
                <span className="eyebrow">{solution.index}</span>
                <ArrowUpRight size={16} className="text-neutral-muted" />
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-primary">
                  {solution.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-muted">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
