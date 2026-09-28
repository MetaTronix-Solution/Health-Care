"use client";

import { useEffect, useRef, useState } from "react";
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
  const [zoomed, setZoomed] = useState(false);
  const zoomRef = useRef<HTMLDivElement>(null);

  // Reset active image if the product/images change
  useEffect(() => {
    setActive(0);
  }, [images]);

  // Moves the zoom focus point to wherever the mouse is
  function updateOrigin(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !zoomRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    zoomRef.current.style.transformOrigin = `${x}% ${y}%`;
  }

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
      <div
        className="relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-neutral-bg"
        onPointerEnter={(event) => {
          if (event.pointerType !== "mouse") return;
          updateOrigin(event);
          setZoomed(true);
        }}
        onPointerMove={updateOrigin}
        onPointerLeave={() => setZoomed(false)}
      >
        {validImages.length > 1 && (
          <span className="absolute bottom-4 right-4 z-10 rounded-full bg-primary/80 px-3 py-1 text-[11px] font-medium tabular-nums text-tertiary">
            {active + 1} / {validImages.length}
          </span>
        )}

        <div
          ref={zoomRef}
          className={cn(
            "absolute inset-0 transition-transform duration-200 ease-out motion-reduce:transition-none",
            zoomed ? "scale-[2]" : "scale-100",
          )}
        >
          <Image
            src={activeImage}
            alt={`${productName} product photo ${active + 1}`}
            fill
            priority
            sizes="(min-width: 1024px) 90vw, 100vw"
            className="object-contain p-10"
          />
        </div>
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
