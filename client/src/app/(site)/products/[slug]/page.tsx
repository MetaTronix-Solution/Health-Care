import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { ProductGallery } from "@/src/components/products/ProductGallery";
import { ProductInformation } from "@/src/components/products/ProductInformation";
import { ProductSpecifications } from "@/src/components/products/ProductSpecifications";
import { RelatedProducts } from "@/src/components/products/RelatedProducts";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/src/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.slug, product.categorySlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    image: product.image,
    brand: { "@type": "Brand", name: "MedTech Pro" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-neutral-line bg-tertiary py-14 lg:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ProductGallery images={product.gallery} productName={product.name} />
          <ProductInformation product={product} />
        </Container>
      </section>

      <ProductSpecifications product={product} />

      <section className="py-16 lg:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
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

          <div className="flex flex-col justify-between border border-neutral-line bg-neutral-bg p-8">
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-primary">
                Request Information
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-neutral-muted">
                Speak with a MedTech Pro specialist about deployment, training,
                and service options for the {product.name}.
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

      <RelatedProducts products={related} />
    </>
  );
}
