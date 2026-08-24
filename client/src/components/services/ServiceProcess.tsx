import { Container } from "@/src/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Understand",
    body: "Understand the facility, clinical requirements, and equipment needs.",
  },
  {
    number: "02",
    title: "Recommend",
    body: "Recommend appropriate technology and service options.",
  },
  {
    number: "03",
    title: "Implement",
    body: "Support procurement, installation, setup, and training.",
  },
  {
    number: "04",
    title: "Support",
    body: "Continue with maintenance, technical assistance, and after-sales support.",
  },
];

export function ServiceProcess() {
  return (
    <section className="bg-tertiary section-padding-sm">
      <Container>
        <h2 className="text-section-title max-w-md text-primary">
          How We Support You
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-neutral-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg hover:shadow-secondary/10"
            >
              <span className="text-lg font-light text-neutral-muted transition-colors duration-300 group-hover:text-secondary">
                {step.number}
              </span>
              <h3 className="text-card-title mt-2 text-primary">
                {step.title}
              </h3>
              <p className="text-body-sm mt-2 text-neutral-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
