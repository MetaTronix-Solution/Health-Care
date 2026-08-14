import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { ProductFilters } from "@/src/components/products/ProductFilters";
import { products } from "@/src/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse MedTech Pro's ultrasound, patient monitoring, surgical robotics, and diagnostic imaging systems.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-neutral-line bg-neutral-bg">
        <Container className="py-16 lg:py-20">
          <p className="eyebrow mb-4">Catalog</p>
          <h1 className="max-w-2xl text-4xl sm:text-5xl font-light leading-[1.1] tracking-tight text-primary">
            Precision instruments for every point of care.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-muted">
            Every system in the MedTech Pro catalog is engineered, tested, and
            supported as part of one connected platform.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <ProductFilters products={products} />
        </Container>
      </section>
    </>
  );
}
