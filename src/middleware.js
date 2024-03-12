import { useParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import bcrypt from "bcryptjs"


const jwtConfig = {
  secret: new TextEncoder().encode(process.env.JWT_SECRET),
};

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  return jose
    .jwtVerify(token, jwtConfig.secret)
    .then((verified) => {
      console.log("Token verified");
      const uid = verified.payload.user
      console.log(uid)
      return NextResponse.next();
    })
    .catch((err) => {
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
    });
}
export const config = {
  matcher: ["/((?!api|_next|favicon.ico|profile.avif|auth/.).*)"],
};
