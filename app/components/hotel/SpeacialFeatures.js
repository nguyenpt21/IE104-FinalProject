import React from 'react';

const SpecialFeatures = () => {
  return (
    <div className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-around">
        <div className="flex flex-col items-center">
          <img src="/path/to/discount-icon.svg" alt="Ưu đãi đặc biệt" className="w-12 h-12" />
          <span>Ưu đãi đặc biệt</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/path/to/customer-service-icon.svg" alt="Chăm sóc khách hàng 24/7" className="w-12 h-12" />
          <span>Chăm sóc khách hàng 24/7</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/path/to/service-icon.svg" alt="Dịch vụ hàng đầu" className="w-12 h-12" />
          <span>Dịch vụ hàng đầu</span>
        </div>
      </div>
    </div>
  );
};

export default SpecialFeatures;
