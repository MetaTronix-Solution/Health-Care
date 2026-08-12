import Image from "next/image";
import type { Product } from "@/src/types/product";
import { Container } from "@/src/components/ui/Container";

export function ProductSpecifications({ product }: { product: Product }) {
  return (
    <section className="bg-neutral-bg py-16 lg:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <h2 className="text-3xl sm:text-4xl font-light leading-[1.1] tracking-tight text-primary">
          Technical System Details.
        </h2>

        <div className="flex flex-col gap-6">
          {product.details.map((section) => (
            <article
              key={section.index}
              className="border border-neutral-line bg-tertiary p-7"
            >
              <div className="flex items-center gap-3 border-b border-neutral-line pb-4">
                <span className="bg-neutral-bg px-2 py-1 text-[11px] font-semibold text-primary">
                  {section.index}
                </span>
                <h3 className="text-lg font-medium tracking-tight text-primary">
                  {section.title}
                </h3>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-[1.1fr_0.9fr]">
                <p className="text-[13px] leading-relaxed text-neutral-muted">
                  {section.body}
                </p>

                {section.specs && (
                  <dl className="space-y-2 bg-neutral-bg p-4">
                    {section.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between text-[12px]"
                      >
                        <dt className="uppercase tracking-[0.06em] text-neutral-muted">
                          {spec.label}
                        </dt>
                        <dd className="font-semibold text-primary">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {section.images && (
                  <div className="grid grid-cols-2 gap-3 sm:col-span-2">
                    {section.images.map((image) => (
                      <div
                        key={image}
                        className="relative aspect-[4/3] overflow-hidden bg-neutral-bg"
                      >
                        <Image
                          src={image}
                          alt={`${section.title} reference for ${product.name}`}
                          fill
                          sizes="(min-width: 1024px) 20vw, 45vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
