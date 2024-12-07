import React from 'react';
import BookingForm from '@/app/components/hotel-checkout/BookingForm';
import Price from '@/app/components/hotel-checkout/Price';

const HotelCheckoutPage = () => {
    return (
        <div className="hotel-checkout bg-slate-100 overflow-hidden" style={{ height: '100%' }}>
            <h1 className='text-2xl ml-[80px] mt-[30px] mb-[7px] text-black font-bold'>Đặt phòng của bạn</h1>
            <p className='text-gray-600 ml-[80px]'>Hãy đảm bảo tất cả thông tin chi tiết trên trang này đã chính xác trước khi tiến hành thanh toán.</p>
            <BookingForm />
            <Price/>
        </div>
    );
};

export default HotelCheckoutPage;
