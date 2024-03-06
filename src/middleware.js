import { NextResponse } from "next/server";
import * as jose from "jose";
export function middleware(req) {
  const token = req.headers.get("authorization").split(" ")[1];
  const signature = new TextEncoder().encode(process.env.JWT_SECRET);
  jose
    .jwtVerify(token, signature)
    .then((response) => {
      return NextResponse.json({
        success: response,
      });
    })
    .catch((error) => {
      return NextResponse.json({ error: error });
    });
}

export const config = {
  matcher: ["/api/:path*"],
};
