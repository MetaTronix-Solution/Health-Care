"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Container } from "@/src/components/ui/Container";
import { mainNavigation } from "@/src/data/navigation";
import { MobileNavigation } from "@/src/components/layout/MobileNavigation";
import { COMPANY } from "@/src/data/company";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(isHome && latest > 20);
  });

  return (
    <div className="sticky top-0 z-50 flex justify-center">
      <motion.header
        className="w-full bg-tertiary/95 backdrop-blur-sm"
        animate={{
          maxWidth: isScrolled ? "76rem" : "100%",
          marginTop: isScrolled ? 12 : 0,
          borderRadius: isScrolled ? 16 : 0,
          boxShadow: isScrolled
            ? "0 8px 30px rgba(0,0,0,0.08)"
            : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          borderStyle: "solid",
          borderWidth: isScrolled ? 1 : "0 0 1px 0",
          borderColor: "var(--color-neutral-line, rgba(0,0,0,0.08))",
        }}
      >
        <motion.div
          animate={{ height: isScrolled ? 56 : 64 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Container className="flex h-full items-center justify-between gap-4">
            <Link
              href="/"
              className="shrink-0 text-lg font-semibold tracking-tight text-primary sm:text-[1.125rem]"
            >
              {COMPANY.shortName}
              <span className="font-normal text-primary/70">
                {" "}
                Biomedical Solution
              </span>
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
        </motion.div>
      </motion.header>
    </div>
  );
}
