"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { UploadCloud, X } from "lucide-react";
import type { AdminProductImage } from "@/src/types/product";

interface NewImageItem {
  id: string;
  file: File;
  url: string;
}

const MAX_IMAGES = 6;
const MAX_SIZE_MB = 5;

export interface ProductImageUploadProps {
  existingImages: AdminProductImage[];
  onRemoveExisting: (fileId: string) => void;
  newFiles: File[];
  onNewFilesChange: (files: File[]) => void;
}

export function ProductImageUpload({
  existingImages,
  onRemoveExisting,
  newFiles,
  onNewFilesChange,
}: ProductImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<NewImageItem[]>([]);
  const [isDragActive, setIsDragActive] = useState(false);

  useEffect(() => {
    const items = newFiles.map((file) => ({
      id: `${file.name}-${file.size}`,
      file,
      url: URL.createObjectURL(file),
    }));
    setPreviews(items);
    return () => {
      items.forEach((item) => URL.revokeObjectURL(item.url));
    };
  }, [newFiles]);

  const totalCount = existingImages.length + newFiles.length;
  const canAddMore = totalCount < MAX_IMAGES;

  function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;

    const incoming = Array.from(files);
    const remainingSlots = MAX_IMAGES - totalCount;

    const accepted = incoming
      .filter((file) => file.size <= MAX_SIZE_MB * 1024 * 1024)
      .slice(0, remainingSlots);

    if (accepted.length === 0) return;
    onNewFilesChange([...newFiles, ...accepted]);

    if (inputRef.current) inputRef.current.value = "";
  }

  function removeNewFile(id: string) {
    const target = previews.find((p) => p.id === id);
    if (!target) return;
    onNewFilesChange(newFiles.filter((f) => f !== target.file));
  }

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        multiple
        className="sr-only"
        onChange={(event) => handleFiles(event.target.files)}
      />

      {(existingImages.length > 0 || previews.length > 0) && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {existingImages.map((img) => (
            <div
              key={img.fileId}
              className="relative overflow-hidden rounded-md border border-neutral-line"
            >
              <Image
                src={img.url}
                alt={img.name}
                width={240}
                height={160}
                className="h-32 w-full object-cover"
              />
              <button
                type="button"
                onClick={() => onRemoveExisting(img.fileId)}
                aria-label="Remove image"
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-primary hover:bg-white focus-visible:outline-2 focus-visible:outline-secondary"
              >
                <X aria-hidden className="h-4 w-4" />
              </button>
            </div>
          ))}

          {previews.map((img) => (
            <div
              key={img.id}
              className="relative overflow-hidden rounded-md border border-neutral-line"
            >
              <Image
                src={img.url}
                alt="New upload preview"
                width={240}
                height={160}
                className="h-32 w-full object-cover"
                unoptimized
              />
              <span className="absolute left-2 top-2 rounded bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-white">
                New
              </span>
              <button
                type="button"
                onClick={() => removeNewFile(img.id)}
                aria-label="Remove uploaded image"
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-primary hover:bg-white focus-visible:outline-2 focus-visible:outline-secondary"
              >
                <X aria-hidden className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {canAddMore && (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragActive(true);
          }}
          onDragLeave={() => setIsDragActive(false)}
          onDrop={(event) => {
            event.preventDefault();
            setIsDragActive(false);
            handleFiles(event.dataTransfer.files);
          }}
          className={`flex w-full flex-col items-center justify-center gap-3 rounded-md border-2 border-dashed px-6 py-10 text-center transition-colors focus-visible:outline-2 focus-visible:outline-secondary ${
            isDragActive
              ? "border-secondary bg-blue-50"
              : "border-neutral-line hover:bg-neutral-bg"
          }`}
        >
          <UploadCloud aria-hidden className="h-8 w-8 text-neutral-muted" />
          <span className="text-sm font-medium text-primary">
            Click to upload or drag and drop
          </span>
          <span className="text-xs text-neutral-muted">
            PNG, JPG or WEBP (max. {MAX_SIZE_MB}MB each, up to {MAX_IMAGES}{" "}
            images)
          </span>
        </button>
      )}
    </div>
  );
}
