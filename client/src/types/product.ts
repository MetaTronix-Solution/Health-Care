import type { LucideIcon } from "lucide-react";

// Public-facing catalog product (marketing site, static data)

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
  updatedAt?: string;
  transducerTech?: string;
  details: ProductDetailSection[];
  applications: string[];
  downloads: { label: string; href: string }[];
}

export type SortOption = "featured" | "name-asc" | "name-desc";

export type ViewMode = "grid" | "list";

// Admin dashboard product (real backend shape — matches NestJS schema)

export interface AdminProductSpecification {
  _id?: string;
  label: string;
  value: string;
}

export interface AdminProductImage {
  url: string;
  fileId: string;
  name: string;
}

export type AdminStockStatus = "In Stock" | "Low Stock" | "Backordered";

export interface AdminProduct {
  _id: string;
  name: string;
  slug: string;
  category: string;
  manufacturer: string;
  shortDescription: string;
  description: string;
  price: number;
  stock: number;
  images: AdminProductImage[];
  specifications: AdminProductSpecification[];
  isPublished: boolean;
  views: number;
  stockStatus?: AdminStockStatus;
  createdAt: string;
  updatedAt: string;
}
