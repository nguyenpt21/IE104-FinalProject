import React from 'react'
import Image from 'next/image'

export default function FlightBenefit(props) {
  return (
    <div>
        <p className='py-3 text-[14px] font-medium pb-2'>
            Điều kiện
        </p>

        <div className='p-3 bg-slate-50 rounded-lg flex flex-col space-y-2 '>
            <div className="flex items-center space-x-3">
                <div className="flex-shrink-0"> 
                    <Image
                    src={props.logo}
                    objectFit="cover"
                    height={100} 
                    width={60} 
                    alt=""
                    />
                </div>

                <div>
                    <p className="text-black font-medium text-[14px]">{props.brand}</p>
                </div>
            </div>

            <p className='text-gray-500 text-xs'>
                {props.startLoca} → {props.endLoca}
            </p>

            <div className="flex items-center space-x-3">
                <div className="flex-shrink-0"> 
                    <Image
                    src='/icons/hoantien.svg'
                    objectFit="cover"
                    height={18} 
                    width={18} 
                    alt=""
                    />
                </div>

                <div>
                    <p className="text-green-800 font-semibold text-[13px]">Có thể hoàn vé</p>
                </div>
            </div>

            <div className="flex items-center space-x-3">
                <div className="flex-shrink-0"> 
                    <Image
                    src='/icons/doilich.svg'
                    objectFit="cover"
                    height={18} 
                    width={18} 
                    alt=""
                    />
                </div>

                <div>
                    <p className="text-green-800 font-semibold text-[13px]">Có áp dụng đổi lịch bay</p>
                </div>
            </div>
        </div>
        {/* --------- */}
        <p className='py-3 text-[14px] font-medium pb-2'>
            Hành lý mua thêm
        </p>

        <div className='p-3 bg-slate-50 rounded-lg flex flex-col space-y-2 '>
            <div className="flex items-center space-x-3">
                <div className="flex-shrink-0"> 
                    <Image
                    src={props.logo}
                    objectFit="cover"
                    height={100} 
                    width={60} 
                    alt=""
                    />
                </div>

                <div>
                    <p className="text-black font-medium text-[14px]">{props.brand}</p>
                </div>
            </div>

            <p className='text-gray-300 text-base font-medium'>
                Không có sẵn
            </p>
        </div>
    </div>
  )
}
