import { randomBytes, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export const CSRF_COOKIE = "csrf_token";
export const CSRF_HEADER = "x-csrf-token";

const secure = process.env.NODE_ENV === "production";

// Not httpOnly on purpose: client JS must read it and echo it back as a header.
export function setCsrfCookie(res: NextResponse) {
  res.cookies.set(CSRF_COOKIE, randomBytes(32).toString("hex"), {
    httpOnly: false,
    secure,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // same lifetime as the refresh cookie
  });
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

// Returns a 403 response if the request fails CSRF checks, otherwise null.
export function csrfGuard(req: NextRequest): NextResponse | null {
  // 1. Origin check: if the browser sent an Origin, it must match our host
  const origin = req.headers.get("origin");
  if (origin) {
    let originHost = "";
    try {
      originHost = new URL(origin).host;
    } catch {}
    if (originHost !== req.headers.get("host")) {
      return NextResponse.json({ message: "Invalid origin" }, { status: 403 });
    }
  }

  // 2. Double-submit token check: cookie value must equal header value
  const cookieToken = req.cookies.get(CSRF_COOKIE)?.value;
  const headerToken = req.headers.get(CSRF_HEADER);

  if (!cookieToken || !headerToken || !safeEqual(cookieToken, headerToken)) {
    return NextResponse.json(
      { message: "Invalid CSRF token" },
      { status: 403 },
    );
  }

  return null;
}
