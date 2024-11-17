"use client";
import { useState }  from 'react'
import React  from 'react'
import {DatePicker} from "@nextui-org/react";
import CtButton from '@/app/components/contact/CtButton';
import {getLocalTimeZone, today} from "@internationalized/date";
import Image from 'next/image';
import PickDate from '@/app/components/flight/PickDate';
export default function SearchFlight() {

  const [from, setFrom] = useState("Hà Nội");
  const [to, setTo] = useState("Hồ Chí Minh");
  const [isFocus, setFocus] = useState(false);
  
  return (
    <div className='grid grid-cols-search_flight gap-2 pl-5'>
        {/* from */}
        <div className=''>
            <div className='flex items-center justify-start pb-2'>
                <Image
                    className='inline'
                    src="/icons/fly.svg"
                    width={28}
                    height={28}
                    alt=''
                />

                <label
                    htmlFor="from"
                    className='text-base font-medium px-2'
                >
                    Từ
                </label>
            </div>

            <input 
                type = "text" 
                id = "from"
                value={from}
                onChange={(e) => {
                    setFrom(e.target.value)
                }}
                className='block w-full p-2  text-base text-gray-900 border-2 border-gray-300 rounded-md appearance-none 
                    focus:outline-none focus:ring-0 focus:border-sky-500'
            />
        </div>

        {/* to */}
        <div className=''>
            <div className='flex items-center justify-start pb-2'>
                <Image
                        className=''
                        src="/icons/landing.svg"
                        width={27}
                        height={27}
                        alt=''
                />

                <label
                    htmlFor="to"
                    className='text-base font-medium px-2'
                >
                    Đến
                </label>
            </div>

            <input 
                type = "text" 
                id = "to"
                value={to}
                onChange={(e) => {
                    setTo(e.target.value)
                }}
                className='block w-full p-2  text-base text-gray-900 border-2 border-gray-300 rounded-md appearance-none 
                    focus:outline-none focus:ring-0 focus:border-sky-500'
            />
        </div>
        
        
        {/* <div className="">
            <div className='flex items-center justify-start pb-2'>
                <Image
                    className=''
                    src="/icons/calendar.svg"
                    width={19}
                    height={19}
                    alt=''
                />

                <label
                    htmlFor="datepicker"
                    className="text-base font-medium px-2"
                >
                    Ngày khởi hành
                </label>
            </div>

            <DatePicker
                id="datepicker"
                defaultValue={today(getLocalTimeZone())}
                showMonthAndYearPickers = "true"
                className={`text-base border-2 rounded-md  ${
                    isFocus ? 'border-sky-500' : 'border-gray-300'
                }`}
                classNames={{
                    selectorButton: `${isFocus ? 'text-sky-500' : 'text-secondary'}`,
                    calendar: "border-2 border-gray-200 rounded-md",
                }}
                onFocus={() => {
                    setFocus(true)
                }}
                onBlur={() => {
                    setFocus(false)
                }}
                
            />
        </div> */}

        {/* date */}
        <div>
            <div className='flex items-center justify-start pb-2'>
                <Image
                    className='h-[27px] flex justify-center items-center'
                    src="/icons/calendar.svg"
                    width={19}
                    height={19}
                    alt=''
                />

                <label
                    className="text-base font-medium px-2"
                >
                    Ngày khởi hành
                </label>
            </div>

            <PickDate
                text = "Chọn ngày khởi hành"
            />
            
        </div>

        <div className='flex items-end justify-start w-full'>
            <CtButton 
                title = "Tìm Kiếm"
                hr = "/list-flight"
            />
        </div>
        
    </div>
  )
}
