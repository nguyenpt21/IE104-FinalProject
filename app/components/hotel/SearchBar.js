import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BsCalendar3 } from 'react-icons/bs';
import PickDate from './DatePicker';
import Link from 'next/link';

const SearchBar = ({ location, setLocation, checkIn, setCheckIn, checkOut, setCheckOut }) => {
  return (
    <div className="w-full max-w-5xl px-6 mt-2 mb-8 relative z-10">
      <div className="bg-white rounded-lg p-2 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-3 col-span-1">
          <IoLocationOutline className="text-gray-600 text-xl" />
          <input
            type="text"
            placeholder="Location"
            className="bg-transparent flex-1 outline-none text-sm font-semibold text-gray-800 placeholder-gray-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-3">
          <BsCalendar3 className="text-gray-600 text-xl" />
          <PickDate
            selectedDate={checkIn}
            onChange={(date) => setCheckIn(date)}
            placeholder="Check-in"
            className="bg-transparent outline-none text-sm font-semibold text-gray-800 flex-1"
          />
        </div>
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-3">
          <BsCalendar3 className="text-gray-600 text-xl" />
          <PickDate
            selectedDate={checkOut}
            onChange={(date) => setCheckOut(date)}
            placeholder="Check-out"
            className="bg-transparent outline-none text-sm font-semibold text-gray-800 flex-1"
          />
        </div>
        
        <Link href="/hotel-list">
          <button className="bg-[#27B5FC] text-white rounded-lg px-4  hover:bg-blue-600 transition duration-200 font-bold" style={{width: '100%', height: '100%'}}>
            Tìm kiếm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar; 