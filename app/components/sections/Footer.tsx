import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import Logo from '../Logo'

const Social = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Logo/>
      <div className='flex flex-row gap-4'>
        <Link href='#' className='flex items-center justify-center rounded-full bg-white p-1'>
          <FaInstagram className='text-stone-900'/>
        </Link>
        <Link href='#' className='flex items-center justify-center rounded-full bg-white p-1'>
          <FaFacebook className='text-stone-900'/>
        </Link>
        <Link href='#' className='flex items-center justify-center rounded-full bg-white p-1'>
          <FaTwitter className='text-stone-900'/>
        </Link>
        <Link href='#' className='flex items-center justify-center rounded-full bg-white p-1'>
          <FiYoutube className='text-stone-900'/>
        </Link>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='container max-w-5xl mx-auto pt-32 relative z-20'>
      <div className='flex flex-col gap-12 md:flex-row justify-between pb-8 px-8'>
        <Social/>
        
        <div className='flex flex-col gap-8'>
          <div className='w-32 flex flex-col gap-2'>
            <p className='p-xs font-semibold text -slate-400'>
              Location:
            </p>
            <p>
              Some Address 45, Italy 13534
            </p>
          </div>
          <div className='w-32 flex flex-col gap-2'>
            <p className='p-xs font-semibold text -slate-400'>
              Phone:
            </p>
            <p>
              3432134980
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2 text-sm text-slate-400'>
          <Link href='#'>Home</Link>
          <Link href='#'>Catalog</Link>
          <Link href='#'>About</Link>
          <Link href='#'>Contact us</Link>
          <Link href='#'>Privacy Policy</Link>
        </div>
      </div>

      <hr className='px-16 border-slate-400'/>

      <div className='w-full flex flex-col col-reverse gap-y-2 md:flex-row items center justify-between py-4 text-xs text-slate-400'>
        <p>&copy; Daniele Petracca</p>
        <p>Contact us | keyboards@gmail.com</p>
      </div>
    </div>
  )
}


export default Footer
