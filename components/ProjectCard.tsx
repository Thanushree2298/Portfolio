import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const ProjectCard = () => {
  

  return (
    
    <section className='mt-20 gap-10 project-container flex flex-col justify-center items-center h-screen'>
      
      <div className='project-card mt-20'>
          <div>
          <h2 className='text-2xl mt-2 ml-5'>Green Grove(Ecom web App)</h2>
          <Link href="https://greengrove-an05u6kjm-thanushree2298s-projects.vercel.app/">
          <Image 
          className='px-5 py-5 '
          src="/assets/greengrove.png"
          alt='snapgram'
          width={450}
          height={300}
          />
          </Link>
          </div>
        </div>
        

        <div className='project-card'>
          <div>
          <h2 className='text-2xl mt-2 ml-5'>Snapgram(Social media app)</h2>
          <Link href="https://snapgram-ozdzg7opx-thanushree2298s-projects.vercel.app/">
          <Image 
          className='px-5 py-5 '
          src="/assets/snapgram.png"
          alt='snapgram'
          width={450}
          height={250}
          />
          </Link>
          </div>
        </div>

        <div className='project-card mb-20'>
          <div>
          <h2 className='text-2xl mt-2 ml-5'>PriceWise(WebScraper)</h2>
          <Link href="https://pricewise-n553ey1rp-thanushree2298s-projects.vercel.app/">
          <Image 
          className=''
          src="/assets/pricewise.png"
          alt='pricewise'
          width={450}
          height={250}
          />
          </Link>
          </div>
          </div>

        

        

        
      
    </section>
  );
};

export default ProjectCard;
