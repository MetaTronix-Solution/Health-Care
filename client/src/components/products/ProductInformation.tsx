import { Phone, ArrowRight } from "lucide-react";
import type { Product } from "@/src/types/product";
import { COMPANY } from "@/src/data/company";

export function ProductInformation({ product }: { product: Product }) {
  return (
    <div className="flex flex-col">
      <p className="eyebrow mb-3">{product.refCode}</p>
      <h1 className="text-page-title text-primary">{product.name}</h1>
      <p className="text-body mt-5 max-w-md text-neutral-muted">
        {product.description}
      </p>

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
