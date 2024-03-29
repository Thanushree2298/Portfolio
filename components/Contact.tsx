"use client"

import React, { useState } from 'react';
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

const sendMail = async (e: any) => {
  e.preventDefault();

  const response = await fetch("/api/sendEmail", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    })
  })
  console.log(await response.json());
  
}

  return (
    <div id="contact" className='flex items-center justify-center mt-20'>
    <div  className="contactform-box">
      <section className="text-3xl text-center font-bold py-5">Contact Me</section>
      <div className='text-center font-medium text-medium'>Call me directly +91 8660859180</div>
      <div className='text-center font-medium text-medium'>or</div>
      <div className='text-center font-medium text-medium'>Email me directly thanushreer22@gmail.com</div>
      <div className='text-center font-medium text-medium'>or</div>
      <div className='text-center font-medium text-medium'>Message me</div>

      
      
            <form onSubmit={sendMail} className='form flex items-center justify-center mt-5'>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                autoComplete="given-name"
                placeholder='Name'
                className='input'
              />

              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                autoComplete="given-email"
                placeholder='Your mail'
                className='input'
              />
            
              <input
                type="text"
                name="message"
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                autoComplete="message"
                placeholder='Leave your message here...'
                className='inputmessage'
              />
             <button type='submit' className='button w-4/5'><span className='text-white'>Submit <FaPaperPlane className='inline'/></span></button>
            </form>
</div>

</div>             
                  
  )}

  export default Contact;