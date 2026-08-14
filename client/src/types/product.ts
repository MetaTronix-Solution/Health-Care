// Public-facing catalog product (marketing site)
export interface ProductSpec {
  label: string;
  value: string;
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
