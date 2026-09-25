import { Phone, ArrowRight } from "lucide-react";
import type { Product } from "@/src/types/product";
import { COMPANY } from "@/src/data/company";

function getStockLabel(stock?: number): {
  label: string;
  className: string;
} | null {
  if (stock === undefined) return null;
  if (stock <= 0) {
    return { label: "Out of Stock", className: "bg-red-50 text-red-700" };
  }
  if (stock <= 10) {
    return { label: "Low Stock", className: "bg-amber-50 text-amber-700" };
  }
  return { label: "In Stock", className: "bg-green-50 text-green-700" };
}

export function ProductInformation({ product }: { product: Product }) {
  const stockInfo = getStockLabel(product.stock);

  return (
    <div className="flex flex-col">
      <p className="eyebrow mb-3">{product.refCode}</p>
      <h1 className="text-page-title text-primary">{product.name}</h1>
      <p className="text-body mt-5 max-w-md text-neutral-muted">
        {product.description}
      </p>

      {product.price !== undefined && (
        <div className="mt-5 flex items-center gap-3">
          <span className="text-2xl font-semibold text-primary">
            Rs. {product.price.toLocaleString()}
          </span>
          {stockInfo && (
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold ${stockInfo.className}`}
            >
              {stockInfo.label}
            </span>
          )}
        </div>
      )}

      <dl className="mt-8 space-y-3 border-t border-neutral-line pt-6">
        <div className="flex items-center justify-between">
          <dt className="eyebrow">Category</dt>
          <dd className="text-[13px] font-semibold text-primary">
            {product.category}
          </dd>
        </div>
        {product.transducerTech && (
          <div className="flex items-center justify-between border-t border-neutral-line pt-3">
            <dt className="eyebrow">Transducer Tech</dt>
            <dd className="text-[13px] font-semibold text-primary">
              {product.transducerTech}
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`tel:${COMPANY.phone.replace(/[\s-]/g, "")}`}
          className="inline-flex w-[170px] items-center justify-between gap-3 bg-primary px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-tertiary transition-colors hover:bg-[#132540]"
        >
          Call Now
          <Phone size={15} />
        </a>

        <a
          href="/contact"
          className="inline-flex w-[170px] items-center justify-between gap-3 bg-primary px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-tertiary transition-colors hover:bg-[#132540]"
        >
          Contact Us
          <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}
