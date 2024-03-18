import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");
require("dotenv").config();



export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      service: "hotmail",
      port: 587,
      auth: {
        user: process.env.NEXT_PUBLIC_APP_MAIL, //sender mail
        pass: process.env.NEXT_PUBLIC_APP_PASSWORD, //app password from gmail acc
      },
      maxConnection: 1
    });

    const mailOptions = {
      to: process.env.NEXT_PUBLIC_APP_MAIL, // list of receivers
      from: {
        name: "Thanushree R",
        address: process.env.NEXT_PUBLIC_APP_MAIL,
      }, // sender address
      subject: "Message from Portfolio-contact", // Subject line
      html: `
        <h3>Hello Thanushree</h3>
        <h4>I am ${name}.</h4>
        <p>My email: ${email}</p>
        <p>My message for you: ${message}.</p>
      `,
    };

 

  
    await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error:any, info: any) => {
    if(error) {
      console.error("Error sending email: ", error);
    }  else {
    console.log("Email sent Successfully!: ", info); 
      }
    });
        
      })
   
     

    return NextResponse.json({ message: "Email sent Successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email: ", error);
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
};

