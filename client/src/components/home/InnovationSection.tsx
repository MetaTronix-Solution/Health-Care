import Image from "next/image";
import { Container } from "@/src/components/ui/Container";

export function InnovationSection() {
  return (
    <section className="relative min-h-[320px] w-full overflow-hidden bg-primary sm:min-h-[400px] lg:min-h-[480px]">
      <Image
        src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1800&auto=format&fit=crop"
        alt="Patient monitoring and respiratory care equipment"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/50" aria-hidden />
      <Container className="relative flex h-full min-h-[320px] items-end pb-8 sm:min-h-[400px] sm:pb-10 lg:min-h-[480px] lg:pb-12">
        <div className="max-w-md bg-primary/75 p-5 backdrop-blur-sm sm:p-6">
          <p className="eyebrow mb-2 text-tertiary/70">Respiratory Care</p>
          <h2 className="text-xl font-medium tracking-tight text-tertiary sm:text-2xl">
            Professional Sleep & Respiratory Solutions
          </h2>
          <p className="text-body-sm mt-2 text-tertiary/75">
            CPAP, Auto CPAP, BiPAP, and sleep lab solutions backed by technical
            expertise and after-sales support.
          </p>
        </div>
      </Container>
    </section>
  );
}
