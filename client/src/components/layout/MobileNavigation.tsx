"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { mainNavigation } from "@/src/data/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Synchronize mounting/unmounting with the CSS animation lifecycle
  useEffect(() => {
    if (open) {
      setIsMounted(true);
      document.body.style.overflow = "hidden";
      // Delay setting animation state slightly to trigger CSS transition
      const enterTimer = requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });
      return () => cancelAnimationFrame(enterTimer);
    } else {
      setAnimating(false);
      // Wait for exit transition (300ms) before unmounting from DOM
      const exitTimer = setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = "";
      }, 300);
      return () => clearTimeout(exitTimer);
    }
  }, [open]);

  return (
    <div className="lg:hidden">
      {/* Menu Open Button */}
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-sm text-primary transition-colors hover:bg-neutral-bg"
      >
        <Menu size={22} />
      </button>

      {/* Render overlay via Portal */}
      {isMounted &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex justify-end">
            {/* Smooth Fading Backdrop */}
            <div
              className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                animating ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Smooth Sliding Side Drawer (Right to Left / Left to Right) */}
            <aside
              id="mobile-menu"
              className={`relative z-10 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${
                animating ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Drawer Header */}
              <div className="flex h-16 items-center justify-between border-b border-neutral-line px-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-sm text-primary transition-colors hover:bg-neutral-bg"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav
                aria-label="Mobile"
                className="flex-1 overflow-y-auto px-5 py-4"
              >
                <ul className="flex flex-col divide-y divide-neutral-line">
                  {mainNavigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-4 text-base font-medium tracking-tight text-primary hover:text-primary/70"
                      >
                        {item.label}
                        <ArrowRight size={16} className="text-neutral-muted" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>,
          document.body,
        )}
    </div>
  );
}
