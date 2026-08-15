import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { COMPANY } from "@/src/data/company";

export function FacilitySolutions() {
  return (
    <section className="section-padding-sm">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="order-2 lg:order-1">
            <h2 className="text-section-title max-w-md text-primary">
              Supporting Healthcare Facilities From Planning to Operation
            </h2>
            <p className="text-body mt-4 max-w-md text-neutral-muted">
              {COMPANY.name} supports healthcare organizations across equipment
              selection, installation, staff guidance, maintenance, and
              technical support.
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
