import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/mongo/database";

export async function POST(req) {
  connectDB();
  const data = await req.json();
  if (!data.password || !data.phone)
    return Response.json({ error: "All feilds are required" });
  const userData = await userModel.findOne({ phone: data.phone });
  if (userData) {
    const isValid = await bcrypt.compare(data.password, userData.password);
    if (isValid) {
      const token = jwt.sign({ user: userData._id }, process.env.JWT_SECRET);
      const response = NextResponse.json({ token: token, verified: userData.isVerified, uid:userData._id });
      response.cookies.set("token",token);
      return response;
    } else return NextResponse.json({ error: "Invalid credentials" });
  }
  else return NextResponse.json({error:"This phone number is not registered with HilalLink!"})
}
