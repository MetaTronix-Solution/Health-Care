"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOP_NAV_ITEMS } from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Sections" className="hidden items-center gap-6 md:flex">
      {TOP_NAV_ITEMS.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "border-b-2 border-transparent pb-1 text-sm font-medium text-neutral-muted transition-colors hover:text-primary",
              isActive && "border-secondary text-secondary",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
