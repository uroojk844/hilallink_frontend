import { connectDB } from "@/mongo/database";
import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";

connectDB();
// add user
export async function POST(req) {
  const data = await req.json();

  return userModel
    .findOne({ email: data.email })
    .then((found) => {
      if (found != null) return NextResponse.json({error:"User already exists"});
      else {
        const user = new userModel(data);
        return user
          .save()
          .then((saved) => {
            return NextResponse.json(saved);
          })
          .catch((err) => NextResponse.json("Already exist"));
      }
    })
    .catch((err) => NextResponse.json(err));
}
