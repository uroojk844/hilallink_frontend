import { userModel } from "@/mongo/models/user_model";

export async function POST(req) {
  const data = await req.json();
  return userModel.findOne({uid:data.uid})
  .then(found=> Response.json(found))
  .catch(err=> Response.json(err))
}