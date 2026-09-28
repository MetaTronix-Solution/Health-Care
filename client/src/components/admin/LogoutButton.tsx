"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { api } from "@/src/lib/api/client";
import { setAccessToken } from "@/src/lib/auth/token-store";
import { csrfHeaders } from "@/src/lib/auth/csrf-client";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      // 1. Invalidate the refresh token in NestJS (uses the in-memory access token)
      await api("/auth/logout", { method: "POST" }).catch(() => {});
    } finally {
      // 2. Drop the in-memory access token
      setAccessToken(null);

      // 3. Clear the httpOnly cookies, once, with the CSRF header
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: { ...csrfHeaders() },
      }).catch(() => {});

      router.replace("/login");
      router.refresh();
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white disabled:opacity-50"
    >
      <LogOut aria-hidden className="h-[18px] w-[18px] shrink-0" />
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}
