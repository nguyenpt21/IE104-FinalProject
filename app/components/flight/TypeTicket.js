import React from 'react'
import { RiLuggageDepositLine } from "react-icons/ri";
import { MdOutlineNoLuggage } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import Image from 'next/image';

export default function TypeTicket(props) {
  return (
    <div className='border border-gray-300 rounded-md text-gray-400 p-3 w-fit text-[12px]'>
        <div className='border-b border-gray-300 pb-2'>
            <div className='flex justify-end gap-5 font-medium text-base pb-5'>
                <span className='flex-1 text-black '>{props.type}</span>
                <span className='text-orangee'>{props.price} VND/khách</span>
            </div>

            
            <div className=' flex gap-2 pb-2'>
                <div className='flex items-center'>
                  <RiLuggageDepositLine className=" text-gray-400 text-xl" />
                </div>
                <p className='text-gray-500'>{props.base}</p>
            </div>

            <div className=' flex gap-2'>
                <div className='flex items-center'>
                  <MdOutlineNoLuggage className=" text-gray-400 text-xl" />
                </div>
                <p className='text-gray-500'>{props.luggagePlus}</p>
            </div>
            
        </div>

        <div className=' flex gap-2 pt-2 pb-2'>
            <div className='flex items-center'>
              <MdUpdate className=" text-gray-400 text-xl" />
            </div>
            <p className='text-gray-500'>Phí đổi lịch bay của hãng hàng không VND 450,000</p>
        </div>
        <div className=' flex gap-2 pb-2'>
            <div className='flex items-center'>
              <RiRefund2Line className=" text-gray-400 text-xl" />
            </div>
            <p className='text-gray-500'>Phí hoàn bắt đầu ở mức VND 450,000 VND</p>
        </div>

        <button className='w-full mt-10 bg-orangee font-medium text-[14px] text-white p-1 rounded-2xl hover:bg-orange-700 duration-300'>
            Chọn
        </button>
    </div>
  )
}
