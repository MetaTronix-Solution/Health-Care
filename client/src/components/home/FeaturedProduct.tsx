import Image from "next/image";
import Link from "next/link";
import { BarChart2 } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { getFeaturedProducts } from "@/src/data/products";

export function FeaturedProduct() {
  const [product] = getFeaturedProducts();
  if (!product) return null;

  return (
    <section className="bg-tertiary py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.5fr_0.85fr]">
          <div className="flex flex-col justify-between">
            <div>
              <p className="eyebrow mb-4">01 // FLAGSHIP</p>
              <h3 className="text-3xl font-light tracking-tight text-primary">
                {product.name}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-neutral-muted">
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
            <div className="absolute right-5 top-5 flex items-center gap-1.5 bg-tertiary px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary shadow-sm">
              <BarChart2 size={12} />
              Spec Chart
            </div>
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
