import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import { template } from "../mailTemplate";

async function sendMail(reciever,name) {
  const otp = Math.floor(1000 + Math.random() * 9000);
  let transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false,
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
      user: "noreply@hilallink.com",
      pass: "Hilal@link.3492",
    },
  });
  let hashedOtp = await bcrypt.hash(otp.toString(), 10).then((hashed) => hashed);
  try {
    await transporter.sendMail({
      from: "noreply@hilallink.com",
      to: reciever,
      subject: "Please verify your HillalLink account",
      html:template(otp,name)
    });
    return { success: "Email sent", hash: hashedOtp};
  } catch (e) {
    console.log(e);
    return { error: "Something went wrong" };
  }
}

export async function POST(req) {
  const data = await req.json();
  if (!data.email || !data.name)
    return Response.json({ error: "A required parameter is missing" });
  const response = await sendMail(data.email,data.name);
  return Response.json(response);
}
