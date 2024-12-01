import React from 'react'

export default function FlightItem(props) {
  return (
    <div className='border rounded-xl border-gray-300 py-3 pl-5 hover:border-gray-500 duration-300 hover:scale-105'>
        <a href='/'
            className='text-[15px] font-bold'
        >
            {props.title}
        </a>
        <p className='text-[12px] text-secondary py-1'>
            {props.time}
        </p>
        <p className='text-orangee font-semibold text-[14px] pt-2'>
            {props.money}
        </p>
    </div>
  )
}
