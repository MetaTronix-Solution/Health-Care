import { NextRequest, NextResponse } from "next/server";

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

  const res = await fetch(url, {
    method: req.method,
    headers: {
      "Content-Type": req.headers.get("content-type") ?? "application/json",
      ...(req.headers.get("authorization") && {
        Authorization: req.headers.get("authorization")!,
      }),
    },
    body,
    cache: "no-store",
  });

  return new NextResponse(res.status === 204 ? null : res.body, {
    status: res.status,
    headers: {
      "content-type": res.headers.get("content-type") ?? "application/json",
    },
  });
}

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};
