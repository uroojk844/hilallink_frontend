import { useParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import bcrypt from "bcryptjs"; // Not directly used in this middleware

const jwtConfig = {
  secret: "q8o7ehqri76bc3qiwyecgitgdb178236dot3822yk29m8xzp"
    ? new TextEncoder().encode(
        "q8o7ehqri76bc3qiwyecgitgdb178236dot3822yk29m8xzp"
      )
    : undefined,
};

export async function middleware(req) {
  // Check if JWT_SECRET is set
  if (!jwtConfig.secret) {
    console.error("JWT_SECRET environment variable is not set or empty.");
    return NextResponse.redirect(new URL("/auth/login", req.url)); // User-friendly error and status code
  }

  const token = await req.cookies.get("token")?.value;

  try {
    const verified = await jose.jwtVerify(token, jwtConfig.secret);
    console.log("Token verified");
    const uid = verified.payload.user;
    console.log(uid);
    return NextResponse.next();
  } catch (err) {
    console.error("Error verifying token:", err);
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|profile.avif|auth/.).*)"],
};

// import { useParams } from "next/navigation";
// import { NextRequest, NextResponse } from "next/server";
// import * as jose from "jose";
// import bcrypt from "bcryptjs"

// const jwtConfig = {
//   secret: new TextEncoder().encode(process.env.JWT_SECRET),
// };

// export async function middleware(req) {
//   const token = await req.cookies.get("token")?.value;
//   return jose
//     .jwtVerify(token, jwtConfig.secret)
//     .then((verified) => {
//       console.log("Token verified");
//       const uid = verified.payload.user
//       console.log(uid)
//       return NextResponse.next();
//     })
//     .catch((err) => {
//       return NextResponse.json(err)
//       // return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
//     });
// }
// export const config = {
//   matcher: ["/((?!api|_next|favicon.ico|profile.avif|auth/.).*)"],
// };
