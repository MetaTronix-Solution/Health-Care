"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

export function ProductRowActions({ productId }: { productId: string }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickAway = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, [open]);

  function handleDelete() {
    setOpen(false);
    // TODO: replace with your actual delete-product API call
    console.log("Deleting product:", productId);
  }

  return (
    <div ref={containerRef} className="relative flex justify-end">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Open product actions"
        className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-muted hover:bg-neutral-bg hover:text-primary focus-visible:outline-2 focus-visible:outline-secondary"
      >
        <MoreHorizontal aria-hidden className="h-4 w-4" />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-9 z-20 w-40 rounded-md border border-neutral-line bg-white py-1 text-left shadow-lg"
        >
          <Link
            href={`/resources/${productId}`}
            role="menuitem"
            className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-neutral-bg"
          >
            <Eye aria-hidden className="h-4 w-4" /> View
          </Link>
          <Link
            href={`/admin/products/${productId}`}
            role="menuitem"
            className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-neutral-bg"
          >
            <Pencil aria-hidden className="h-4 w-4" /> Edit
          </Link>
          <button
            type="button"
            role="menuitem"
            onClick={handleDelete}
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
          >
            <Trash2 aria-hidden className="h-4 w-4" /> Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}
