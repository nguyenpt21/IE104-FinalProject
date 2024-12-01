import React from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';

const HeroSection = ({ location, setLocation, checkIn, setCheckIn, checkOut, setCheckOut }) => {
  return (
    <div className="relative h-[380px] rounded-lg overflow-hidden mb-4">
      <Image
        src="/img/hotel_home/background_hotel.svg"
        alt="Hotel Hero"
        height={320}
        width={1440}
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-start pt-32">
        <h1 className="text-white text-4xl font-bold mb-8 text-center">
          Tìm và đặt phòng khách sạn giá rẻ
        </h1>
        <SearchBar 
          location={location} 
          setLocation={setLocation} 
          checkIn={checkIn} 
          setCheckIn={setCheckIn} 
          checkOut={checkOut} 
          setCheckOut={setCheckOut} 
        />
      </div>
    </div>
  );
};

export default HeroSection; 