import { ClipboardList, Wrench, GraduationCap, LifeBuoy } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { COMPANY } from "@/src/data/company";

const stages = [
  {
    icon: ClipboardList,
    label: "Plan",
    detail: "Assess facility needs and equipment fit",
  },
  {
    icon: Wrench,
    label: "Install",
    detail: "Setup, configuration, and commissioning",
  },
  {
    icon: GraduationCap,
    label: "Support",
    detail: "Staff training and technical guidance",
  },
  {
    icon: LifeBuoy,
    label: "Operate",
    detail: "Ongoing maintenance and service",
  },
];

export function FacilitySolutions() {
  return (
    <section className="section-padding-sm">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="order-2 lg:order-1">
            <h2 className="text-section-title max-w-md text-primary">
              Supporting Healthcare Facilities From Planning to Operation
            </h2>
            <p className="text-body mt-4 max-w-md text-neutral-muted">
              {COMPANY.name} supports healthcare organizations across equipment
              selection, installation, staff guidance, maintenance, and
              technical support.
            </p>
          </div>

          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            {stages.map((stage) => (
              <div
                key={stage.label}
                className="rounded-2xl border border-neutral-line p-5 transition-colors hover:border-secondary/40 hover:bg-secondary/5"
              >
                <stage.icon
                  aria-hidden
                  className="h-6 w-6 text-secondary"
                  strokeWidth={1.75}
                />
                <p className="text-body mt-4 font-semibold text-primary">
                  {stage.label}
                </p>
                <p className="text-body-sm mt-1 text-neutral-muted">
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
