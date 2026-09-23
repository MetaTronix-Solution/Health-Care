export async function apiPublic<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }
  return res.json();
}
