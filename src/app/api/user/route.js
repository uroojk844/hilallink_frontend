import { connectDB } from "@/mongo/database";
import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDB();
// add user
export async function POST(req) {
  const data = await req.json();
  const hashedPassword = await bcrypt.hash(data.password.toString(), 10);
  data.password = hashedPassword;
  return userModel
    .findOne({ phone: data.phone })
    .then((found) => {
      if (found != null)
        return NextResponse.json({ error: "User already exists" });
      else {
        const user = new userModel(data);
        return user
          .save()
          .then((saved) => {
            return NextResponse.json({success:"User added"});
          })
          .catch((err) => NextResponse.json({ error1: err }));
      }
    })
    .catch((err) => NextResponse.json({ error2: err }));
}
