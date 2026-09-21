import { NextRequest, NextResponse } from "next/server";
import {
  clearSessionCookies,
  refreshTokens,
  setSessionCookies,
} from "@/src/lib/auth/session";

export default async function proxy(req: NextRequest) {
  // access token still valid → let the request through
  if (req.cookies.get("access_token")) return NextResponse.next();

  const toLogin = () => {
    const res = NextResponse.redirect(new URL("/login", req.url));
    clearSessionCookies(res);
    return res;
  };

  const refresh = req.cookies.get("refresh_token")?.value;
  if (!refresh) return toLogin();

  const tokens = await refreshTokens(refresh);
  if (!tokens) return toLogin();

  // make the new tokens visible to the page rendering in this same request
  req.cookies.set("access_token", tokens.accessToken);
  req.cookies.set("refresh_token", tokens.refreshToken);
  const res = NextResponse.next({ request: { headers: req.headers } });
  setSessionCookies(res, tokens);
  return res;
}

export const config = { matcher: ["/admin/:path*"] };
