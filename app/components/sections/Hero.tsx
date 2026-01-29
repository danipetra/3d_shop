"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'


const Hero = () => {
  useEffect(() => {
    //Blocs the scroll down until the user clicks the go down button
    const handlescroll = () => {
      const heroElement = document.getElementById('hero');
      if(heroElement){
        const rect = heroElement.getBoundingClientRect();
        const isInView = rect.top >= 84 && rect.bottom >= window.innerHeight;
        document.body.style.overflow = isInView ? 'hidden' : 'auto';
      }
    }

    window.addEventListener('scroll', handlescroll);

    handlescroll();

    return() => {
      window.removeEventListener('scroll', handlescroll);
      document.body.style.overflow = 'auto';
    };
  });
  return (
    <div id='hero' className='relative h-screen max-w-5xl mx-auto flex flex-col p-4 pt-8 lg:pt-32 md:p-16'>
      <div className='flex flex-col md:flex-row items-center relative'>
        <div className='w-full h-full md:w-1/2 flex flex-col gap-8 z-10 bg-linear-to-r from-satone-950 via-stone-950 to-transparent'>
          <h1 className='text-5xl md-text-6xl font-bold'>
            Your Keyboard<br/> Your Comfort
          </h1>
          <p className='text-slate-400 font-semibold'>
            Discover a keyboard designed for both style and functionality, providing unmatched comfort and efficiency for your everyday tasks.
          </p>
          <div className='flex flex-row gap-6'>
            <Link href='#' className='w-36 flex justify-center py-3 rounded-xl text-xs bg-gradient'>
              Buy keyboard
            </Link>
            <Link href='#' className='w-36 flex justify-center py-3 rounded-xl text-xs border border-white'>
             See more
            </Link>
          </div>
        </div>
        <Image src='assets/hero.png' 
          alt='hero' width={700} height={400} unoptimized={true} priority className='left-1/4 top-4 mt-16 md:mt-0 md:absolute'/>
      </div>
      <Link href='#catalog' className='absolute bottom-40 left-1/2 transform -translate-x-1/2 flex flex-row items-center px-6 py-2 mx-auto border border-slate-400 rounded-xl text-sm text-slate-400'>
        {/* FIXME */}
        <MdKeyboardDoubleArrowDown className='w-4 h-4 mr-2 animate-ping'/>
        <span>Click to scroll</span>
        <MdKeyboardDoubleArrowDown className='w-4 h-4 ml-2 animate-ping'/>
      </Link>
    </div>
  )
}

export default Hero
