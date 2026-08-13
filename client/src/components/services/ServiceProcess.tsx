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
    <section className="bg-tertiary py-16 lg:py-20">
      <Container>
        <h2 className="max-w-md text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-primary">
          How We Support You
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`pt-5 lg:pt-8 ${
                index !== 0 ? "lg:border-l lg:border-neutral-line lg:pl-6" : ""
              }`}
            >
              <span className="text-lg font-light text-neutral-muted">
                {step.number}
              </span>
              <h3 className="mt-2 text-[15px] font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[16rem] text-[13px] leading-relaxed text-neutral-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
