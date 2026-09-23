import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  clearSessionCookies,
  refreshTokens,
  setSessionCookies,
} from "@/src/lib/auth/session";

const API = process.env.API_URL!;

async function handler(
  req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> },
) {
  const { path } = await ctx.params;
  const url = `${API}/${path.join("/")}${req.nextUrl.search}`;
  const body = ["GET", "HEAD"].includes(req.method)
    ? undefined
    : await req.arrayBuffer();

  const jar = await cookies();
  const access = jar.get("access_token")?.value;
  const refresh = jar.get("refresh_token")?.value;

  const call = (token?: string) =>
    fetch(url, {
      method: req.method,
      headers: {
        "Content-Type": req.headers.get("content-type") ?? "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body,
      cache: "no-store",
    });

  let res = await call(access);
  let fresh = null;

  if (res.status === 401 && refresh) {
    fresh = await refreshTokens(refresh);
    if (!fresh) {
      const out = NextResponse.json(
        { message: "Session expired" },
        { status: 401 },
      );
      clearSessionCookies(out);
      return out;
    }
    res = await call(fresh.accessToken);
  }

  const out = new NextResponse(res.status === 204 ? null : res.body, {
    status: res.status,
    headers: {
      "content-type": res.headers.get("content-type") ?? "application/json",
    },
  });
  if (fresh) setSessionCookies(out, fresh);
  return out;
}

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};
