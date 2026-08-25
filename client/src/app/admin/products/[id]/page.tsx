import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { AdminBreadcrumbs } from "@/src/components/admin/AdminBreadcrumbs";
import { ProductForm } from "@/src/components/admin/products/ProductForm";
import { products } from "@/src/data/products";
import { createAdminMetadata } from "@/src/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const product = products.find((item) => item.slug === id);

  return createAdminMetadata(product ? `Edit ${product.name}` : "Product Not Found");
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.slug === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="admin-page">
      <AdminBreadcrumbs
        items={[
          { label: "Products", href: "/admin/products" },
          { label: product.name },
        ]}
      />

      <PageHeader
        title={product.name}
        description={`Editing specifications and business rules for ${product.name}.`}
      />

      <ProductForm
        product={
          product
            ? {
                id: product.slug,
                name: product.name,
                sku: product.refCode,
                category: product.category,
                manufacturer: "BMC Medical",
                shortDescription: product.shortDescription,
                fullDescription: product.description,
                status: "active",
                basePrice: 0,
                requiresClinicalApproval: false,
                views: 0,
                lastUpdated: new Date().toISOString(),
                specifications: [],
                seo: {
                  title: `${product.name} | Himanshi Biomedical Nepal`,
                  metaDescription: product.shortDescription,
                  slug: product.slug,
                },
              }
            : undefined
        }
      />
    </div>
  );
}
