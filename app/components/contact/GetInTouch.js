import React from 'react'
import Image from 'next/image'
import { GET_IN_TOUCH } from '@/constants/contact'

export default function GetInTouch() {
  return (
    <div>
        <p className='text-xl text-sky-500'>{GET_IN_TOUCH.sub_title}</p>
        <p className='text-4xl font-bold py-7'>{GET_IN_TOUCH.title}</p>
        <p className='text-gray-400 text-base'>
            {GET_IN_TOUCH.desc}
        </p>

        <div className='py-5'>
            <div className='relative'>
                <div className='flex absolute z-50 bg-white rounded-2xl p-1 top-3 left-[23%]'>
                    <Image
                        src="/icons/message-circle.svg"
                        height={14}
                        width={14}
                    ></Image>

                    <p className='text-tiny flex items-center px-1'>Active Now</p>
                </div>

                {GET_IN_TOUCH.user.map((user, key) => (
                    <Image
                        className='absolute rounded-full'
                        key={key}
                        src={user}
                        width={55}
                        height={55}
                        style={{ left: `${key * 40}px` }}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}
