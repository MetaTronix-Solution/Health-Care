import { ApiError } from "./errors";
import { getAccessToken, setAccessToken } from "@/src/lib/auth/token-store";

async function silentRefresh(): Promise<string | null> {
  const res = await fetch("/api/auth/refresh", { method: "POST" });
  if (!res.ok) return null;
  const { accessToken } = await res.json();
  setAccessToken(accessToken);
  return accessToken;
}

export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const isFormData = init.body instanceof FormData;
  let token = getAccessToken();

  const call = (t: string | null) =>
    fetch(`/api/proxy${path}`, {
      ...init,
      headers: {
        ...(!isFormData && { "Content-Type": "application/json" }),
        ...(t && { Authorization: `Bearer ${t}` }),
        ...init.headers,
      },
    });

  let res = await call(token);

  if (res.status === 401) {
    token = await silentRefresh();
    if (token) res = await call(token);
  }

  if (!res.ok)
    throw new ApiError(res.status, await res.json().catch(() => null));
  return res.status === 204 ? (undefined as T) : res.json();
}
