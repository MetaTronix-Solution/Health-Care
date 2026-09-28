import { NextRequest, NextResponse } from "next/server";
import { clearSessionCookies } from "@/src/lib/auth/session";
import { csrfGuard } from "@/src/lib/auth/csrf";

export async function POST(req: NextRequest) {
  const blocked = csrfGuard(req);
  if (blocked) return blocked;

  const res = NextResponse.json({ message: "Logout successful" });
  clearSessionCookies(res);
  return res;
}
