import Image from "next/image";
import Link from "next/link";
import { BarChart2 } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { getFeaturedProducts } from "@/src/data/products";

export function FeaturedProduct() {
  const [product] = getFeaturedProducts();
  if (!product) return null;

  return (
    <section className="bg-tertiary section-padding">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.5fr_0.85fr]">
          <div className="flex flex-col justify-between">
            <div>
              <p className="eyebrow mb-3">Featured Product</p>
              <h3 className="text-card-title text-primary">{product.name}</h3>
              <p className="text-body-sm mt-3 text-neutral-muted">
                {product.shortDescription}
              </p>
            </div>
            <div className="mt-10 hidden lg:block">
              <dl className="space-y-4 border-t border-neutral-line pt-4">
                <div>
                  <dt className="eyebrow mb-1">Imaging</dt>
                  <dd className="text-[13px] text-primary">
                    {product.imaging}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Application</dt>
                  <dd className="text-[13px] text-primary">
                    {product.application}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="relative order-first flex aspect-[4/3] items-center justify-center bg-neutral-bg lg:order-none"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-contain p-10"
            />
          </Link>

          <dl className="space-y-4 border-t border-neutral-line pt-4 lg:hidden">
            <div>
              <dt className="eyebrow mb-1">Imaging</dt>
              <dd className="text-[13px] text-primary">{product.imaging}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Application</dt>
              <dd className="text-[13px] text-primary">
                {product.application}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
