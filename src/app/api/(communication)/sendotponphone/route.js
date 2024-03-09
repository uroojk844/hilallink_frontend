import bcrypt from "bcryptjs";
const accountSid = "ACc523dbe3d3b17faa08d77314ec82790e";
const authToken = "1614e4e3e095e48118961223b4d61054";
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
      body: otp+" is your One Time Password to verify your HilalLink account",
      from: "+16509357253",
      to: "+91"+data.phone,
    })
    .then((message) =>
      Response.json({
        success: "Message sent",
        hash: hashedOtp,
      })
    )
    .catch((err) => Response.json({ error: err }))

}
