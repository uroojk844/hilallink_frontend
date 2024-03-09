import { connectDB } from "@/mongo/database";
import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";

connectDB();

export async function POST(req, res) {
  const user = await userModel.find({"_id":res.params.id});
  return NextResponse.json(user);
}
