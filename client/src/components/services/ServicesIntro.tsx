import { Container } from "@/src/components/ui/Container";
import { COMPANY } from "@/src/data/company";

export function ServicesIntro() {
  return (
    <section className="border-b border-neutral-line bg-neutral-bg">
      <Container className="section-padding-sm">
        <p className="eyebrow mb-4">Our Services</p>
        <h1 className="text-page-title max-w-2xl text-primary">
          From Equipment to Ongoing Support
        </h1>
        <p className="text-body mt-4 max-w-xl text-neutral-muted">
          From selecting the right medical equipment to installation,
          maintenance, and ongoing technical support, {COMPANY.name} helps
          healthcare organizations and patients across Nepal.
        </p>
      </Container>
    </section>
  );
}
