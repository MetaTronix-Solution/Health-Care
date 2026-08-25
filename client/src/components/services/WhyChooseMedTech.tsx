import { Container } from "@/src/components/ui/Container";
import { COMPANY } from "@/src/data/company";

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
    <section className="section-padding-sm">
      <Container>
        <h2 className="text-section-title max-w-md text-primary">
          Why Choose {COMPANY.name}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="border-t border-neutral-line pt-4"
            >
              <h3 className="text-card-title text-primary">
                {reason.title}
              </h3>
              <p className="text-body-sm mt-1 max-w-xs text-neutral-muted">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
