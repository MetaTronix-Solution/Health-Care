import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/src/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-shadow hover:shadow-sm">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#F8FAFC]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-4 transition-transform duration-200 group-hover:scale-[1.03]"
        />
      </div>

      <h3 className="mt-4 text-base font-semibold text-[#0F172A]">
        {product.name}
      </h3>
      <p className="mt-1 line-clamp-2 text-sm text-[#64748B]">
        {product.description}
      </p>

      <Link
        href={`/products/${product.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:underline"
      >
        View details
        <ArrowRight
          aria-hidden="true"
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </article>
  );
}
