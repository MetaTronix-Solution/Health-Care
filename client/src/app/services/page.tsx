import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { services } from "@/src/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Installation, maintenance, technical support, training, consultation, and product demonstration services from MedTech Pro.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-neutral-line bg-neutral-bg">
        <Container className="py-16 lg:py-20">
          <p className="eyebrow mb-4">Lifecycle Support</p>
          <h1 className="max-w-2xl text-4xl sm:text-5xl font-light leading-[1.1] tracking-tight text-primary">
            Support that follows the equipment, not the invoice.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-muted">
            From first installation to ongoing training, every MedTech Pro
            deployment is backed by the same team that built the system.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 divide-y divide-neutral-line border-y border-neutral-line sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="flex flex-col gap-4 px-0 py-8 sm:px-8 sm:py-0 lg:py-10"
              >
                <span className="eyebrow">{service.index}</span>
                <h2 className="text-xl font-medium tracking-tight text-primary">
                  {service.title}
                </h2>
                <p className="text-[13px] leading-relaxed text-neutral-muted">
                  {service.description}
                </p>
                <ul className="mt-1 flex flex-col gap-2 border-t border-neutral-line pt-4">
                  {service.points.map((point) => (
                    <li key={point} className="text-[12px] text-primary/80">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-bg py-16 lg:py-24">
        <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-4">Plan Coverage</p>
            <h2 className="max-w-lg text-3xl sm:text-4xl font-light leading-[1.1] tracking-tight text-primary">
              Talk to us about a service plan for your fleet.
            </h2>
          </div>
          <Button href="/contact" icon={<ArrowRight size={15} />}>
            Contact Services Team
          </Button>
        </Container>
      </section>
    </>
  );
}
