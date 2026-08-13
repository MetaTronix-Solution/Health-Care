import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";

export function RentalPurchaseSection() {
  return (
    <section className="bg-tertiary py-16 lg:py-20">
      <Container>
        <h2 className="max-w-lg text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-primary">
          Need Equipment? Choose the Right Option.
        </h2>

        <div className="mt-10 grid grid-cols-1 divide-y divide-neutral-line border-y border-neutral-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <div className="flex flex-col justify-between gap-6 py-8 pr-0 sm:pr-10">
            <div>
              <p className="eyebrow mb-3">Buy</p>
              <p className="max-w-xs text-[14px] leading-relaxed text-neutral-muted">
                For hospitals, clinics, and healthcare organizations looking for
                long-term equipment solutions.
              </p>
            </div>
            <a
              href="/products"
              className="inline-flex w-fit items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.04em] text-primary transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore Products
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="flex flex-col justify-between gap-6 py-8 pl-0 sm:pl-10">
            <div>
              <p className="eyebrow mb-3">Rent</p>
              <p className="max-w-xs text-[14px] leading-relaxed text-neutral-muted">
                For temporary requirements, short-term clinical needs, home
                care, or situations where purchasing may not be practical.
              </p>
            </div>
            <a
              href="/services/equipment-rental"
              className="inline-flex w-fit items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.04em] text-primary transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore Rental Options
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
