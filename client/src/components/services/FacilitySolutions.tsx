import Image from "next/image";
import { Container } from "@/src/components/ui/Container";

export function FacilitySolutions() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="max-w-md text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-primary">
              Supporting Healthcare Facilities From Planning to Operation
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-neutral-muted">
              MedTech Pro supports healthcare organizations across equipment
              selection, facility requirements, clinical technology planning,
              installation, staff training, maintenance, and technical support.
            </p>
          </div>

          <div className="order-1 relative aspect-[4/3] w-full overflow-hidden bg-primary lg:order-2 lg:aspect-[4/3.4]">
            <Image
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop"
              alt="Hospital corridor with medical technology equipment"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
