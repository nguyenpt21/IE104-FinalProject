import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const destinations = [
  { id: 1, name: 'Dubai', amount: 'Có 750 khách sạn', image: '/img/hotel_home/Dubai.svg' },
  { id: 2, name: 'Tbilisi', amount: 'Có 1379 khách sạn', image: '/img/hotel_home/Tbilisi.svg' },
  { id: 3, name: 'Paris', amount: 'Có 986 khách sạn', image: '/img/hotel_home/Paris.svg' },
  { id: 4, name: 'Istanbul', amount: 'Có 1874 khách sạn', image: '/img/hotel_home/Istanbul.svg' },
  { id: 5, name: 'Taiwan', amount: 'Có 2432 khách sạn', image: '/img/hotel_home/Taiwan.svg' },
];

const DestinationSection = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className={`dot ${i === 2 ? 'active' : ''}`}></div>
    ),
  };

  return (
    <div className="bg-blue-500 p-8 mb-20">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-3xl font-bold">Khám Phá Thế Giới – Hành Trình Trong Mơ Đang Chờ Bạn!</h2>
        <p className="text-white mt-2">
          Những lựa chọn phổ biến nhất đối với người đi du lịch đến từ Việt Nam
        </p>
      </div>
      <Slider {...settings} className="mt-6">
        {destinations.map(destination => (
          <div key={destination.id} className="relative p-2 hover:translate-y">
            <img 
              src={destination.image} 
              alt={destination.name} 
              className="w-full h-48 object-cover p-2 rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <div className="text-white text-xl font-semibold">{destination.name}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationSection;
