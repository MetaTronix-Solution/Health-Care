import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export function ServicesCTA() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <Container>
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
          <div>
            <h2 className="max-w-lg text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-white">
              Let&apos;s Find the Right Healthcare Solution.
            </h2>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/70">
              Whether you need to purchase equipment, arrange a rental, plan a
              medical facility, or speak with a technical specialist, our team
              can help.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:shrink-0">
            <Button
              href="/products"
              icon={<ArrowRight size={15} />}
              className="!bg-white !text-primary hover:!bg-white/90"
            >
              Explore Products
            </Button>
            <Button
              href="/contact"
              variant="outlined"
              icon={<ArrowUpRight size={15} />}
              className="!border-white/40 !text-white hover:!bg-white/10"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
