import { connectDB } from "@/mongo/database";
import { userModel } from "@/mongo/models/user_model";

export async function GET() {
  connectDB();
  const users = await userModel.find();
  return Response.json(users);
}
