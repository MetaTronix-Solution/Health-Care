import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/src/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col border border-neutral-line bg-tertiary transition-colors hover:border-primary"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-bg">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.category} equipment`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t border-neutral-line p-6">
        <span className="eyebrow">{product.category}</span>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-card-title text-primary">
            {product.name}
          </h3>
          <ArrowUpRight
            size={16}
            className="mt-1 shrink-0 text-neutral-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
        <p className="text-body-sm leading-relaxed text-neutral-muted">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  );
}
