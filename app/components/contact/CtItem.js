import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactItem(props) {
  return (
    <div className='hover:scale-105 hover:shadow-xl duration-300 my-6 rounded-xl'>
        <div className='text-center bg-white p-6 rounded-xl'>
            <div className='flex items-center justify-center p-5'>
                <Image
                    src = {props.icon}
                    width={40}
                    height={40}
                />
            </div>

            <p className='text-3xl font-bold pb-3'>
                {props.title}
            </p>

            <p className='text-base text-gray-500 pb-3'>
                {props.desc}
            </p>

            <Link href="/" className='text-black hover:text-primary hover:underline hover:decoration-sky-500 text-xl'>
                {props.info}
            </Link>
        </div>
    </div>
  )
}
