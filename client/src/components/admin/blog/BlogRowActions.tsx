"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { api } from "@/src/lib/api/client";

export function BlogRowActions({ id, slug }: { id: string; slug: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function openMenu() {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setCoords({ top: rect.bottom + 4, left: rect.right - 160 }); // 160 = menu width (w-40)
    }
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    const onClickAway = (event: MouseEvent) => {
      if (
        !menuRef.current?.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, [open]);

  async function handleDelete() {
    setOpen(false);
    if (!confirm("Delete this blog post? This can't be undone.")) return;

    try {
      await api(`/blog/${id}`, { method: "DELETE" });
      router.refresh();
    } catch {
      alert("Failed to delete blog post");
    }
  }

  return (
    <div className="relative flex justify-end">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? setOpen(false) : openMenu())}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Open article actions"
        className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-muted hover:bg-neutral-bg hover:text-primary focus-visible:outline-2 focus-visible:outline-secondary"
      >
        <MoreHorizontal aria-hidden className="h-4 w-4" />
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={menuRef}
            role="menu"
            style={{ top: coords.top, left: coords.left }}
            className="fixed z-50 w-40 rounded-md border border-neutral-line bg-white py-1 text-left shadow-lg"
          >
            <Link
              href={`/admin/blog/${id}`}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-neutral-bg"
            >
              <Pencil aria-hidden className="h-4 w-4" /> Edit
            </Link>
            <button
              type="button"
              role="menuitem"
              onClick={handleDelete}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
            >
              <Trash2 aria-hidden className="h-4 w-4" /> Delete
            </button>
          </div>,
          document.body,
        )}
    </div>
  );
}
