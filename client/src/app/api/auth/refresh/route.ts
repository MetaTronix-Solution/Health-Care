import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  clearSessionCookies,
  refreshTokens,
  setRefreshCookie,
} from "@/src/lib/auth/session";

export async function POST() {
  const refresh = (await cookies()).get("refresh_token")?.value;
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
  return res;
}
