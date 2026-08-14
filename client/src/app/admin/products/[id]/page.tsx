import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { AdminBreadcrumbs } from "@/src/components/admin/AdminBreadcrumbs";
import { ProductForm } from "@/src/components/admin/products/ProductForm";
import { products } from "@/src/data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  return {
    title: product ? product.name : "Product Not Found",
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8">
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

      <ProductForm product={product} />
    </div>
  );
}
