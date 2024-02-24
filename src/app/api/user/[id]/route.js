import { connectDB } from "@/mongo/database";
import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";
// get user by id
connectDB();
export async function GET(req, res) {
  const user = await userModel.find({"username":res.params.id});
  return NextResponse.json(user);
}
