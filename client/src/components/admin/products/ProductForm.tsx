"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import {
  AdminActionBar,
  AdminActionBarGroup,
} from "@/src/components/admin/AdminActionBar";
import { Button } from "@/src/components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/Card";
import { Input } from "@/src/components/ui/Input";
import { Select } from "@/src/components/ui/Select";
import { Textarea } from "@/src/components/ui/Textarea";
import { FormField } from "@/src/components/ui/FormField";
import { SpecificationList } from "@/src/components/admin/products/SpecificationList";
import { ProductImageUpload } from "@/src/components/admin/products/ProductImageUpload";
import { generateProductSeoDefaults } from "@/src/lib/seo/product-seo";
import { COMPANY } from "@/src/data/company";
import type {
  AdminProduct as Product,
  ProductSpecification,
} from "@/src/types/product";

export interface ProductFormProps {
  product?: Product;
  manufacturers?: string[];
}

const DEFAULT_MANUFACTURERS = [
  "BMC Medical",
  "Philips Healthcare",
  "ResMed",
  "Fisher & Paykel",
];

export function ProductForm({
  product,
  manufacturers = DEFAULT_MANUFACTURERS,
}: ProductFormProps) {
  const [name, setName] = useState(product?.name ?? "");
  const [sku, setSku] = useState(product?.sku ?? "");
  const [manufacturer, setManufacturer] = useState(
    product?.manufacturer ?? manufacturers[0],
  );
  const [description, setDescription] = useState(
    product?.fullDescription ?? "",
  );
  const [status, setStatus] = useState(product?.status ?? "draft");
  const [basePrice, setBasePrice] = useState(
    product?.basePrice?.toString() ?? "",
  );
  const [requiresApproval, setRequiresApproval] = useState(
    product?.requiresClinicalApproval ?? false,
  );
  const [specifications, setSpecifications] = useState<ProductSpecification[]>(
    product?.specifications ?? [{ label: "", value: "" }],
  );
  const [metaTitle, setMetaTitle] = useState(product?.seo.title ?? "");
  const [metaDescription, setMetaDescription] = useState(
    product?.seo.metaDescription ?? "",
  );
  const [metaKeywords, setMetaKeywords] = useState("");
  const [slug, setSlug] = useState(product?.seo.slug ?? "");

  const isEditing = Boolean(product);

  function applySeoDefaults() {
    const defaults = generateProductSeoDefaults({
      name,
      shortDescription: description.slice(0, 160),
    });
    setMetaTitle(defaults.title);
    setMetaDescription(defaults.metaDescription);
    if (!slug || !isEditing) setSlug(defaults.slug);
  }

  function submitProduct(publish: boolean) {
    const seoDefaults = generateProductSeoDefaults({
      name,
      shortDescription: description.slice(0, 160),
    });

    console.info("Product form submitted", {
      name,
      sku,
      manufacturer,
      description,
      status: publish ? "active" : status,
      basePrice,
      requiresApproval,
      specifications,
      seo: {
        title: metaTitle || seoDefaults.title,
        metaDescription: metaDescription || seoDefaults.metaDescription,
        slug: slug || seoDefaults.slug,
        keywords: metaKeywords || undefined,
      },
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitProduct(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[var(--admin-form-max-width)] flex-col gap-6"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <FormField label="Product Name" htmlFor="product-name">
                <Input
                  id="product-name"
                  placeholder="e.g. CardioMonitor X-200"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </FormField>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="SKU" htmlFor="product-sku">
                  <Input
                    id="product-sku"
                    placeholder="MD-CMX-200"
                    value={sku}
                    onChange={(event) => setSku(event.target.value)}
                    required
                  />
                </FormField>
                <FormField label="Manufacturer" htmlFor="product-manufacturer">
                  <Select
                    id="product-manufacturer"
                    value={manufacturer}
                    onChange={(event) => setManufacturer(event.target.value)}
                  >
                    {manufacturers.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>
              <FormField
                label="Detailed Description"
                htmlFor="product-description"
              >
                <Textarea
                  id="product-description"
                  placeholder="Enter comprehensive product details..."
                  rows={5}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </FormField>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
              <button
                type="button"
                onClick={() =>
                  setSpecifications((prev) => [
                    ...prev,
                    { label: "", value: "" },
                  ])
                }
                className="flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
              >
                <Plus aria-hidden className="h-4 w-4" />
                Add Field
              </button>
            </CardHeader>
            <CardContent>
              <SpecificationList
                specifications={specifications}
                onChange={setSpecifications}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Search Engine Optimization</CardTitle>
              <button
                type="button"
                onClick={applySeoDefaults}
                className="text-sm font-medium text-secondary hover:underline"
              >
                Generate from product
              </button>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField label="SEO Title" htmlFor="seo-title">
                <Input
                  id="seo-title"
                  placeholder={`${name || "Product Name"} | ${COMPANY.name} Nepal`}
                  value={metaTitle}
                  onChange={(event) => setMetaTitle(event.target.value)}
                />
              </FormField>
              <FormField label="URL Slug" htmlFor="seo-slug">
                <Input
                  id="seo-slug"
                  placeholder="bmc-g3-a20-auto-cpap"
                  value={slug}
                  onChange={(event) => setSlug(event.target.value)}
                />
              </FormField>
              <FormField
                label="Meta Description"
                htmlFor="seo-description"
                hint="Recommended: 140–160 characters describing the product for search results."
              >
                <Textarea
                  id="seo-description"
                  rows={3}
                  value={metaDescription}
                  onChange={(event) => setMetaDescription(event.target.value)}
                />
              </FormField>
              <FormField
                label="Meta Keywords (optional)"
                htmlFor="seo-keywords"
                hint="Optional. Modern search engines rely primarily on page content and titles."
              >
                <Input
                  id="seo-keywords"
                  placeholder="CPAP, sleep apnea, BMC Medical, Nepal"
                  value={metaKeywords}
                  onChange={(event) => setMetaKeywords(event.target.value)}
                />
              </FormField>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <FormField label="Status" htmlFor="product-status">
                <Select
                  id="product-status"
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value as Product["status"])
                  }
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                  <option value="archived">Archived</option>
                </Select>
              </FormField>
              <FormField label="Base Price (USD)" htmlFor="product-price">
                <Input
                  id="product-price"
                  type="number"
                  min={0}
                  step="0.01"
                  placeholder="0.00"
                  value={basePrice}
                  onChange={(event) => setBasePrice(event.target.value)}
                />
              </FormField>
              <label className="flex items-center gap-2.5 text-sm text-primary">
                <input
                  type="checkbox"
                  checked={requiresApproval}
                  onChange={(event) =>
                    setRequiresApproval(event.target.checked)
                  }
                  className="h-4 w-4 rounded border-neutral-line text-secondary focus-visible:outline-2 focus-visible:outline-secondary"
                />
                Requires Clinical Approval
              </label>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Media</CardTitle>
            </CardHeader>
            <CardContent>
              <ProductImageUpload />
            </CardContent>
          </Card>
        </div>
      </div>

      <AdminActionBar>
        <Button variant="ghost" href="/admin/products">
          Cancel
        </Button>
        <AdminActionBarGroup>
          <Button
            type="button"
            variant="secondary"
            onClick={() => submitProduct(false)}
          >
            Save Draft
          </Button>
          <Button
            type="button"
            variant="primary"
            onClick={() => submitProduct(true)}
          >
            {isEditing ? "Save Changes" : "Publish Product"}
          </Button>
        </AdminActionBarGroup>
      </AdminActionBar>
    </form>
  );
}
