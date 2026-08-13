import { Container } from "@/src/components/ui/Container";

const reasons = [
  {
    title: "Clinical Understanding",
    body: "Solutions designed around real healthcare environments.",
  },
  {
    title: "Technical Expertise",
    body: "Support from experienced technical and biomedical professionals.",
  },
  {
    title: "Flexible Solutions",
    body: "Purchase, rental, installation, maintenance, and support options.",
  },
  {
    title: "Long-Term Support",
    body: "We remain involved beyond the initial equipment purchase.",
  },
];

export function WhyChooseMedTech() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <h2 className="max-w-md text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-primary">
          Why Choose MedTech Pro
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="border-t border-neutral-line pt-4"
            >
              <h3 className="text-[15px] font-semibold text-primary">
                {reason.title}
              </h3>
              <p className="mt-1 max-w-xs text-[13px] leading-relaxed text-neutral-muted">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
