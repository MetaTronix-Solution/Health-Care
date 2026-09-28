"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setAccessToken } from "@/src/lib/auth/token-store";
import { csrfHeaders } from "@/src/lib/auth/csrf-client";

export function AuthBootstrap({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/auth/refresh", {
      method: "POST",
      headers: { ...csrfHeaders() },
    })
      .then(async (res) => {
        if (cancelled) return;
        if (!res.ok) {
          router.replace("/login");
          return;
        }
        const { accessToken } = await res.json();
        setAccessToken(accessToken);
        setReady(true);
      })
      .catch(() => {
        if (!cancelled) router.replace("/login");
      });

    return () => {
      cancelled = true;
    };
  }, [router]);

  if (!ready) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-sm text-neutral-muted">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
