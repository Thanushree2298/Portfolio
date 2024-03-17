import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");
const fs = require('fs');
require("dotenv").config();

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      service: "hotmail",
      port: 465,
      auth: {
        user: process.env.APP_MAIL, //sender mail
        pass: process.env.APP_PASSWORD, //app password from gmail acc
      },
      maxConnection: 1
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error: any, success: any) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
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

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err: any, info: any) => {
          if (err) {
              console.error(err);
              reject(err);
          } else {
              console.log(info);
              resolve(info);
          }
      });
  });

  

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
