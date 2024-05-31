import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const blockedCountries = ["USA"]; // Example: Block USA and Germany
  const country =
    request.geo?.country || request.headers.get("x-vercel-ip-country");
  console.log(country, "country>>");

  if (blockedCountries.includes(country || "")) {
    return new Response("Access Denied", { status: 403 });
  }
  return NextResponse.next();
}
