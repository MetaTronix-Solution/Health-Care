"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { mainNavigation } from "@/src/data/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-sm text-primary transition-colors hover:bg-neutral-bg"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-tertiary overflow-y-auto"
        >
          <nav aria-label="Mobile" className="flex-1 px-5 py-6">
            <ul className="flex flex-col divide-y divide-neutral-line">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 text-lg font-medium tracking-tight text-primary"
                  >
                    {item.label}
                    <ArrowRight size={16} className="text-neutral-muted" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-neutral-line px-5 py-5 flex flex-col gap-3">
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="w-full border border-neutral-line px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.06em] text-primary"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="w-full bg-primary px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.06em] text-tertiary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
