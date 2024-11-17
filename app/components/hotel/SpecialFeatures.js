import React from 'react';
import Image from 'next/image';

const SpecialFeatures = () => {
  return (
    <div className="bg-blue-500 text-white py-10 mb-28">
      <div className="w-full flex justify-around">
        <div className="flex flex-col items-center">
          <img src="/icons/Discount.svg" alt="Ưu đãi đặc biệt" className="w-18 h-18 mb-12 ml-12"  />
          <strong>Ưu đãi đặc biệt</strong>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/mic.svg" alt="Chăm sóc khách hàng 24/7" className="w-18 h-18" />
          <strong>Chăm sóc khách hàng 24/7</strong>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/Star1.svg" alt="Dịch vụ hàng đầu" className="w-18 h-18 mt-4 mb-12" />
          <strong>Dịch vụ hàng đầu</strong>
        </div>
      </div>
    </div>
  );
};

export default SpecialFeatures;
