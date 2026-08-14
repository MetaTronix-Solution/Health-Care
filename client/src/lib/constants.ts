import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  ClipboardList,
  Archive,
  Wallet,
  Settings as SettingsIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutGrid },
  { label: "Management", href: "/management", icon: ClipboardList },
  { label: "Resources", href: "/resources", icon: Archive },
  { label: "Business", href: "/business", icon: Wallet },
  { label: "System", href: "/system", icon: SettingsIcon },
];

export const TOP_NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Analytics", href: "/analytics" },
  { label: "Reports", href: "/reports" },
];
