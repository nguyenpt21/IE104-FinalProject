"use client";
import React from 'react';
import { Button, Paper, Typography } from '@mui/material';

const AdditionalServicesInfo = () => {
    return (
        <div className="flex container mx-auto p-6">
            <Paper className="w-2/3 p-6 rounded-lg" elevation={3}>
                <Typography variant="h6" className="mb-1 font-bold">Chi tiết giá</Typography>
                <Typography variant="body2" className="mb-4 text-green-500 font-bold">Hãy áp thêm mã giảm giá tại trang thanh toán để có giá tốt hơn nhé</Typography>
                <div className="flex justify-between">
                    <div className="flex-1">
                        <div className="flex justify-between">
                            <Typography variant="body2" className="text-gray-800 text-[16px]">Giá phòng</Typography>
                            <Typography variant="body2" className="font-bold text-gray-800 text-[16px]">3.633.311 VND</Typography>
                        </div>
                        <ul className="list-disc mt-[10px] mb-[20px]">
                            <p className='text-gray-600 text-[12px]'>(1x) Superior Room With 2 Single Beds (1 đêm)</p >
                        </ul>
                        <div className="flex justify-between">
                            <Typography variant="body2" className="text-gray-800 text-[16px]">Thuế và phí:</Typography>
                            <Typography variant="body2" className="font-bold text-gray-800 text-[16px]"> 643.096 VND</Typography>
                        </div>
                        <hr className="my-4 border-gray-300" />
                        <div className="flex justify-between mt-[20px]">
                            <Typography variant="body2" className="font-bold text-gray-800 text-[20px]">Tổng giá:</Typography>
                            <Typography variant="body2" className="font-bold text-orange-600 text-[20px]">4.276.407 VND</Typography>
                        </div>
                    </div>
                </div>
                <Button variant="contained" color="primary" className="mt-8 bg-orange-600 w-[100%] h-[48px] text-[16px] font-bold hover:bg-orange-700 rounded-lg">thanh toán</Button>
            </Paper>
        </div>
    );
};

export default AdditionalServicesInfo;