import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { services } from "@/src/data/services";

export function ServicesSection() {
  return (
    <section className="bg-tertiary section-padding">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Support That Keeps Systems Running"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.slug}
              className="border-t border-neutral-line pt-6"
            >
              <p className="eyebrow mb-3">{service.number}</p>
              <h3 className="text-lg font-medium tracking-tight text-primary">
                {service.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
