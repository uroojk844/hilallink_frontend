import { PostModel } from "@/mongo/models/post_model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const post = new PostModel(data);
  return post
    .save()
    .then((saved) => NextResponse.json(saved))
    .catch((err) => NextResponse.json(err));
}
