"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setAccessToken } from "@/src/lib/auth/token-store";

export function AuthBootstrap({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch("/api/auth/refresh", { method: "POST" })
      .then(async (res) => {
        if (!res.ok) {
          router.replace("/login");
          return;
        }
        const { accessToken } = await res.json();
        setAccessToken(accessToken);
        setReady(true);
      })
      .catch(() => router.replace("/login"));
  }, [router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-neutral-muted">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
