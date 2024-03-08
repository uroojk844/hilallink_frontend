import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  if (!data.otp || !data.hash)
    return Response.json({ error: "A required parameter is missing" });
  else {
    const isValid = await bcrypt.compare(data.otp,data.hash)
    if(isValid) return NextResponse.json({success:"User validated"})
    else return NextResponse.json({error:"Invalid OTP"})
  }
}
