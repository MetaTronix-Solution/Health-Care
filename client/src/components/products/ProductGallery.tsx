"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

export function ProductGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const validImages = images.filter(
    (image): image is string =>
      typeof image === "string" && image.trim().length > 0,
  );

  const [active, setActive] = useState(0);

  // Reset active image if the product/images change
  useEffect(() => {
    setActive(0);
  }, [images]);

  // No valid images
  if (validImages.length === 0) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-bg">
        <span className="absolute left-4 top-4 z-10 bg-primary px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-tertiary">
          01 // Overview
        </span>

        <div className="flex h-full items-center justify-center text-sm text-neutral-500">
          No product image available
        </div>
      </div>
    );
  }

  const activeImage = validImages[active] ?? validImages[0];

  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-bg">
        <span className="absolute left-4 top-4 z-10 bg-primary px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-tertiary">
          {String(active + 1).padStart(2, "0")} // Overview
        </span>

        <Image
          src={activeImage}
          alt={`${productName} product photo ${active + 1}`}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-contain p-10"
        />
      </div>

      {validImages.length > 1 && (
        <div className="mt-4 flex gap-3">
          {validImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              aria-label={`View image ${index + 1} of ${validImages.length}`}
              aria-current={active === index}
              onClick={() => setActive(index)}
              className={cn(
                "relative h-16 w-20 overflow-hidden border bg-neutral-bg",
                active === index ? "border-primary" : "border-neutral-line",
              )}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="80px"
                className="object-contain p-1.5"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
