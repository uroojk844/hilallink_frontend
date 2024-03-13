import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const checkUsername = await userModel.exists({ username: data.username });
  if (checkUsername != null) {
    return NextResponse.json({ error: "This username already in use" });
  } else {
    return userModel
      .findOneAndUpdate({ _id: data.user }, data, {
        new: true,
      })
      .then((updatedData) => {
        return NextResponse.json({ success: updatedData });
      })
      .catch(() => {
        return NextResponse.json({ error: "Something went wrong!!" });
      });
  }
}
