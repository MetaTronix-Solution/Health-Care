import { NextRequest, NextResponse } from "next/server";
import {
  clearSessionCookies,
  refreshTokens,
  setRefreshCookie,
} from "@/src/lib/auth/session";
import { csrfGuard, setCsrfCookie } from "@/src/lib/auth/csrf";

export async function POST(req: NextRequest) {
  const blocked = csrfGuard(req);
  if (blocked) return blocked;

  const refresh = req.cookies.get("refresh_token")?.value;
  if (!refresh) {
    return NextResponse.json({ message: "No session" }, { status: 401 });
  }

  const tokens = await refreshTokens(refresh);
  if (!tokens) {
    const res = NextResponse.json(
      { message: "Session expired" },
      { status: 401 },
    );
    clearSessionCookies(res);
    return res;
  }

  const res = NextResponse.json({ accessToken: tokens.accessToken });
  setRefreshCookie(res, tokens.refreshToken);
  setCsrfCookie(res);
  return res;
}
