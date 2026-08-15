import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-neutral-bg section-padding">
      <Container className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow mb-3">Get Started</p>
          <h2 className="text-section-title max-w-lg text-primary">
            Need guidance on sleep or respiratory care equipment?
          </h2>
          <p className="text-body mt-3 max-w-md text-neutral-muted">
            Our team provides product guidance, technical assistance, and
            dependable after-sales support across Nepal.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" icon={<ArrowRight size={15} />}>
            Contact Us
          </Button>
          <Button href="/about" variant="outlined">
            About Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
