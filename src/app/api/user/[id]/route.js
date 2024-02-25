import { connectDB } from "@/mongo/database";
import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";
connectDB();

// get user by id
export async function GET(req, res) {
  const user = await userModel.findById(res.params.id);
  return Response.json(user);
}
