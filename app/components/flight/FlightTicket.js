"use client";
import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DetailTicket from "@/app/components/flight/DetailTicket";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import FlightBenefit from "@/app/components/flight/FlightBenefit";
import CtButton from "@/app/components/contact/CtButton";
import TicketRefund from "@/app/components/flight/TicketRefund";

export default function FlightTicket(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const detailsRef = useRef(null);
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
      <div className="mt-3 grid grid-cols-3">
        
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
            <p className="text-base font-semibold">{props.startTime}</p>
            <p className="text-gray-500 text-[13px]">{props.startLoca}</p>
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
            <p className="text-base font-semibold">{props.endTime}</p>
            <p className="text-gray-500 text-[13px]">{props.endLoca}</p>
          </div>
        </div>

        {/* Giá và nút chọn */}
        <div className="text-right">
          <p className="text-orangee text-[18px] font-semibold">{props.price} VND/khách</p>
          
          <div className="flex justify-end items-end mt-4">
              <CtButton
                title = "Đặt chỗ"
                hr = "/"
              />
          </div>
          
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={toggleDetails}
          className="mt-2 px-12 py-[2px] rounded-lg text-white bg-primary"
        >
          {isOpen ? <IoIosArrowUp className="text-base" /> : <IoIosArrowDown className="text-base" />}
        </button>
      </div>

      {/* -------------Chi tiết bổ sung---------------- */}
      
      {isOpen && (
        <div ref={detailsRef} className="mt-2 border-t">

          <div className="flex w-full flex-col px-2">
            <Tabs 
                aria-label="Options" 
                
                variant="underlined"
                classNames={{
                    tabList: "gap-6 w-full p-0 ", //wrap tabList
                    tab: "max-w-fit px-0 h-12",
                    cursor: "bg-primary", //the underline
                    tabContent: "text-gray-500 font-semibold text-[14px] group-data-[selected=true]:text-primary group-data-[hover=true]:text-primary", //the text in tab 
                }}
            >
                <Tab key="detail" title="Chi tiết" className="p-0">
                    <Card className="pt-3"> {/* bao content */}
                        <CardBody className='p-0'>
                          <DetailTicket
                            startTime = {props.startTime}
                            day = {props.day}
                            period = {props.period}
                            endTime = {props.endTime}
                            startLoca = {props.startLoca}
                            endLoca = {props.endLoca}
                          />
                        </CardBody>
                    </Card>  
                </Tab>
                <Tab key="benefit" title="Các lợi ích đi kèm" className="p-0">
                    <Card className="">
                        <CardBody className='p-0'>
                          <FlightBenefit
                            logo={props.logo}
                            brand={props.brand}
                            startLoca = {props.startLoca}
                            endLoca = {props.endLoca}
                          />
                        </CardBody>
                    </Card>  
                </Tab>
                <Tab key="ticketRefund" title="Hoàn vé" className="p-0">
                    <Card className="p-0">
                        <CardBody className='p-0'>
                          <TicketRefund/>
                        </CardBody>
                    </Card>  
                </Tab>
            </Tabs>
          </div>

          
        </div>
      )}
    </div>
  );
};

