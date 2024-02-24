import { connectDB } from "@/mongo/database";
import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";
connectDB();
export async function GET() {
  const users = await userModel.find();
  return NextResponse.json(users);
}
