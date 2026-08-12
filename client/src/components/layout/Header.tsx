import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { mainNavigation } from "@/src/data/navigation";
import { MobileNavigation } from "@/src/components/layout/MobileNavigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-line bg-tertiary/95 backdrop-blur-sm">
      <Container className="flex h-[65px] items-center justify-between">
        <Link
          href="/"
          className="text-[19px] font-semibold tracking-[-0.01em] text-primary"
        >
          Hemanshi<span className="ml-1">Biomedical</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-9">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-primary/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="border border-neutral-line px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-primary transition-colors hover:bg-neutral-bg"
          >
            Client Portal
          </Link>
          <Link
            href="/contact"
            className="bg-primary px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-tertiary transition-colors hover:bg-[#132540]"
          >
            Request Demo
          </Link>
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}
