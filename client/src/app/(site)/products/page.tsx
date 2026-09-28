import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { getProducts } from "@/src/lib/api/public-products";
import { productsMetadata } from "@/src/lib/seo/pages";
import { ProductsCatalog } from "@/src/components/products/ProductsCatalog";
import type { Product } from "@/src/types/product";

export const metadata: Metadata = productsMetadata;
export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  let products: Product[] = [];
  let failed = false;

  try {
    products = await getProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    failed = true;
  }

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
            patient monitoring systems with professional guidance and support
            from an authorized BMC Medical distributor in Nepal.
          </p>
        </Container>
      </section>

      <section className="section-padding-sm">
        <Container>
          {failed ? (
            <div className="border border-neutral-line bg-neutral-bg px-6 py-16 text-center">
              <p className="text-lg font-medium text-primary">
                We couldn&apos;t load our products right now.
              </p>
              <p className="text-body-sm mt-2 text-neutral-muted">
                Please try again in a moment, or contact us and we&apos;ll help
                you directly.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/contact">Contact Us</Button>
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="border border-neutral-line bg-neutral-bg px-6 py-16 text-center">
              <p className="text-lg font-medium text-primary">
                Our product catalog is being updated.
              </p>
              <p className="text-body-sm mt-2 text-neutral-muted">
                No products are listed at the moment. Contact us for
                availability.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/contact">Contact Us</Button>
              </div>
            </div>
          ) : (
            <ProductsCatalog products={products} />
          )}
        </Container>
      </section>
    </>
  );
}
