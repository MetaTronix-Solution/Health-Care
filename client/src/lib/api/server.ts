import { cookies } from "next/headers";
import { ApiError } from "./errors";

export async function apiServer<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const token = (await cookies()).get("access_token")?.value;
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...init.headers,
    },
    cache: "no-store",
  });
  if (!res.ok)
    throw new ApiError(res.status, await res.json().catch(() => null));
  return res.json();
}
