import { PostModel } from "@/mongo/models/post_model";
import { NextResponse } from "next/server";

export async function GET(res) {
  const posts = await PostModel.find().populate("createdBy","name username profile_url");
  return NextResponse.json(posts);
}

