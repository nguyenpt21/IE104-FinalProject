import React from 'react';
import Image from 'next/image';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';

const HotelCard = ({ hotel }) => {
  return (
    <div className="w-[240px]">
      <div className="space-y-3">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="aspect-[2/3] relative">
            <Image
              src={hotel.image}
              alt={hotel.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1 flex items-center gap-1">
              <AiFillStar className="text-yellow-400 text-sm" />
              <span className="text-white text-sm">{hotel.rating}</span>
            </div>
            <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
              <AiFillHeart className="text-gray-400 text-xl" />
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-900">{hotel.name}</h3>
            <span className="text-gray-900">$ {hotel.price}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              {hotel.timeAgo}
            </span>
            <span className="mx-1">•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
              {hotel.views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard; 