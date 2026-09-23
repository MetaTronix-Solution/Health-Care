import type { NextResponse } from "next/server";

export type Tokens = { accessToken: string; refreshToken: string };

const secure = process.env.NODE_ENV === "production";
const base = { httpOnly: true, secure, sameSite: "lax" as const, path: "/" };
const inflight = new Map<string, Promise<Tokens | null>>();

// 15 minutes, match JWT_ACCESS_EXPIRES in your backend .env
export const ACCESS_MAX_AGE = 60 * 15;
export const REFRESH_MAX_AGE = 60 * 60 * 24 * 7;

export function setSessionCookies(res: NextResponse, t: Tokens) {
  res.cookies.set("access_token", t.accessToken, {
    ...base,
    maxAge: ACCESS_MAX_AGE,
  });
  res.cookies.set("refresh_token", t.refreshToken, {
    ...base,
    maxAge: REFRESH_MAX_AGE,
  });
}

export function clearSessionCookies(res: NextResponse) {
  res.cookies.delete("access_token");
  res.cookies.delete("refresh_token");
}

// Your backend allows only one refresh token per admin, so parallel refreshes
// would fail. This shares one call per token.
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
