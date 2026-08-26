"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { UploadCloud, X } from "lucide-react";

interface ImageItem {
  id: string;
  file: File;
  url: string;
}

const MAX_IMAGES = 6;
const MAX_SIZE_MB = 5;

export function ProductImageUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [isDragActive, setIsDragActive] = useState(false);

  // Revoke object URLs on unmount to avoid leaking memory
  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;

    const incoming = Array.from(files);
    const remainingSlots = MAX_IMAGES - images.length;

    const accepted = incoming
      .filter((file) => file.size <= MAX_SIZE_MB * 1024 * 1024)
      .slice(0, remainingSlots)
      .map((file) => ({
        id: `${file.name}-${file.size}-${crypto.randomUUID()}`,
        file,
        url: URL.createObjectURL(file),
      }));

    if (accepted.length === 0) return;
    setImages((prev) => [...prev, ...accepted]);

    // allow re-selecting the same file again later
    if (inputRef.current) inputRef.current.value = "";
  }

  function removeImage(id: string) {
    setImages((prev) => {
      const target = prev.find((img) => img.id === id);
      if (target) URL.revokeObjectURL(target.url);
      return prev.filter((img) => img.id !== id);
    });
  }

  const canAddMore = images.length < MAX_IMAGES;

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        type="file"
        accept="image/svg+xml,image/png,image/jpeg,image/gif"
        multiple
        className="sr-only"
        onChange={(event) => handleFiles(event.target.files)}
      />

      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative overflow-hidden rounded-md border border-neutral-line"
            >
              <Image
                src={img.url}
                alt="Uploaded product preview"
                width={240}
                height={160}
                className="h-32 w-full object-cover"
                unoptimized
              />
              <button
                type="button"
                onClick={() => removeImage(img.id)}
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
            SVG, PNG, JPG or GIF (max. {MAX_SIZE_MB}MB each, up to {MAX_IMAGES}{" "}
            images)
          </span>
        </button>
      )}
    </div>
  );
}
