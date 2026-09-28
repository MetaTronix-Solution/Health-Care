import { cache } from "react";
import type { AdminProduct, Product } from "@/src/types/product";

const API = process.env.API_URL!;

async function apiGet<T>(path: string): Promise<T | null> {
  const res = await fetch(`${API}${path}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`API ${res.status} for ${path}`);
  return res.json();
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toProduct(p: AdminProduct): Product {
  const gallery = p.images.map((img) => img.url);

  return {
    slug: p.slug,
    name: p.name,
    category: p.category,
    categorySlug: slugify(p.category),
    refCode: p.manufacturer,
    coordinates: "",
    shortDescription: p.shortDescription,
    description: p.description,
    image: gallery[0] ?? "/mainProduct.png",
    gallery,
    featured: false,
    imaging: "",
    application: "",
    manufacturer: p.manufacturer,
    status: p.isPublished ? "Published" : "Draft",
    views: p.views,
    updatedAt: p.updatedAt,
    price: p.price,
    stock: p.stock,
    details: (p.details ?? []).map((d, i) => ({
      index: String(i + 1).padStart(2, "0"),
      title: d.title,
      body: d.body,
      specs: d.specs ?? [],
    })),
    applications: p.applications ?? [],
  };
}

export const getProducts = cache(async (): Promise<Product[]> => {
  const data = await apiGet<{ items: AdminProduct[] }>("/products?limit=100");
  return (data?.items ?? []).map(toProduct);
});

export const getProductBySlug = cache(
  async (slug: string): Promise<Product | null> => {
    const data = await apiGet<AdminProduct>(
      `/products/${encodeURIComponent(slug)}`,
    );
    return data ? toProduct(data) : null;
  },
);

export async function getRelatedProducts(
  slug: string,
  categorySlug: string,
  limit = 3,
): Promise<Product[]> {
  const others = (await getProducts()).filter((p) => p.slug !== slug);
  return [
    ...others.filter((p) => p.categorySlug === categorySlug),
    ...others.filter((p) => p.categorySlug !== categorySlug),
  ].slice(0, limit);
}
