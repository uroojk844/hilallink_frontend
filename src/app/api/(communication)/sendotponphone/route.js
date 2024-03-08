import bcrypt from "bcryptjs";
const accountSid = "ACc523dbe3d3b17faa08d77314ec82790e";
const authToken = "curhwgv4u8vy6o3789npry1";
const client = require("twilio")(accountSid, authToken);

export async function POST(req) {
  const data = await req.json();
  if (!data.phone)
    return Response.json({ error: "A required parameter is missing" });
  const otp = Math.floor(1000 + Math.random() * 9000);
  const hashedOtp = await bcrypt
    .hash(otp.toString(), 10)
    .then((hashed) => hashed);
  return client.messages
    .create({
      body: "Enjioy",
      from: "+16509357253",
      to: data.phone,
    })
    .then((message) =>
      Response.json({
        success: "Message sent",
        hash: hashedOtp,
      })
    )
    .catch((err) => Response.json({ error: err }))

}
