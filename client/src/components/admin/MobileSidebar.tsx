"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HelpCircle, LogOut, Menu, ShieldPlus, X } from "lucide-react";
import { SidebarNav } from "@/src/components/admin/SidebarNav";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-neutral-bg focus-visible:outline-2 focus-visible:outline-secondary"
      >
        <Menu aria-hidden className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-primary/50"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="relative flex w-[min(var(--admin-sidebar-width),85vw)] flex-col bg-primary text-white"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <ShieldPlus aria-hidden className="h-5 w-5 text-white" />
                </span>
                <span className="text-sm font-semibold leading-snug">
                  MedTech Pro
                  <br />
                  Administration
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X aria-hidden className="h-5 w-5" />
              </button>
            </div>

            <SidebarNav onNavigate={() => setOpen(false)} />

            <div className="mt-auto space-y-0.5 border-t border-white/10 px-3 py-4">
              <Link
                href="/support"
                onClick={() => setOpen(false)}
                className="flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                <HelpCircle aria-hidden className="h-[18px] w-[18px] shrink-0" />
                Support
              </Link>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                <LogOut aria-hidden className="h-[18px] w-[18px] shrink-0" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
