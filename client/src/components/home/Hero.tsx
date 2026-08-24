import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { COMPANY } from "@/src/data/company";

export function Hero() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-[#eef2f7]">
      {/* Mobile Image (Visible on screens smaller than md) */}
      <Image
        src="/mobileHero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-right md:hidden"
      />

      {/* Desktop Image (Hidden on mobile, visible from md up) */}
      <Image
        src="/heroBackground.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="hidden object-cover object-right md:block"
      />

      {/* Soft overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-transparent md:from-white/85 md:via-white/30 md:to-transparent" />

      {/* Content */}
      <Container className="relative z-10 w-full py-20 sm:py-24 lg:py-32">
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
