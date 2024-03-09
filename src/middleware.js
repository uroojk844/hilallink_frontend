import { NextResponse } from "next/server";
import * as jose from "jose";
export async function middleware(req) {
  // const token = req.headers.get("authorization").split(" ")[1];
  // const signature = new TextEncoder().encode(process.env.JWT_SECRET);
  // try {
  //   const data = await jose.jwtVerify(token, signature);
  //   return NextResponse.next();
  //   //  NextResponse.json({ success: data.payload.user });
  // } catch (error) {
  //   return NextResponse.json({ error: "Please sign in to continue" });
  // }
}

export const config = {
  matcher: ["/api/:path*"],
};
