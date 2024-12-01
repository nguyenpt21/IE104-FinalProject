import React, { useState } from 'react';
import SearchBar from './SearchBar'; 
import Image from 'next/image';
import { FaBed, FaUsers, FaRulerCombined } from 'react-icons/fa'; // Import icons

const RoomAvailable = () => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const handleSearch = () => {
        // Logic to handle search
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Phòng có sẵn</h1>
            <SearchBar 
                checkInDate={checkInDate} 
                setCheckInDate={setCheckInDate} 
                checkOutDate={checkOutDate} 
                setCheckOutDate={setCheckOutDate} 
                onSearch={handleSearch} 
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ml-6 mr-6">
                {/* Room Card 1 */}
                <div className="bg-white border rounded-lg shadow-md p-4 w-full mx-auto hover:translate-y">
                    <img src="/img/hotel_details/hotel_16.png" alt="Room 1" className="w-full h-40 object-cover rounded-md" />
                    <h2 className="text-lg font-semibold mt-2">Giường đôi tiêu chuẩn, nhiều giường</h2>
                    <div className="flex items-center mt-2">
                        <FaRulerCombined className="w-4 h-4 mr-1 text-gray-500" />
                        <p className="text-gray-500">214m²</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <FaUsers className="w-4 h-4 mr-1 text-gray-500" />
                        <p className="text-gray-500">3 người</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <FaBed className="w-4 h-4 mr-1 text-gray-500" />
                        <p className="text-gray-500">1 giường đôi và 1 giường đơn</p>
                    </div>
                    <button className="mt-4 w-full bg-[#27B5FC] text-white py-2 rounded-md">Đặt phòng</button>
                </div>

                {/* Room Card 2 */}
                <div className="bg-white border rounded-lg shadow-md p-4 w-full mx-auto hover:translate-y">
                    <img src="/img/hotel_details/hotel_17.png" alt="Room 2" className="w-full h-40 object-cover rounded-md" />
                    <h2 className="text-lg font-semibold mt-2">Giường đôi tiêu chuẩn, nhiều giường</h2>
                    <div className="flex items-center mt-2">
                        <FaRulerCombined className="w-4 h-4 mr-1 text-gray-500" />
                        <p className="text-gray-500">24m²</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <FaUsers className="w-4 h-4 mr-1 text-gray-500" />
                        <p className="text-gray-500">3 người</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <FaBed className="w-4 h-4 mr-1 text-gray-500" />
                        <p className="text-gray-500">1 giường đôi và 1 giường đơn</p>
                    </div>
                    <button className="mt-4 w-full bg-[#27B5FC] text-white py-2 rounded-md">Đặt phòng</button>
                </div>

                {/* Room Card 3 */}
                <div className="bg-white border rounded-lg shadow-md p-4 w-full mx-auto hover:translate-y">
                    <img src="/img/hotel_details/hotel_18.png" alt="Room 3" className="w-full h-40 object-cover rounded-md" />
                    <h2 className="text-lg font-semibold mt-2">Phòng đôi tiêu chuẩn, nhiều giường</h2>
                    <div className="flex items-center mt-2">
                        <FaRulerCombined className="w-4 h-4 mr-1 text-gray-500" />
                        <p className="text-gray-500">24m²</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <FaUsers className="w-4 h-4 mr-1 text-gray-500" />
                        <p className="text-gray-500">3 người</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <FaBed className="w-4 h-4 mr-1 text-gray-500" />
                        <p className="text-gray-500">1 giường đôi và 1 giường đơn</p>
                    </div>
                    <button className="mt-4 w-full bg-[#27B5FC] text-white py-2 rounded-md">Đặt phòng</button>
                </div>
            </div>
        </div>
    );
};

export default RoomAvailable;
