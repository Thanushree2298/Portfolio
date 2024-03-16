import Image from 'next/image';
import React from 'react';



const Intro = () => {
  return (
    <section id='home' className='flex items-center justify-center mt-20'>
      <div className='w-3/4 lg:flex lg:items-center lg:justify-center'>
        <div className='text-left lg:text-center lg:mr-8'>
          <span className='text-3xl'>Hello! I&apos;m,</span>
          <br />
          <h1 className='text-5xl'>Thanushree R</h1>
          <p className='text-xl'>As a <span className='font-bold'>Web developer</span>, I am dedicated to shaping the digital landscape by crafting seamless web experiences</p>
          <p className='underline'>Scroll For More</p>
        </div>
        <div className='lg:ml-5 mt-4 lg:mt-0'>
          <Image
            src="/MyPhoto.png"
            alt="My Photo"
            width={500}
            height={500}
            className='rounded-full'
          />
        </div>

        
      </div>
    </section>
  );
}

export default Intro;
;
