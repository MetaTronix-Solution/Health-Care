"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogOut, Settings, User } from "lucide-react";
import type { AdminUser } from "@/src/types/admin-user";

export function ProfileMenu({ user }: { user: AdminUser }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickAway = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickAway);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickAway);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-neutral-line focus-visible:outline-2 focus-visible:outline-secondary"
      >
        {user.avatarUrl ? (
          <Image
            src={user.avatarUrl}
            alt={`${user.name} avatar`}
            width={36}
            height={36}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-neutral-bg text-xs font-semibold text-primary">
            {user.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </span>
        )}
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-40 mt-2 w-56 rounded-md border border-neutral-line bg-white py-2 shadow-lg"
        >
          <div className="border-b border-neutral-line px-4 py-3">
            <p className="text-sm font-semibold text-primary">{user.name}</p>
            <p className="truncate text-xs text-neutral-muted">{user.email}</p>
          </div>
          <Link
            href="/system/profile"
            role="menuitem"
            className="flex items-center gap-2 px-4 py-2 text-sm text-primary hover:bg-neutral-bg"
          >
            <User aria-hidden className="h-4 w-4" />
            Profile
          </Link>
          <Link
            href="/system"
            role="menuitem"
            className="flex items-center gap-2 px-4 py-2 text-sm text-primary hover:bg-neutral-bg"
          >
            <Settings aria-hidden className="h-4 w-4" />
            Settings
          </Link>
          <Link
            href="/login"
            role="menuitem"
            className="flex items-center gap-2 px-4 py-2 text-sm text-primary hover:bg-neutral-bg"
          >
            <LogOut aria-hidden className="h-4 w-4" />
            Sign out
          </Link>
        </div>
      ) : null}
    </div>
  );
}
