import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { ProductGrid } from "@/src/components/products/ProductGrid";
import type { Product } from "@/src/types/product";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-neutral-line py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Continue Exploring" title="Related Products" />
        <div className="mt-10">
          <ProductGrid products={products} view="grid" />
        </div>
      </Container>
    </section>
  );
}
