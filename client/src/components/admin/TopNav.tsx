"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOP_NAV_ITEMS } from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Sections" className="hidden items-center gap-1 md:flex">
      {TOP_NAV_ITEMS.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium text-neutral-muted transition-colors hover:bg-neutral-bg hover:text-primary",
              isActive && "bg-neutral-bg text-secondary",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
