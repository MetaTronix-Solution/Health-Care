import Link from "next/link";
import { Share2, ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-neutral-bg">
      {/* Top CTA Section */}
      <div className="border-b border-neutral-line">
        <Container className="py-20 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-primary mb-6">
              Let&apos;s Build Better Healthcare Together
            </h2>
            <p className="text-lg text-neutral-muted mb-8">
              Partner with MedTech Pro to integrate advanced medical technology
              into your clinical environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" icon={<ArrowRight size={15} />}>
                Contact Sales
              </Button>
              <Button href="/solutions" variant="secondary">
                Explore Solutions
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Navigation */}
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {/* Company */}
          <div>
            <p className="eyebrow mb-5">Company</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/about"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="eyebrow mb-5">Products</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/products/medical-equipment"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Medical Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/products/patient-monitoring"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Patient Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href="/products/diagnostic"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Diagnostic
                </Link>
              </li>
              <li>
                <Link
                  href="/products/critical-care"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Critical Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className="eyebrow mb-5">Solutions</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/solutions/hospitals"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Hospitals
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/clinics"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Clinics
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/healthcare-professionals"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Healthcare Professionals
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="eyebrow mb-5">Resources</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/resources/news"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/insights"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/downloads"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Downloads
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/support"
                  className="text-[14px] text-primary/80 transition-colors hover:text-secondary"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="flex flex-col gap-3">
              <li className="text-[14px] text-primary/80">+1 (800) 555-0199</li>
              <li className="text-[14px] text-primary/80">
                contact@medtechpro.com
              </li>
              <li className="text-[14px] text-primary/80">
                100 Innovation Way
                <br />
                Medical District, CA 94000
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal/Social Row */}
        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-neutral-muted">
            © {new Date().getFullYear()} MedTech Pro Corporation. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/legal/privacy"
              className="text-[13px] text-neutral-muted hover:text-secondary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="text-[13px] text-neutral-muted hover:text-secondary"
            >
              Terms
            </Link>
            <button
              type="button"
              aria-label="Share"
              className="flex items-center text-[13px] text-neutral-muted transition-colors hover:text-secondary"
            >
              <Share2 size={14} className="mr-2" /> Share
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
