import Image from "next/image";
import { Container } from "@/src/components/ui/Container";

export function ServicesIntro() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Our Services</p>
            <h1 className="max-w-lg text-4xl sm:text-5xl font-light leading-[1.1] tracking-tight text-primary">
              Healthcare Technology. From Equipment to Ongoing Support.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-neutral-muted">
              From selecting the right medical equipment to installation,
              rental, maintenance, and ongoing technical support, MedTech Pro
              helps healthcare organizations build reliable clinical
              environments.
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
