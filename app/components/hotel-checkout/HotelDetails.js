import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { FaUser, FaBed, FaUtensils, FaStar } from 'react-icons/fa';

const HotelDetails = () => {
    return (
        <div className="w-1/3">
            <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-bold">Grand Sunrise Platinum</h3>

                <div className="flex items-center mb-1">
                    <FaStar className="text-yellow-400 text-[12px]" />
                    <span className="ml-1 text-[12px] text-[#27B5FC] font-bold">8.8</span>
                    <span className="ml-1 text-[12px] text-gray-600 font-semibold">(1.062 Đánh giá)</span>
                </div>
                <div className="bg-green-100 w-[180px] p-0.5 rounded-md mb-2">
                    <p className="text-green-700 font-bold text-[10px]">Xếp hạng cao trong danh mục Vị trí</p>
                </div>
                <img src="/img/hotel_details/hotel_15.jpeg" alt="Hotel"/>
                <div className="mt-4">
                    <Typography variant="body1" className="font-bold">Thông tin đặt phòng</Typography>
                    <Box className="flex gap-2 mt-2">
                        <Box className="w-1/2">
                            <Paper className="p-2">
                                <Typography variant="body2" className=" text-center text-gray-600">Nhận phòng</Typography>
                                <Typography variant="body2" className="text-[12px] text-center mt-[5px] font-bold">Thứ 6, 6 thg 12 2024</Typography>
                                <Typography variant="body2" className="text-[12px] text-center mt-[5px]">Từ 14:00</Typography>
                            </Paper>
                        </Box>
                        <Box className="w-1/2">
                            <Paper className="p-2">
                                <Typography variant="body2" className=" text-center text-gray-600">Trả phòng</Typography>
                                <Typography variant="body2" className="text-[12px] text-center mt-[5px] font-bold">Thứ 7, 7 thg 12 2024</Typography>
                                <Typography variant="body2" className="text-[12px] text-center mt-[5px]">Trước 12:00</Typography>
                            </Paper>
                        </Box>
                    </Box>
                </div>
                <div className="mt-4">
                    <Typography variant="body1" className="font-bold">(1x) Superior Room With 2 Single Beds</Typography>
                    <Box className="mt-2 flex items-center">
                        <FaUser className="text-sm text-gray-500 font-bold" />
                        <Typography variant="body2" className="ml-1 text-gray-600 font-medium">1 khách</Typography>
                    </Box>
                    <Box className="mt-1 flex items-center">
                        <FaBed className="text-sm text-gray-500 font-bold" />
                        <Typography variant="body2" className="ml-1 text-gray-600  font-medium">Giường (X2)</Typography>
                    </Box>
                    <Box className="mt-1 flex items-center">
                        <FaUtensils className="text-sm text-gray-500 font-bold" />
                        <Typography variant="body2" className="ml-1 text-gray-600  font-medium">Không gồm bữa sáng</Typography>
                    </Box>
                </div>
                 {/* New Total Price Section */}
                 <hr className="my-4 border-gray-300" />
                 <div className="mt-4">
                    <Typography variant="body1" className="font-bold">Tổng Giá Phòng</Typography>
                    <Box className="flex justify-between">
                        <Typography variant="body2" className="text-gray-500 font-semibold">1 phòng, 1 đêm</Typography>
                        <Typography variant="body1" className="text-orange-600 font-bold ml-2 text-right">4.276.407 VND</Typography>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;
