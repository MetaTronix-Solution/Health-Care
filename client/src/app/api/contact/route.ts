import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const r = await fetch(`${process.env.API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": req.headers.get("x-forwarded-for") ?? "",
    },
    body: await req.text(),
    cache: "no-store",
  });

  const data = await r.json().catch(() => ({}));
  return NextResponse.json(data, { status: r.status });
}
