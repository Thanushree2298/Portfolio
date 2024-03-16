import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");
require("dotenv").config();

export async function POST(request: NextRequest) {
  const { name, message } = await request.json();
  try {
    const transporter = nodemailer.createTransport({
      pool: true,
      service: "hotmail",
      port: 2525,
      auth: {
        user: "thanushreer22@outlook.com", //sender mail
        pass: process.env.APP_PASSWORD, //app password from gmail acc
      },
      maxConnection: 1
    });

    const mailOptions = {
      from: {
        name: "Thanushree R",
        address: "thanushreer22@outlook.com",
      }, // sender address
      to: "thanuramesh22@gmail.com", // list of receivers
      subject: "Message from Profile-contact", // Subject line
      html: `
        <h3>Hello Thanushree</h3>
        <p>I am ${name}.</p>
        <p>${message}.</p>
      `,
    };

    await transporter.sendMail(mailOptions, (error: any, info: any) => {
        if(error) return console.log(error);

        console.log("Email sent: ", info);
        
        
    });

    return NextResponse.json({ message: "Email sent Successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}
