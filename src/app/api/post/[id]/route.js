import { PostModel } from "@/mongo/models/post_model";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const id = await res.params.id;
  return await PostModel.findById(id)
    .populate("createdBy", "name username profile_url")
    .then((post) => NextResponse.json(post))
    .catch((err) => NextResponse.json(err));
}
