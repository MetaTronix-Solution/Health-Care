import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import type { Service } from "@/src/data/services";

function ServiceItem({
  service,
  isFirst,
}: {
  service: Service;
  isFirst: boolean;
}) {
  return (
    <Link
      href={service.href ?? `/services/${service.slug}`}
      className={`group flex items-center justify-between gap-6 rounded-xl px-4 py-6 transition-colors duration-200 hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary ${
        isFirst ? "" : "mt-0 border-t border-neutral-line"
      }`}
    >
      <div className="flex items-baseline gap-5 sm:gap-8">
        <span className="text-lg font-light text-neutral-muted">
          {service.number}
        </span>
        <div>
          <h3 className="text-card-title text-primary">{service.title}</h3>
          <p className="text-body-sm mt-1 max-w-md text-neutral-muted">
            {service.description}
          </p>
        </div>
      </div>

      <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.04em] text-primary transition-colors duration-200 group-hover:text-secondary">
        <span className="hidden sm:inline">{service.ctaLabel}</span>
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}

export function ServicesList({ services }: { services: Service[] }) {
  return (
    <section className="section-padding-sm">
      <Container>
        <h2 className="text-section-title text-primary">What We Do</h2>
        <div className="mt-8">
          {services.map((service, index) => (
            <ServiceItem
              key={service.slug}
              service={service}
              isFirst={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
