import React from 'react'
import { FaSuitcase, FaPlug, FaInfoCircle } from 'react-icons/fa';

export default function DetailTicket(props) {
  return (
        <div className='flex gap-4 text-gray-600 text-sm '>
            {/* timeline */}
            <div className="flex flex-col items-center gap-16">
              <div className="text-center">
                <p className="font-medium">{props.startTime}</p>
                <p className="text-xs text-gray-400">{props.day}</p>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-400">{props.period}</p>
              </div>

              <div className="text-center ">
                <p className="font-medium">{props.endTime}</p>
                <p className="text-xs text-gray-400">{props.day}</p>
              </div>
            </div>

            {/* line */}
            <div className='mt-2'>
                <div className='border-[1px] border-primary w-[10px] h-[10px] rounded-full'></div>
                <div className='h-[175px] w-[10px] flex justify-center'>
                  <div className=' bg-gray-300 h-[175px] w-[1.5px]'></div>
                </div>
                <div className=' bg-primary w-[10px] h-[10px] rounded-full'></div>
            </div>
            
            {/* chi tiết vé */}
            <div className="flex-1">
              <div className="">
                <p className="font-medium">{props.startLoca}</p>
                <p className="text-xs text-gray-400">Sân bay {props.startLoca}</p>
              </div>
              
              <div className='my-4'>
                <p className="">
                  Vietravel Airlines
                </p>
                <p className="mb-1">
                  VU-787
                </p>
                <p className="bg-gray-100 px-2 py-1 rounded-2xl text-xs w-fit mb-1">
                  Nâng hạng chuyến bay khi đặt chỗ
                </p>

                <div className="flex items-start space-x-14 mt-2">
                  <div className=' flex space-x-2'>
                    <div className='h-[20px] flex items-center'>
                      <FaSuitcase className=" text-gray-400" />
                    </div>
                    <div className='text-gray-500'>
                      <p>Hành lý 0 kg</p>
                      <p>Hành lý xách tay 7 kg</p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-2'>
                    <div className='h-[20px] flex items-center'>
                      <FaInfoCircle className=" text-gray-400" />
                    </div>
                    <p className='text-gray-500'>Airbus A321-100/200</p>
                  </div>
                </div>

              </div>
              
              <div className="">
                <p className="font-medium">{props.endLoca}</p>
                <p className="text-xs text-gray-400">Sân bay {props.endLoca}</p>
              </div>

            </div>

            

        </div>
  )
}
