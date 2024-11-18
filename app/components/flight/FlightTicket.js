"use client";
import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";
import Image from 'next/image';
import { FaSuitcase, FaPlug, FaInfoCircle } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CtButton from "@/app/components/contact/CtButton";


export default function FlightTicket(props) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef(null);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (detailsRef.current) {
      ScrollReveal().reveal(detailsRef.current, {
        duration: 300,
        opacity: [0, 1],
        distance: "-50px",
        easing: "ease-out",
        reset: false,
      });
    }
  }, [isOpen]);

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md mx-auto my-4">
      {/* Tiêu đề */}
      <div className="flex justify-between items-center border-b pb-2">
        <p className="text-yellow-700 font-semibold">Giá tốt từ hãng bay</p>
      </div>

      {/* Thông tin chính */}
      <div className="mt-5 grid grid-cols-3">
        {/* Hãng bay */}
        <div className="flex items-center space-x-3">
          <div className="w-[25%] flex-shrink-0"> 
            <Image
              src={props.logo}
              objectFit="cover"
              height={100} 
              width={200} 
              alt=""
            />
          </div>

          <div>
            <p className="text-black font-medium text-base">{props.brand}</p>
          </div>
        </div>

        {/* Thời gian và sân bay */}
        <div className='flex items-center justify-center space-x-3 text-center'>
          <div className="">
            <p className="text-xl font-semibold">{props.startTime}</p>
            <p className="text-gray-500 text-sm">{props.startLoca}</p>
          </div>

          <div className="">
            <p className="text-gray-500">{props.period}</p>
            <div className='flex items-center'>
              <div className='border-[1px] border-secondary w-[7px] h-[7px] rounded-full'></div>
              <div className='bg-secondary w-[75px] h-[2px]'></div>
              <div className=' bg-secondary w-[7px] h-[7px] rounded-full'></div>
            </div>
            <p className="text-gray-500 text-sm">Bay thẳng</p>
          </div>

          <div className="">
            <p className="text-xl font-semibold">{props.endTime}</p>
            <p className="text-gray-500 text-sm">{props.endLoca}</p>
          </div>
        </div>

        {/* Giá và nút chọn */}
        <div className="text-right">
          <p className="text-orangee text-[18px] font-semibold">{props.price} VND/khách</p>
          <button
            onClick={toggleDetails}
            className="mt-2 px-4 py-1 bg-primary text-white rounded-lg border border-primary"
          >
            {isOpen ? <IoIosArrowUp className="text-xl"/> : <IoIosArrowDown className="text-xl" />}
          </button>
        </div>
      </div>

      {/* -------------Chi tiết bổ sung---------------- */}
      
      {isOpen && (
        <div ref={detailsRef} className="mt-4 border-t pt-4 text-gray-600 text-sm ">
          <div className='flex gap-4'>
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

            <div className="flex justify-end items-end">
              <CtButton
                title = "Đặt chỗ"
                hr = "/"
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

