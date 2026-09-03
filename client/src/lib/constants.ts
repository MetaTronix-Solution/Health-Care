import type { LucideIcon } from "lucide-react";
import { LayoutGrid, Archive, Wallet, Inbox } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "/admin/dashboard", icon: LayoutGrid },
  { label: "Products", href: "/admin/products", icon: Archive },
  { label: "Blog", href: "/admin/blog", icon: Wallet },
  { label: "Inquiries", href: "/admin/inquiries", icon: Inbox },
];
