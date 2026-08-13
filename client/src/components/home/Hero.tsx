import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export function Hero() {
  return (
    <section className="flex flex-1 items-center bg-neutral-bg">
      <Container className="w-full py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">
              EST. 2014 &nbsp;•&nbsp; ISO CERTIFIED &nbsp;•&nbsp; GLB_OP_01
            </p>

            <h1 className="text-4xl font-light leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-[4rem]">
              Technology That Helps Healthcare Move Forward
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-muted sm:text-lg">
              Precision-engineered systems designed for the most demanding
              clinical environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/solutions" icon={<ArrowRight size={15} />}>
                Explore Solutions
              </Button>

              <Button href="/contact" variant="secondary">
                Request Demo
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden border border-neutral-line bg-tertiary">
            <Image
              src="https://images.unsplash.com/photo-1648224395277-052c8108efa3?q=80&w=1800&auto=format&fit=crop"
              alt="Hospital room with clinical monitor and medical equipment"
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
