import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { ProductFilters } from "@/src/components/products/ProductFilters";
import { products } from "@/src/data/products";
import { productsMetadata } from "@/src/lib/seo/pages";

export const metadata: Metadata = productsMetadata;

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-neutral-line bg-neutral-bg">
        <Container className="section-padding-sm">
          <p className="eyebrow mb-4">Products</p>
          <h1 className="text-page-title max-w-2xl text-primary">
            CPAP, BiPAP & respiratory care equipment
          </h1>
          <p className="text-body mt-4 max-w-xl text-neutral-muted">
            Quality biomedical solutions including CPAP, Auto CPAP, BiPAP, and
            patient monitoring systems — with professional guidance and support
            from an authorized BMC Medical distributor in Nepal.
          </p>
        </Container>
      </section>

      <section className="section-padding-sm">
        <Container>
          <ProductFilters products={products} />
        </Container>
      </section>
    </>
  );
}
