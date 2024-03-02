import { userModel } from "@/mongo/models/user_model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = req.json()
  return await NextResponse(data)
}

// const data = await res.json();
// return userModel
//   .findOne({ uid: data.uid })
//   .then((found) => {
//     return Response.json(found);
//   })
//   .catch((err) => {
//     return Response.json(err);
//   });