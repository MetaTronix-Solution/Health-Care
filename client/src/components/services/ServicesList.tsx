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
      href={`/services/${service.slug}`}
      className={`group flex items-center justify-between gap-6 py-6 transition-colors duration-200 hover:bg-tertiary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary ${
        isFirst ? "" : "border-t border-neutral-line"
      }`}
    >
      <div className="flex items-baseline gap-5 sm:gap-8">
        <span className="text-lg font-light text-neutral-muted">
          {service.number}
        </span>
        <div>
          <h3 className="text-[17px] font-medium tracking-tight text-primary">
            {service.title}
          </h3>
          <p className="mt-1 max-w-md text-[13px] leading-relaxed text-neutral-muted">
            {service.description}
          </p>
        </div>
      </div>

      <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.04em] text-primary">
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
    <section className="py-16 lg:py-20">
      <Container>
        <h2 className="mb-2 text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-primary">
          What We Do
        </h2>
        <div className="mt-6">
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
