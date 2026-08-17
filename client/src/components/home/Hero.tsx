import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { COMPANY } from "@/src/data/company";

export function Hero() {
  return (
    <section className="flex flex-1 items-center bg-neutral-bg">
      <Container className="w-full py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">
              EST. {COMPANY.established} &nbsp;•&nbsp; NEPAL &nbsp;•&nbsp; BMC
              MEDICAL DISTRIBUTOR
            </p>

            <h1 className="text-display text-primary">
              Sleep & Respiratory Care Solutions for Nepal
            </h1>

            <p className="text-body mt-5 max-w-lg text-neutral-muted">
              Reliable medical technologies, professional support, and patient
              focused solutions for sleep related and respiratory conditions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/products" icon={<ArrowRight size={15} />}>
                View Products
              </Button>
              <Button href="/contact" variant="outlined">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden border border-neutral-line bg-tertiary">
            <Image
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1800&auto=format&fit=crop"
              alt="Medical respiratory care equipment in a clinical setting"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
