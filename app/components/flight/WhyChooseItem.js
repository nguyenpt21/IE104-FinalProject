import React from 'react'
import Image from 'next/image'



export default function WhyChooseItem(props) {
  return (
    <div className=''>
        <div className='grid grid-cols-two_col_custom_2 gap-2 py-8'>
            <Image
                className='bg-slate-50'
                src={props.img}
                width={70}
                height={70}
                alt=''
            />
            <div>
                <p className='text-sm font-bold pb-2'>
                    {props.title}
                </p>
                <div className='text-xs leading-5 text-gray-500'>
                    {props.desc}
                </div>
            </div>
        </div>
    </div>
  )
}
