import Link from 'next/link'
import React from 'react'
import { BsArrowBarRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium mt-10">
          <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
            Contact Me Here <BsArrowBarRight className="opacity-70 group-hover:translate-x-1 transition"/>
          </Link>
          <a className="group ml-2 bg-gray-200 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer" href="/assets/resume.pdf" download>
            Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
          </a>
         <a
         className="group bg-gray-200 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/50"
         href="https://www.linkedin.com/in/thanushree-r-87a52327b/">
          <BsLinkedin className='text-3xl'/>
         </a>
         <a
         className="group bg-gray-200 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/50"
         href="https://github.com/Thanushree2298">
          <BsGithub className='text-3xl'/>
         </a>
        </div>
  )
}

export default About