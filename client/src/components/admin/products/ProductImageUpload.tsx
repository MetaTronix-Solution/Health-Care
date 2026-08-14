"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { UploadCloud, X } from "lucide-react";

export function ProductImageUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/svg+xml,image/png,image/jpeg,image/gif"
        className="sr-only"
        onChange={(event) => handleFiles(event.target.files)}
      />
      {preview ? (
        <div className="relative overflow-hidden rounded-md border border-neutral-line">
          <Image
            src={preview}
            alt="Uploaded product preview"
            width={480}
            height={280}
            className="h-44 w-full object-cover"
            unoptimized
          />
          <button
            type="button"
            onClick={() => setPreview(null)}
            aria-label="Remove uploaded image"
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-primary hover:bg-white focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <X aria-hidden className="h-4 w-4" />
          </button>
        </div>
      ) : (
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
            isDragActive ? "border-secondary bg-blue-50" : "border-neutral-line hover:bg-neutral-bg"
          }`}
        >
          <UploadCloud aria-hidden className="h-8 w-8 text-neutral-muted" />
          <span className="text-sm font-medium text-primary">
            Click to upload or drag and drop
          </span>
          <span className="text-xs text-neutral-muted">SVG, PNG, JPG or GIF (max. 5MB)</span>
        </button>
      )}
    </div>
  );
}
