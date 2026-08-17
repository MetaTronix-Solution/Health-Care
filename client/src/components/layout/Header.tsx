import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { mainNavigation } from "@/src/data/navigation";
import { MobileNavigation } from "@/src/components/layout/MobileNavigation";
import { COMPANY } from "@/src/data/company";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-line bg-tertiary/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 text-lg font-semibold tracking-tight text-primary sm:text-[1.125rem]"
        >
          {COMPANY.shortName}
          <span className="font-normal text-primary/70"> Biomedical</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex xl:gap-10"
        >
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-primary/75 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNavigation />
      </Container>
    </header>
  );
}
