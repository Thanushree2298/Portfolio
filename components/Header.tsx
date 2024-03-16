import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='navbar px-10'>
      <div className='mx-auto flex items-center justify-between py-4'>
        <div className='flex space-x-0.5 lg:space-x-3'>
        <Image 
        className='flex space-x-0'
        src="/MyLogo.png"
        alt='logo'
        width={100}
        height={100}/>
        </div>
        </div>
    </header>
  )
}

export default Header