import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export function AdminBreadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="-mb-2">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-neutral-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "font-medium text-primary" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast ? <ChevronRight aria-hidden className="h-3 w-3" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
