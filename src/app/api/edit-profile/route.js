import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  return userModel
    .findOneAndUpdate({ _id: data.user }, data, {
      new: true,
    })
    .then((updatedData) => {
      return NextResponse.json(updatedData);
    })
    .catch(() => {
      return NextResponse.json({ error: "Something went wrong!!" });
    });
}
