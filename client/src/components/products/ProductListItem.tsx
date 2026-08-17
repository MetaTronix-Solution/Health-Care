import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/src/types/product";

interface ProductListItemProps {
  product: Product;
}

export function ProductListItem({ product }: ProductListItemProps) {
  return (
    <article className="group flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-4 transition-shadow hover:shadow-sm sm:gap-6 sm:p-5">
      <div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl bg-[#F8FAFC] sm:w-24">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="96px"
          className="object-contain p-2"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-[#0F172A]">
          {product.name}
        </h3>
        <p className="mt-0.5 text-sm text-[#64748B]">{product.description}</p>
      </div>

      <Link
        href={`/products/${product.slug}`}
        className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[#2563EB] hover:underline"
      >
        <span className="hidden sm:inline">View details</span>
        <ArrowRight
          aria-hidden="true"
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </article>
  );
}
