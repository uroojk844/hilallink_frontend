import { connectDB } from "@/mongo/database";
import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";

connectDB();
// add user
export async function POST(req) {
  const data = await req.json();
  const user = new userModel(data);
  return user
    .save()
    .then((data) => NextResponse.json(data))
    .catch((err) => NextResponse.json(err));
}
