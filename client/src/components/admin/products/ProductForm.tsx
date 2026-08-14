"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/Card";
import { Input } from "@/src/components/ui/Input";
import { Select } from "@/src/components/ui/Select";
import { FormField } from "@/src/components/ui/FormField";
import { SpecificationList } from "@/src/components/admin/products/SpecificationList";
import { ProductImageUpload } from "@/src/components/admin/products/ProductImageUpload";
import type {
  AdminProduct as Product,
  ProductSpecification,
} from "@/src/types/product";

export interface ProductFormProps {
  product?: Product;
  manufacturers?: string[];
}

const DEFAULT_MANUFACTURERS = [
  "MedTech Industries",
  "Philips Healthcare",
  "Siemens Healthineers",
  "Medtronic",
  "Stryker",
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
  const [slug, setSlug] = useState(product?.seo.slug ?? "");

  const isEditing = Boolean(product);

  function submitProduct(publish: boolean) {
    // Integration point: replace with a real API/database call once the
    // backend is available. This form intentionally does not fake a network
    // request.
    console.info("Product form submitted", {
      name,
      sku,
      manufacturer,
      description,
      status: publish ? "active" : status,
      basePrice,
      requiresApproval,
      specifications,
      seo: { title: metaTitle, metaDescription, slug },
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitProduct(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 lg:grid-cols-3"
    >
      <div className="flex flex-col gap-6 lg:col-span-2">
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
              <textarea
                id="product-description"
                placeholder="Enter comprehensive product details..."
                rows={5}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="w-full rounded-md border border-neutral-line bg-white px-3 py-2 text-sm text-primary placeholder:text-neutral-muted focus-visible:outline-2 focus-visible:outline-secondary"
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
                setSpecifications((prev) => [...prev, { label: "", value: "" }])
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
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField label="Meta Title" htmlFor="seo-title">
              <Input
                id="seo-title"
                placeholder="Title for search engines"
                value={metaTitle}
                onChange={(event) => setMetaTitle(event.target.value)}
              />
            </FormField>
            <FormField label="Meta Keywords" htmlFor="seo-keywords">
              <Input id="seo-keywords" placeholder="medical, monitor, icu" />
            </FormField>
            <FormField label="Meta Description" htmlFor="seo-description">
              <textarea
                id="seo-description"
                rows={3}
                value={metaDescription}
                onChange={(event) => setMetaDescription(event.target.value)}
                className="w-full rounded-md border border-neutral-line bg-white px-3 py-2 text-sm text-primary placeholder:text-neutral-muted focus-visible:outline-2 focus-visible:outline-secondary"
              />
            </FormField>
            <FormField label="URL Slug" htmlFor="seo-slug">
              <Input
                id="seo-slug"
                placeholder="cardiomonitor-x-200"
                value={slug}
                onChange={(event) => setSlug(event.target.value)}
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
            <label className="flex items-center gap-2 text-sm text-primary">
              <input
                type="checkbox"
                checked={requiresApproval}
                onChange={(event) => setRequiresApproval(event.target.checked)}
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

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button
            type="button"
            variant="primary"
            className="flex-1"
            onClick={() => submitProduct(true)}
          >
            {isEditing ? "Save Changes" : "Publish Product"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="flex-1"
            onClick={() => submitProduct(false)}
          >
            Save Draft
          </Button>
          <Link
            href="/resources"
            className="inline-flex flex-1 items-center justify-center rounded-md border border-neutral-line bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-neutral-bg"
          >
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
}
