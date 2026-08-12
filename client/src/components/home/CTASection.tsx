import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-neutral-bg py-16 lg:py-24">
      <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow mb-4">04 // Get Started</p>
          <h2 className="max-w-lg text-3xl sm:text-4xl font-light leading-[1.1] tracking-tight text-primary">
            Ready to see it running in your facility?
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" icon={<ArrowRight size={15} />}>
            Request a Demo
          </Button>
          <Button href="/products" variant="outlined">
            Browse Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
