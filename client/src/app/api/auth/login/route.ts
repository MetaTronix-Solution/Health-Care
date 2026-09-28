import { NextResponse } from "next/server";
import { setRefreshCookie } from "@/src/lib/auth/session";
import { setCsrfCookie } from "@/src/lib/auth/csrf";

export async function POST(req: Request) {
  const r = await fetch(`${process.env.API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(await req.json()),
    cache: "no-store",
  });

  const data = await r.json().catch(() => ({}));
  if (!r.ok) return NextResponse.json(data, { status: r.status });

  const { refreshToken, ...rest } = data;
  const res = NextResponse.json(rest);
  setRefreshCookie(res, refreshToken);
  setCsrfCookie(res);
  return res;
}
