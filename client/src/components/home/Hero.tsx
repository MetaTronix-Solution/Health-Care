import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { COMPANY } from "@/src/data/company";

export function Hero() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-[#eef2f7]">
      <Image
        src="/heroBackground.png"
        alt="CPAP mask and respiratory care setup in a calm bedroom setting"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      <Container className="relative w-full py-24 sm:py-28 lg:py-36">
        <div className="max-w-xl">
          <p className="eyebrow mb-4 text-primary/60">
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
      </Container>
    </section>
  );
}
