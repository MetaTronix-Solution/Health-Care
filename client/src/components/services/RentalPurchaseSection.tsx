import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";

const options = [
  {
    eyebrow: "Buy",
    body: "For hospitals, clinics, and healthcare organizations looking for long-term equipment solutions.",
    href: "/products",
    ctaLabel: "Explore Products",
  },
  {
    eyebrow: "Rent",
    body: "For temporary requirements, short-term clinical needs, home care, or situations where purchasing may not be practical.",
    href: "/services/equipment-rental",
    ctaLabel: "Explore Rental Options",
  },
];

export function RentalPurchaseSection() {
  return (
    <section className="bg-tertiary section-padding-sm">
      <Container>
        <h2 className="text-section-title max-w-lg text-primary">
          Need Equipment? Choose the Right Option.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {options.map((option) => (
            <a
              key={option.eyebrow}
              href={option.href}
              className="group flex flex-col justify-between gap-6 rounded-2xl border border-neutral-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg hover:shadow-secondary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <div>
                <p className="eyebrow mb-3 transition-colors duration-300 group-hover:text-secondary">
                  {option.eyebrow}
                </p>
                <p className="text-body-sm max-w-xs leading-relaxed text-neutral-muted">
                  {option.body}
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.04em] text-primary transition-colors group-hover:text-secondary">
                {option.ctaLabel}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
