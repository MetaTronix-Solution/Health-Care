import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { clearSessionCookies } from "@/src/lib/auth/session";

export async function POST() {
  const token = (await cookies()).get("access_token")?.value;

  if (token) {
    await fetch(`${process.env.API_URL}/auth/logout`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    }).catch(() => {}); // clear cookies locally even if the backend call fails
  }

  const res = NextResponse.json({ message: "Logout successful" });
  clearSessionCookies(res);
  return res;
}
