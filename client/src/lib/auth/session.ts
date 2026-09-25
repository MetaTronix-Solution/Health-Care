import type { NextResponse } from "next/server";

export type Tokens = { accessToken: string; refreshToken: string };

const secure = process.env.NODE_ENV === "production";
const base = { httpOnly: true, secure, sameSite: "lax" as const, path: "/" };

export const REFRESH_MAX_AGE = 60 * 60 * 24 * 7;

// Only the refresh token becomes a cookie now
export function setRefreshCookie(res: NextResponse, refreshToken: string) {
  res.cookies.set("refresh_token", refreshToken, {
    ...base,
    maxAge: REFRESH_MAX_AGE,
  });
}

export function clearSessionCookies(res: NextResponse) {
  res.cookies.delete("refresh_token");
}

const inflight = new Map<string, Promise<Tokens | null>>();

export function refreshTokens(refreshToken: string): Promise<Tokens | null> {
  let p = inflight.get(refreshToken);
  if (!p) {
    p = fetch(`${process.env.API_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
      cache: "no-store",
    })
      .then(async (r) => (r.ok ? ((await r.json()) as Tokens) : null))
      .catch(() => null);
    inflight.set(refreshToken, p);
    setTimeout(() => inflight.delete(refreshToken), 10_000);
  }
  return p;
}
