import { NextResponse } from "next/server";
import { setSessionCookies } from "@/src/lib/auth/session";

export async function POST(req: Request) {
  const r = await fetch(`${process.env.API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(await req.json()),
    cache: "no-store",
  });

  const data = await r.json().catch(() => ({}));
  if (!r.ok) return NextResponse.json(data, { status: r.status });

  const { accessToken, refreshToken, ...safe } = data;
  const res = NextResponse.json(safe);
  setSessionCookies(res, { accessToken, refreshToken });
  return res;
}
