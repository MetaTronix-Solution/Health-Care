import { NextResponse } from "next/server";
import { clearSessionCookies } from "@/src/lib/auth/session";

export async function POST() {
  const res = NextResponse.json({ message: "Logout successful" });
  clearSessionCookies(res);
  return res;
}
