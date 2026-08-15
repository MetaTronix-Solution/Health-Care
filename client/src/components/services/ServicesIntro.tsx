import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { COMPANY } from "@/src/data/company";

export function ServicesIntro() {
  return (
    <section className="section-padding-sm">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
          <div>
            <p className="eyebrow mb-4">Our Services</p>
            <h1 className="text-page-title max-w-lg text-primary">
              From Equipment to Ongoing Support
            </h1>
            <p className="text-body mt-5 max-w-md text-neutral-muted">
              From selecting the right medical equipment to installation,
              maintenance, and ongoing technical support, {COMPANY.name} helps
              healthcare organizations and patients across Nepal.
            </p>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary lg:aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1800&auto=format&fit=crop"
              alt="Technician setting up medical equipment in a clinical environment"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
