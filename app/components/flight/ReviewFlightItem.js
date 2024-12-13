
import React from 'react'

export default function ReviewFlightItem({review}) {
  return (
    <div className='rounded-md border border-gray-300 p-6 h-full'>
        {/* ten */}
        <p className='text-base font-semibold '>
            {review.reviewer}
        </p>
        <p className='text-secondary'>
            {review.reviewTime}
        </p>
        {/* diem */}
        <div className='flex items-center py-1'>
            <p className='text-yellow-500 text-[14px]'>
              <span className='text-xl'>{review.score}</span>/5
            </p>

            <p className='text-[14px] font-semibold px-2'>{review.satisfaction}</p>
        </div>

        {/* chuyen bay */}
        <p className='text-secondary'>{review.flight}</p>

        {/* noi dung */}
        <p className='text-base pt-3 h-[100px] overflow-y-auto'>
            {review.content}
        </p>
    </div>
  )
}
