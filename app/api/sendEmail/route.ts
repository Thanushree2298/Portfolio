import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");
require("dotenv").config();

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      pool: true,
      service: "hotmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.APP_MAIL, //sender mail
        pass: process.env.APP_PASSWORD, //app password from gmail acc
      },
      maxConnection: 1
    });

    const mailOptions = {
      to: process.env.APP_MAIL, // list of receivers
      from: {
        name: "Thanushree R",
        address: process.env.APP_MAIL,
      }, // sender address
      subject: "Message from Portfolio-contact", // Subject line
      html: `
        <h3>Hello Thanushree</h3>
        <p>I am ${name}.</p>
        <p>Contact me: ${email}</p>
        <p>My message for you: ${message}.</p>
      `,
    };

    const sendMail = async (transporter: any, mailOptions: any) => {
      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent Successfully!: ", info); 
        return info;
      } catch (error) {
        console.error("Error sending email: ", error);
        throw error; // Rethrow the error to be caught by the outer try-catch block
      }
    };
     
    sendMail(transporter, mailOptions);

    return NextResponse.json({ message: "Email sent Successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email: ", error);
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}
