"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { Textarea } from "@/src/components/ui/Textarea";
import { FormField } from "@/src/components/ui/FormField";
import { DetailSectionList } from "@/src/components/admin/products/DetailSectionList";
import { ProductImageUpload } from "@/src/components/admin/products/ProductImageUpload";
import { api } from "@/src/lib/api/client";
import { ApiError } from "@/src/lib/api/errors";
import type {
  AdminProduct,
  AdminProductDetailSection,
} from "@/src/types/product";

export interface ProductFormProps {
  product?: AdminProduct;
}

export function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const isEditing = Boolean(product);

  const [name, setName] = useState(product?.name ?? "");
  const [category, setCategory] = useState(product?.category ?? "");
  const [manufacturer, setManufacturer] = useState(product?.manufacturer ?? "");
  const [shortDescription, setShortDescription] = useState(
    product?.shortDescription ?? "",
  );
  const [description, setDescription] = useState(product?.description ?? "");
  const [price, setPrice] = useState(product?.price?.toString() ?? "");
  const [stock, setStock] = useState(product?.stock?.toString() ?? "");
  const [isPublished, setIsPublished] = useState(product?.isPublished ?? true);

  const initialDetails: AdminProductDetailSection[] = product?.details?.length
    ? product.details.map((d) => ({
        _id: d._id,
        title: d.title ?? "",
        body: d.body ?? "",
        specs: (d.specs ?? []).map((s) => ({
          label: s.label ?? "",
          value: s.value ?? "",
        })),
      }))
    : [];

  const [details, setDetails] =
    useState<AdminProductDetailSection[]>(initialDetails);

  const [existingImages, setExistingImages] = useState(product?.images ?? []);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [removedFileIds, setRemovedFileIds] = useState<string[]>([]);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleRemoveExisting(fileId: string) {
    setExistingImages((prev) => prev.filter((img) => img.fileId !== fileId));
    setRemovedFileIds((prev) => [...prev, fileId]);
  }

  function buildFormData() {
    const fd = new FormData();
    fd.append("name", name);
    fd.append("category", category);
    fd.append("manufacturer", manufacturer);
    fd.append("shortDescription", shortDescription);
    fd.append("description", description);
    fd.append("price", price);
    fd.append("stock", stock);
    fd.append("isPublished", String(isPublished));

    const cleanDetails = details
      .filter((d) => d.title.trim() && d.body.trim())
      .map((d) => ({
        _id: d._id,
        title: d.title,
        body: d.body,
        specs: d.specs.filter((s) => s.label.trim() && s.value.trim()),
      }));

    fd.append("details", JSON.stringify(cleanDetails));
    newFiles.forEach((file) => fd.append("images", file));
    return fd;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSaving(true);

    try {
      if (isEditing && removedFileIds.length > 0) {
        await Promise.all(
          removedFileIds.map((fileId) =>
            api(`/products/${product!._id}/images/${fileId}`, {
              method: "DELETE",
            }),
          ),
        );
      }

      const fd = buildFormData();

      if (isEditing) {
        await api(`/products/${product!._id}`, { method: "PATCH", body: fd });
      } else {
        await api("/products", { method: "POST", body: fd });
      }

      router.push("/admin/products");
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Failed to save product",
      );
    } finally {
      setSaving(false);
    }
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
                  placeholder="e.g. BMC G3 A20"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </FormField>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="Category" htmlFor="product-category">
                  <Input
                    id="product-category"
                    placeholder="e.g. Sleep Therapy"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    required
                  />
                </FormField>
                <FormField label="Manufacturer" htmlFor="product-manufacturer">
                  <Input
                    id="product-manufacturer"
                    placeholder="e.g. BMC Medical"
                    value={manufacturer}
                    onChange={(event) => setManufacturer(event.target.value)}
                    required
                  />
                </FormField>
              </div>
              <FormField
                label="Short Description"
                htmlFor="product-short-description"
              >
                <Textarea
                  id="product-short-description"
                  placeholder="One or two sentences shown on product cards..."
                  rows={2}
                  maxLength={300}
                  value={shortDescription}
                  onChange={(event) => setShortDescription(event.target.value)}
                  required
                />
              </FormField>
              <FormField label="Full Description" htmlFor="product-description">
                <Textarea
                  id="product-description"
                  placeholder="Enter comprehensive product details..."
                  rows={5}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                />
              </FormField>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
            </CardHeader>
            <CardContent>
              <DetailSectionList sections={details} onChange={setDetails} />
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <FormField label="Price" htmlFor="product-price">
                  <Input
                    id="product-price"
                    type="number"
                    min={0}
                    step="0.01"
                    placeholder="0.00"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    required
                  />
                </FormField>
                <FormField label="Stock" htmlFor="product-stock">
                  <Input
                    id="product-stock"
                    type="number"
                    min={0}
                    step="1"
                    placeholder="0"
                    value={stock}
                    onChange={(event) => setStock(event.target.value)}
                    required
                  />
                </FormField>
              </div>
              <label className="flex items-center gap-2.5 text-sm text-primary">
                <input
                  type="checkbox"
                  checked={isPublished}
                  onChange={(event) => setIsPublished(event.target.checked)}
                  className="h-4 w-4 rounded border-neutral-line text-secondary focus-visible:outline-2 focus-visible:outline-secondary"
                />
                Published
              </label>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Media</CardTitle>
            </CardHeader>
            <CardContent>
              <ProductImageUpload
                existingImages={existingImages}
                onRemoveExisting={handleRemoveExisting}
                newFiles={newFiles}
                onNewFilesChange={setNewFiles}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <AdminActionBar>
        <Button variant="ghost" href="/admin/products">
          Cancel
        </Button>
        <AdminActionBarGroup>
          <Button type="submit" variant="primary" disabled={saving}>
            {saving
              ? "Saving..."
              : isEditing
                ? "Save Changes"
                : "Publish Product"}
          </Button>
        </AdminActionBarGroup>
      </AdminActionBar>
    </form>
  );
}
