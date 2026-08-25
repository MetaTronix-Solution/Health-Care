import { Download } from "lucide-react";
import type { Product } from "@/src/types/product";

export function ProductInformation({ product }: { product: Product }) {
  return (
    <div className="flex flex-col">
      <p className="eyebrow mb-3">{product.refCode}</p>
      <h1 className="text-page-title text-primary">
        {product.name}
      </h1>
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

      {product.downloads.length > 0 && (
        <a
          href={product.downloads[0].href}
          className="mt-8 inline-flex w-fit items-center justify-between gap-8 bg-primary px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-tertiary transition-colors hover:bg-[#132540]"
        >
          {product.downloads[0].label.replace(" (PDF)", "")}
          <Download size={15} />
        </a>
      )}
    </div>
  );
}
