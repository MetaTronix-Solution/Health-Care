import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { ProductGallery } from "@/src/components/products/ProductGallery";
import { ProductInformation } from "@/src/components/products/ProductInformation";
import { ProductSpecifications } from "@/src/components/products/ProductSpecifications";
import { RelatedProducts } from "@/src/components/products/RelatedProducts";
import { BreadcrumbJsonLd } from "@/src/components/seo/BreadcrumbJsonLd";
import { ProductJsonLd } from "@/src/components/seo/ProductJsonLd";
import {
  getProductBySlug,
  getRelatedProducts,
} from "@/src/lib/api/public-products";
import { COMPANY } from "@/src/data/company";
import { createProductMetadata } from "@/src/lib/seo/pages";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug).catch(() => null);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return createProductMetadata(product);
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = await getRelatedProducts(
    product.slug,
    product.categorySlug,
  ).catch(() => []);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.name },
  ];

  const hasApplications = product.applications.length > 0;

  return (
    <>
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <section className="border-b border-neutral-line bg-tertiary py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <ProductGallery
              images={product.gallery}
              productName={product.name}
            />
            <ProductInformation product={product} />
          </div>
        </Container>
      </section>

      {product.details.length > 0 && (
        <ProductSpecifications product={product} />
      )}

      <section className="py-16 lg:py-24">
        <Container
          className={`grid grid-cols-1 gap-10 ${
            hasApplications ? "lg:grid-cols-2" : "lg:grid-cols-1"
          }`}
        >
          {hasApplications && (
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-primary">
                Applications
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {product.applications.map((application) => (
                  <li
                    key={application}
                    className="flex items-center justify-between border-t border-neutral-line pt-3 text-[14px] text-primary"
                  >
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col justify-between border border-neutral-line bg-neutral-bg p-8">
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-primary">
                Request Information
              </h2>
              <p className="text-body-sm mt-3 text-neutral-muted">
                Speak with a {COMPANY.name} specialist about the {product.name},
                including deployment, guidance, and service options in Nepal.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/contact" icon={<ArrowRight size={15} />}>
                Contact Sales
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && <RelatedProducts products={related} />}
    </>
  );
}
