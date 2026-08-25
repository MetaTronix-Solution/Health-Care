import Link from "next/link";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { COMPANY } from "@/src/data/company";

const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Solutions", href: "/solutions" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Technical Support", href: "/services" },
      { label: "Resources", href: "/resources" },
      { label: "After-Sales Service", href: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M13.5 21v-7.5H16l.5-3H13.5V8.25c0-.87.25-1.46 1.5-1.46h1.5V4.14C16.17 4.1 15.24 4 14.14 4 11.85 4 10.5 5.35 10.5 7.95V10.5H8v3h2.5V21h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3.5 8.98h3v11.52h-3zM9.5 8.98h2.87v1.58h.04c.4-.75 1.38-1.55 2.85-1.55 3.05 0 3.62 2 3.62 4.6v6.89h-3v-6.1c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.6-2.35 3.24v6.2h-3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M22 12s0-3.2-.41-4.74a2.78 2.78 0 0 0-1.95-1.96C17.94 5 12 5 12 5s-5.94 0-7.64.3a2.78 2.78 0 0 0-1.95 1.96C2 8.8 2 12 2 12s0 3.2.41 4.74a2.78 2.78 0 0 0 1.95 1.96C6.06 19 12 19 12 19s5.94 0 7.64-.3a2.78 2.78 0 0 0 1.95-1.96C22 15.2 22 12 22 12z" />
        <path
          d="M10 15.5V8.5l6 3.5-6 3.5z"
          fill="var(--footer-social-bg,white)"
        />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-line bg-accent-bg">
      <Container className="py-14 lg:py-16">
        {/* Top: link columns + about blurb */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-primary">
                {column.title}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-primary/70 transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-primary">
              About
            </p>
            <p className="text-body-sm mt-5 max-w-sm leading-relaxed text-primary/70">
              {COMPANY.description}
            </p>
            <p className="text-body-sm mt-3 font-medium text-primary">
              {COMPANY.distributorNote}
            </p>
          </div>
        </div>

        {/* Middle: logo + social icons */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 pt-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-1.5">
            <div className="relative h-10 w-14 shrink-0">
              <Image
                src="/BMC.png"
                alt={COMPANY.name}
                fill
                sizes="56px"
                className="object-contain object-left"
              />
            </div>
            <span className="text-body-sm text-neutral-muted">
              Official Distribution Partner
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors hover:bg-secondary hover:text-white"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar: copyright + legal */}
        <div className="mt-8 flex flex-col gap-4 border-t border-neutral-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-sm text-neutral-muted">
            Copyright © {COMPANY.name} {new Date().getFullYear()}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/about"
              className="text-body-sm text-neutral-muted hover:text-secondary"
            >
              Legal Statement
            </Link>
            <Link
              href="/contact"
              className="text-body-sm text-neutral-muted hover:text-secondary"
            >
              Notice
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
