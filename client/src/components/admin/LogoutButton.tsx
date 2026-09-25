"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { api } from "@/src/lib/api/client";
import { setAccessToken } from "@/src/lib/auth/token-store";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await api("/auth/logout", { method: "POST" }).catch(() => {});
    } finally {
      setAccessToken(null);
      await fetch("/api/auth/logout", { method: "POST" }); // clears refresh cookie
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
