import React from 'react'
import Image from 'next/image'
import { BANNER_CONTACT } from '@/constants/contact'


export default function Banner() {
  return (
    <div className='relative h-[300px] w-full'>
        <Image
            className='z-[-1]'
            src={BANNER_CONTACT.img}
            layout="fill" 
            objectFit="cover"

        />

        <div className='w-[40%] text-center absolute top-1/4 left-1/2 -translate-x-2/4'>
            <h1 className='text-white text-5xl font-bold py-4'>
                {BANNER_CONTACT.title}
            </h1>

            <p className='text-white text-xl py-4'>
                {BANNER_CONTACT.desc}
            </p>
        </div>
            
    </div>
  )
}
