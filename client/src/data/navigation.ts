export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  company: [
    { label: "About", href: "/about" },
    { label: "Global Locations", href: "/about#locations" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms-of-service" },
    { label: "Regulatory Compliance", href: "/legal/regulatory-compliance" },
  ],
  resources: [
    { label: "Support", href: "/contact" },
    { label: "Documentation", href: "/resources" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};
