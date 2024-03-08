import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/mongo/database";

export async function POST(req) {
  connectDB()
  const data = await req.json();
  const userData = await userModel.findOne({ "$or":[{email:data.identity},{phone:data.identity}] });
  if (userData != null) {
    const isValid = await bcrypt
      .compare(data.password, userData.password)
      .then((status) => status);
    if (isValid) {
      const token = jwt.sign({ user: userData._id }, process.env.JWT_SECRET);
      return NextResponse.json({ token:token });
    } else return NextResponse.json({ error: "Invalid credentials" });
  }
  else{
    return NextResponse.json({error:"This account is not registered with HilalLink"})
  }
}
