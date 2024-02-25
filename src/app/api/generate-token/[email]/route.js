import { sign } from "jsonwebtoken"
export async function GET(req,res) {
    const token = sign(res.params.email, process.env.JWT_SECRET);
    return Response.json({token})
}

