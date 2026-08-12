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
