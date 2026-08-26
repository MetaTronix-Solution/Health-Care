"use client";

import { useState } from "react";
import Link from "next/link";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

export function BlogRowActions({ slug }: { slug: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-end">
      <button
        type="button"
        aria-label="Open actions menu"
        onClick={() => setIsOpen((value) => !value)}
        className="rounded-md p-1.5 text-neutral-muted hover:bg-neutral-bg hover:text-primary"
      >
        <MoreHorizontal aria-hidden className="h-4 w-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full z-20 mt-1 w-36 overflow-hidden rounded-md border border-neutral-line bg-white shadow-lg">
            <Link
              href={`/admin/blog/${slug}`}
              className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-neutral-bg"
              onClick={() => setIsOpen(false)}
            >
              <Pencil aria-hidden className="h-3.5 w-3.5" />
              Edit
            </Link>
            <button
              type="button"
              onClick={() => {
                // TODO: replace with your actual delete-article API call
                console.log("Deleting article:", slug);
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
            >
              <Trash2 aria-hidden className="h-3.5 w-3.5" />
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
