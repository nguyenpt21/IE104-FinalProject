import React from 'react';
import { FaWifi, FaBusinessTime, FaSwimmer, FaParking, FaThumbsUp, FaMapMarkerAlt, FaPizzaSlice, FaBuilding } from 'react-icons/fa';
import { MdAir } from 'react-icons/md';
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";

const HotelInfo = () => {
    return (
        <div className="p-6 bg-white rounded-lg flex ">
            <div className="flex-1 ml-[50px]">
                <h1 className="text-2xl font-bold">Khách sạn Quy Nhơn</h1>
                <div className="flex items-center mt-2">
                    <span className="text-yellow-500">
                        {'★'.repeat(4)}{'☆'}
                    </span>
                    <span className="ml-2 text-gray-700">4.5 (1200 Đánh giá)</span>
                </div>
                <div className="flex items-center mt-2 text-gray-700">
                    <FaLocationDot className="text-[#27B5FC] mr-2" />
                    <p className="text-[12px]">01 Nguyễn Huệ, Phường Hải Cảng, TP Quy Nhơn</p>
                </div>
                <h2 className="mt-4 text-xl font-semibold">Tổng quan</h2>
                <p className="mt-2 text-gray-600">
                    Khách sạn Quy Nhơn là một trong những lựa chọn lưu trú phổ biến tại thành phố biển Quy Nhơn, tỉnh Bình Định. 
                    Với vị trí đặc địa, nằm gần trung tâm thành phố và các điểm du lịch nổi tiếng, khách sạn Quy Nhơn mang đến 
                    không gian nghỉ dưỡng lý tưởng, kết hợp giữa sự hiện đại và tiện nghi, đáp ứng tốt nhất nhu cầu của du khách.
                </p>
                <h2 className="mt-4 text-xl font-semibold">Tiện nghi hàng đầu</h2>
                <ul className="mt-2 grid grid-cols-2 gap-4 text-gray-600 ">
                    <li className="flex items-center">
                        <FaWifi className="text-[#27B5FC] mr-2" />
                        Wifi miễn phí
                    </li>
                    <li className="flex items-center">
                        <MdAir className="text-[#27B5FC] mr-2" />
                        Điều hòa
                    </li>
                    <li className="flex items-center">
                        <FaBusinessTime className="text-[#27B5FC] mr-2" />
                        Dịch vụ kinh doanh
                    </li>
                    <li className="flex items-center">
                        <FaSwimmer className="text-[#27B5FC] mr-2" />
                        Hồ bơi
                    </li>
                    <li className="flex items-center">
                        <FaParking className="text-[#27B5FC] mr-2" />
                        Có bãi đậu xe
                    </li>
                    <li className="flex items-center ">
                        <FaThumbsUp className="text-[#27B5FC] mr-2" />
                        Được đánh giá cao nhất trong khu vực
                    </li>
                </ul>
            </div>
            <div className="ml-4">
                <img src="/img/hotel_details/map.png" alt="Map" className="w-[400px] mr-[40px] rounded-lg" />
                {/* Add a map component here if needed */}
                <h2 className="mt-6 text-xl font-semibold">Khám phá khu vực</h2>
                <ul className="mt-2 text-gray-600">
                    <li className="flex items-center mb-2 justify-between">
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-[#27B5FC] mr-2" />
                            Khách sạn Hải Âu
                        </div>
                        <span className="mr-[40px]">2 phút đi xe</span>
                    </li>
                    <li className="flex items-center mb-2 justify-between">
                        <div className="flex items-center">
                            <FaPizzaSlice className="text-[#27B5FC] mr-2" />
                            Cửa hàng Pizza Hut Go!
                        </div>
                        <span className="mr-[40px]">10 phút đi xe</span>
                    </li>
                    <li className="flex items-center mb-2 justify-between">
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-[#27B5FC] mr-2" />
                            Cảng Quy Nhơn
                        </div>
                        <span className="mr-[40px]">10 phút đi xe</span>
                    </li>
                    <li className="flex items-center mb-2 justify-between">
                        <div className="flex items-center">
                            <FaBuilding className="text-[#27B5FC] mr-2" />
                            FLC Sea Tower
                        </div>
                        <span className="mr-[40px]">10 phút đi xe</span>
                    </li>
                    <li className="flex items-center mb-2 justify-between">
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-[#27B5FC] mr-2" />
                            Khách sạn Mira
                        </div>
                        <span className="mr-[40px]">10 phút đi xe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HotelInfo;
