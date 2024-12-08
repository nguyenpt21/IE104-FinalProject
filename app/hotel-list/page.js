"use client";

import Image from "next/image";
import { useState } from "react";
import SearchBar from "../components/hotel-list/SearchBar";
import CheckBoxFilter from "../components/hotel-list/CheckBoxFilter";
import PriceFilter from "../components/hotel-list/PriceFilter";
import RangeSliderFilter from "../components/hotel-list/RangeSliderFilter";
import { HOTEL_FILTER_POPULAR, HOTEL_CARD, HOTEL_FILTER_ACTIVITY, HOTEL_FILTER_STAR, HOTEL_FILTER_ACCOMMODATION } from '@/constants/hotel';
import HotelCard from "../components/hotel-list/HotelCard";

export default function HotelList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [rating, setRating] = useState("");

    return (
        <div className=''>
        {/* search */}
        <div className='py-1 border-b border-gray-100'>
            <div className='container mx-auto flex justify-center p-2'>
                <SearchBar/>
            </div>
        </div>

        <div className=' bg-slate-50'>
            <div className='container mx-auto'>
                <div className=' grid grid-cols-two_col_custom_3 gap-2'>
                    {/* ----BỘ LỌC------ */}
                    <div className='bg-white rounded-md p-4 max-h-[700px] overflow-y-auto'> {/* scroll */}
                        
                        {/* brand */}
                        

                        {/* price range */}
                        <div className='pb-6 border-b border-gray-300'>
                            {/* title */}
                            <div className='text-[18px] font-medium px-3 pt-4'>
                                <p>Ngân sách mỗi ngày của bạn</p>
                            </div>

                            <div className='px-2'>
                                <RangeSliderFilter/>
                            </div>
                            
                        </div>

                        <div className='pb-4 border-b border-gray-300'>

                            {/* title */}
                            <div className='text-[18px] font-medium px-3 py-4'>
                                <p>Tiện nghi độc đáo</p>
                            </div>

                            {/* checkbox */}
                            {HOTEL_FILTER_POPULAR.map((row, key) => (
                                <div key={key}>
                                    <CheckBoxFilter
                                        name = {row.name}
                                        price = {row.price}
                                    />    
                                </div>
                            ))}
                        </div>

                        {/* Activity */}
                        <div className='pb-4 border-b border-gray-300'>
                            {/* title */}
                            <div className='text-[18px] font-medium px-3 py-4'>
                                <p>Hoạt động</p>
                            </div>
                            
                            {/* checkbox */}
                            {HOTEL_FILTER_ACTIVITY.map((row, key) => (
                                <div key={key}>
                                    <CheckBoxFilter
                                        name = {row.name}
                                    />    
                                </div>
                            ))}
                        </div>

                        {/* Accommodation */}
                        <div className='pb-4 border-b border-gray-300'>
                            {/* title */}
                            <div className='text-[18px] font-medium px-3 py-4'>
                                <p>Loại hình lưu trú</p>
                            </div>
                            
                            {/* Accommodation filter */}
                            {HOTEL_FILTER_ACCOMMODATION.map((item, key) => (
                                <div key={key}> 
                                    <CheckBoxFilter
                                        name = {item.name}
                                    />
                                </div>  
                            ))} 
                        </div>

                        {/* Star */}
                        <div className='pb-4 border-b border-gray-300'>
                            {/* title */}
                            <div className='text-[18px] font-medium px-3 py-4'>
                                <p>Đánh giá sao</p>
                            </div>
                            
                            {/* Star filter */}
                            {HOTEL_FILTER_STAR.map((item, key) => (
                                <div key={key}> 
                                    <CheckBoxFilter
                                        name = {item.name}
                                    />
                                </div>  
                            ))} 
                        </div>
                        
                    </div>

                    {/* -----FLIGHT-------- */}
                    <div className='mx-[10px]'>
                        <div className='w-full'>
                            <Image
                                className='rounded-lg'
                                src="/img/hotel_list/hotel_promotion.webp"
                                objectFit="cover"
                                height={100} 
                                width={900}
                                alt=''
                            />
                        </div>

                        <div className='w-full flex justify-end mt-4'>
                            <PriceFilter></PriceFilter>
                        </div>

                        {/* <div>
                            <HotelCard
                                image = '/img/hotel_list/hotel_promotion.webp'
                                name = "Khách sạn Trung Tâm"
                                description = "Cung cấp không gian nghỉ dưỡng thoải mái, phòng ốc hiện đại và dịch vụ chuyên nghiệp. Vị trí thuận lợi, gần các điểm tham quan, chắc chắn sẽ mang đến cho bạn kỳ nghỉ tuyệt vời."
                                price = "2Tr040"
                                originalPrice = "2Tr400"
                                rating = "4.5"    
                                reviews = "1200"
                                discount = "15"
                                room = "1 phòng 2 ngày"
                            />
                        </div> */}

                        {HOTEL_CARD.map((row, key) => (
                            <div key={key}>
                                <HotelCard
                                    image = {row.image}
                                    description = {row.description}
                                    price = {row.price}
                                    originalPrice = {row.originalPrice}
                                    rating = {row.rating}
                                    reviews = {row.reviews}
                                    discount = {row.discount}
                                    name = {row.name}
                                    room = {row.room}
                                    period = {row.period}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        

        
    </div>
    );
}