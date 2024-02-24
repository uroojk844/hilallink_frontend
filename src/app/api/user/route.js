import { connectDB } from "@/mongo/database";
import { userModel } from "@/mongo/models/user_model";

connectDB();

// add user
export async function POST(res) {
  const data = await res.json();
  const user = new userModel(data);
  const saved = await user.save();
  return Response.json(saved);
}
