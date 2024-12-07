// app/hotel-checkout/components/BookingForm.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { TextField, MenuItem, Typography, Paper, Radio, RadioGroup, FormControlLabel, Box } from '@mui/material';
import HotelDetails from './HotelDetails'; 
import { Checkbox, TimePicker } from "antd";


const BookingForm = () => {
    return (
        <>
            <div className="flex max-w-[1120px] ml-[54px] mx-auto p-6 gap-[20px] mb-0">
                <div className="w-2/3">
                    <Paper className="p-6 rounded-lg" elevation={3} style={{ height: '420px' }}>
                        <Typography variant="h6" className="mb-4 font-bold">Thông tin liên hệ (đối với E-voucher)</Typography>
                        <Typography variant="body2" className="mb-6">Hãy điền chính xác tất cả thông tin để đảm bảo bạn nhận được Phiếu xác nhận đặt phòng (E-voucher) qua email của mình.</Typography>
                        
                        <div className="flex mb-4">
                            <TextField label="Họ và tên" name="fullName" required fullWidth className="mr-4" InputProps={{ style: { height: '50px' }}} />
                            <TextField label="CMND/CCCD" name="idNumber" required fullWidth InputProps={{ style: { height: '50px' }}} />
                        </div>
                        
                        <div className="mb-4">
                            <TextField label="Email" name="email" required type="email" fullWidth InputProps={{ style: { height: '50px' }}} />
                        </div>
                        
                        <div className="mb-4">
                            <Typography variant="body2">Số điện thoại</Typography>
                            <div className="flex">
                                <TextField select name="countryCode" required className="border border-gray-300 rounded-l-md" variant="outlined" InputProps={{ style: { height: '50px' }}}>
                                    <MenuItem value="+84">+84 (Vietnam)</MenuItem>
                                    <MenuItem value="+1">+1 (USA)</MenuItem>
                                    <MenuItem value="+44">+44 (UK)</MenuItem>
                                    <MenuItem value="+61">+61 (Australia)</MenuItem>
                                    <MenuItem value="+81">+81 (Japan)</MenuItem>
                                    {/* Add more country codes as needed */}
                                </TextField>
                                <TextField type="tel" name="phone" required className="flex-1" variant="outlined" InputProps={{ style: { height: '50px' }}}/>
                            </div>
                        </div>
                        
                        <RadioGroup row className="mb-4">
                            <FormControlLabel value="guest" control={<Radio />} label="Tôi là khách lưu trú" />
                            <FormControlLabel value="other" control={<Radio />} label="Tôi đang đặt cho người khác" />
                        </RadioGroup>
                        
                    </Paper>
                    <Paper className="mt-[45px] p-6 rounded-lg" elevation={3}>
                <Typography variant="h6" className="mb-4 font-bold">Bạn có yêu cầu nào không?</Typography>
                <Typography variant="body2" className="mb-4">Khi nhận phòng, khách sạn sẽ thông báo liệu yêu cầu này có được đáp ứng hay không. Một số yêu cầu cần trả thêm phí để sử dụng nhưng bạn hoàn toàn có thể hủy yêu cầu sau đó.</Typography>
                
                <div className="grid grid-cols-2 gap-4 ml-[10px]">
                    <FormControlLabel control={<Checkbox className='mr-[10px]' />} label="Phòng không hút thuốc" />
                    <FormControlLabel control={<Checkbox className='mr-[10px]'/>} label="Phòng liên thông" />
                    <FormControlLabel control={<Checkbox className='mr-[10px]'/>} label="Tầng lầu" />
                    <FormControlLabel control={<Checkbox className='mr-[10px]'/>} label="Giờ nhận phòng" />
                    <FormControlLabel control={<Checkbox className='mr-[10px]'/>} label="Giờ trả phòng" />
                    <FormControlLabel control={<Checkbox className='mr-[10px]'/>} label="Khác" />
                </div>
                </Paper>
                </div>
                <HotelDetails />
            </div>
        </>
    );
};

export default BookingForm;