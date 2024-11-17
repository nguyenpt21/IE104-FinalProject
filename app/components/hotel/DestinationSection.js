import React from 'react';
import Image from 'next/image';

const destinations = [
  { id: 1, name: 'Dubai', image: '/img/hotel_home/Dubai.svg' },
  { id: 2, name: 'Tbilisi', image: '/img/hotel_home/Tbilisi.svg' },
  { id: 3, name: 'Paris', image: '/img/hotel_home/Paris.svg' },
  { id: 4, name: 'Istanbul', image: '/img/hotel_home/Istanbul.svg' },
  { id: 5, name: 'Taiwan', image: '/img/hotel_home/Taiwan.svg' },
];

const DestinationSection = () => {
  return (
    <div className="flex bg-blue-500 p-8 mb-20">
      <div className="flex-1">
        <h2 className="text-white text-2xl font-bold">Điểm đến hấp dẫn</h2>
        <p className="text-white mt-2">
          Những lựa chọn phổ biến nhất đối với người đi du lịch đến từ Việt Nam
        </p>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        {destinations.map(destination => (
          <div key={destination.id} className="relative">
            <img 
              src={destination.image} 
              alt={destination.name} 
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50">
              <span className="text-white text-lg font-semibold">{destination.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationSection;
