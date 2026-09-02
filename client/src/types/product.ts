import type { LucideIcon } from "lucide-react";
// Public-facing catalog product (marketing site)
export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductCategory {
  slug: string;
  label: string;
  icon: LucideIcon;
}

export interface ProductDetailSection {
  index: string;
  title: string;
  body: string;
  specs?: ProductSpec[];
  images?: string[];
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  refCode: string;
  coordinates: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  featured: boolean;
  imaging: string;
  application: string;
  manufacturer?: string;
  status?: "Published" | "Draft" | "Archived";
  views?: number;
  updatedAt?: string; // ISO date, e.g. "2026-08-15"
  transducerTech?: string;
  details: ProductDetailSection[];
  applications: string[];
  downloads: { label: string; href: string }[];
}

// Admin dashboard product (clinical admin portal)
export type AdminProductStatus =
  | "active"
  | "draft"
  | "archived"
  | "low-stock"
  | "backordered";

export type ProductSpecification = {
  label: string;
  value: string;
};

export type AdminProduct = {
  id: string;
  name: string;
  sku: string;
  category: string;
  manufacturer: string;
  shortDescription: string;
  fullDescription: string;
  status: AdminProductStatus;
  basePrice: number;
  requiresClinicalApproval: boolean;
  views: number;
  lastUpdated: string;
  specifications: ProductSpecification[];
  imageUrl?: string;
  seo: {
    title: string;
    metaDescription: string;
    slug: string;
  };
};

export type SortOption = "featured" | "name-asc" | "name-desc";

export type ViewMode = "grid" | "list";
