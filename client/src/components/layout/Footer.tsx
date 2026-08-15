import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { COMPANY } from "@/src/data/company";

export function Footer() {
  return (
    <footer className="bg-neutral-bg">
      <div className="border-b border-neutral-line">
        <Container className="section-padding-sm">
          <div className="max-w-2xl">
            <h2 className="text-section-title text-primary mb-5">
              Quality Sleep & Respiratory Care in Nepal
            </h2>
            <p className="text-body text-neutral-muted mb-8">
              Partner with {COMPANY.name} for BMC Medical products, professional
              technical support, and dependable after-sales service.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" icon={<ArrowRight size={15} />}>
                Contact Us
              </Button>
              <Button href="/products" variant="outlined">
                Browse Products
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-12 lg:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-1">
            <p className="eyebrow mb-4">Company</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/about" className="text-body-sm text-primary/80 transition-colors hover:text-secondary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-body-sm text-primary/80 transition-colors hover:text-secondary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-body-sm text-primary/80 transition-colors hover:text-secondary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-body-sm text-primary/80 transition-colors hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Products</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/products" className="text-body-sm text-primary/80 transition-colors hover:text-secondary">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-body-sm text-primary/80 transition-colors hover:text-secondary">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Support</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/services" className="text-body-sm text-primary/80 transition-colors hover:text-secondary">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-body-sm text-primary/80 transition-colors hover:text-secondary">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-body-sm text-primary/80 transition-colors hover:text-secondary">
                  After-Sales Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <p className="eyebrow mb-4">About</p>
            <p className="text-body-sm leading-relaxed text-primary/80">
              {COMPANY.description}
            </p>
            <p className="text-body-sm mt-3 font-medium text-primary">
              {COMPANY.distributorNote}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-sm text-neutral-muted">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/about" className="text-body-sm text-neutral-muted hover:text-secondary">
              About
            </Link>
            <Link href="/contact" className="text-body-sm text-neutral-muted hover:text-secondary">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
