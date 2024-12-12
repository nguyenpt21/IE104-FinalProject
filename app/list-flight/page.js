
import Breadcr from '@/app/components/flight/Breadcr'
import CheckBoxFilter from '@/app/components/flight/CheckBoxFilter'
import FlightTicket from '@/app/components/flight/FlightTicket';
import PriceFilter from '@/app/components/flight/PriceFilter';
import RangeSliderFilter from '@/app/components/flight/RangeSliderFilter';
import SearchFlight from '@/app/components/flight/SearchFlight'
import TimeFilterItem from '@/app/components/flight/TimeFilterItem';
import { FLIGHT_FILTER_BRAND, FLIGHT_TICKET, OPTION_SORT } from '@/constants/flight';
import { TIME_FILTER } from '@/constants/flight'
import Image from 'next/image';
import React from 'react'



export default function ListFlight() {
  return (
    <div className=''>
        {/* search */}
        <div className='sticky top-[103px] z-10 bg-white py-3 border-b border-gray-100'>
            <div className='container mx-auto  p-3'>
                <SearchFlight/>
            </div>
        </div>

        <div className=' bg-slate-50'>
            <div className='container mx-auto'>
                {/* breadcrumb */}
                <div className='py-4'>
                    <Breadcr
                        lv1 = "Trang chủ"
                        lv2 = "Vé máy bay"
                        lv3 = "Kết quả tìm kiếm"
                    />
                </div>

                <div className='grid grid-cols-two_col_custom_3 gap-2'>
                    {/* ----BỘ LỌC------ */}
                    <div className='-z-0 bg-white rounded-md p-4 max-h-[700px] overflow-y-auto'> {/* scroll */}
                        
                        {/* brand */}
                        <div className='pb-4 border-b border-gray-300'>

                            {/* title */}
                            <div className='text-[18px] font-medium px-3 py-4'>
                                <p>Hãng hàng không</p>
                            </div>

                            {/* checkbox */}
                            {FLIGHT_FILTER_BRAND.map((row, key) => (
                                <div className='' key={key}>
                                    <CheckBoxFilter
                                        img = {row.img}
                                        name = {row.name}
                                        price = {row.price}
                                    />    
                                </div>
                            ))}
                        </div>

                        {/* price range */}
                        <div className='pb-6 border-b border-gray-300'>
                            {/* title */}
                            <div className='text-[18px] font-medium px-3 pt-4'>
                                <p>Giá/hành khách</p>
                            </div>

                            <div className='px-2'>
                                <RangeSliderFilter/>
                            </div>
                            
                        </div>

                        {/* Departure time */}
                        <div className='pb-4 border-b border-gray-300'>
                            {/* title */}
                            <div className='text-[18px] font-medium px-3 py-4'>
                                <p>Giờ khởi hành</p>
                            </div>
                            
                            {/* Time filter */}
                            <div className='grid grid-cols-2 gap-3'>
                                {TIME_FILTER.map((item, key) => (
                                    <div key={key}>
                                        <TimeFilterItem
                                            title = {item.title}
                                            time = {item.time}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Arrival Time */}
                        <div className='pb-4 border-b border-gray-300'>
                            {/* title */}
                            <div className='text-[18px] font-medium px-3 py-4'>
                                <p>Giờ hạ cánh</p>
                            </div>
                            
                            {/* Time filter */}
                            <div className='grid grid-cols-2 gap-3'>
                                {TIME_FILTER.map((item, key) => (
                                    <div key={key}>
                                        <TimeFilterItem
                                            title = {item.title}
                                            time = {item.time}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>

                    {/* -----FLIGHT-------- */}
                    <div className='mx-[10px]'>
                        <div className='w-full'>
                            <Image
                                className='rounded-lg'
                                src="/img/flight/promo-flight.png"
                                objectFit="cover"
                                height={100} 
                                width={900}
                                alt=''
                            />
                        </div>
                        {/* bộ sắp xếp giá */}
                        <div className='w-full flex justify-end mt-4'>
                            <PriceFilter
                                selectTitle={"Sắp xếp theo"}
                                optionList={OPTION_SORT}
                            ></PriceFilter>
                        </div>


                        {FLIGHT_TICKET.map((row, key) => (
                            <div key={key}>
                                <FlightTicket
                                    logo = {row.logo}
                                    brand = {row.brand}
                                    startTime = {row.startTime}
                                    endTime = {row.endTime}
                                    startLoca = {row.startLoca}
                                    endLoca = {row.endLoca}
                                    price = {row.price}
                                    priceWithLuggage = {row.priceWithLuggage}
                                    day = {row.day}
                                    period = {row.period}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        

        
    </div>
  )
}
