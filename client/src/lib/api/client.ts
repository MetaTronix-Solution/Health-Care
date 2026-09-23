import { ApiError } from "./errors";

export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const isFormData = init.body instanceof FormData;
  const res = await fetch(`/api/proxy${path}`, {
    ...init,
    headers: {
      ...(!isFormData && { "Content-Type": "application/json" }),
      ...init.headers,
    },
  });
  if (!res.ok)
    throw new ApiError(res.status, await res.json().catch(() => null));
  return res.status === 204 ? (undefined as T) : res.json();
}
