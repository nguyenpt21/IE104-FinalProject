import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BsCalendar3 } from 'react-icons/bs';

const SearchBar = ({ location, setLocation, checkIn, setCheckIn, checkOut, setCheckOut }) => {
  return (
    <div className="w-full max-w-4xl px-4 mt-8">
      <div className="bg-white rounded-lg p-2 grid grid-cols-5 gap-2">
        <div className="col-span-2 flex items-center gap-2 bg-gray-50 rounded p-2">
          <IoLocationOutline className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Location"
            className="bg-transparent flex-1 outline-none text-sm font-normal"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-gray-50 rounded p-2">
          <BsCalendar3 className="text-gray-500" />
          <input
            type="date"
            className="bg-transparent outline-none text-sm font-normal text-gray-600"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            placeholder="Check-in"
          />
        </div>
        <div className="flex items-center gap-2 bg-gray-50 rounded p-2">
          <BsCalendar3 className="text-gray-500" />
          <input
            type="date"
            className="bg-transparent outline-none text-sm font-normal text-gray-600"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            placeholder="Check-out"
          />
        </div>
        <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default SearchBar; 