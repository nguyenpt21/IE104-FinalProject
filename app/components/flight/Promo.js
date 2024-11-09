import React from 'react';
import { ClipboardIcon } from '@heroicons/react/24/outline';

export default function PromotionCard(props) {
  return (
    <div className="w-[340px] rounded-lg shadow-md hover:bg-sky-50 duration-300">
      {/* Label */}
      <div className="flex items-center mb-2 pt-5">
        <span className=" py-1 pl-4 pr-2 text-sm font-semibold text-white bg-orangee rounded-r-xl">
          {props.label}
        </span>
      </div>

      {/* Main content */}
      <div className="mb-4  pt-3 px-4">
        <h2 className="text-xl font-bold text-gray-800">{props.title}</h2>
        <p className="text-secondary text-sm">
          {props.desc}
        </p>
      </div>

      {/* Code section */}
      <div className="flex items-center justify-center p-3 border-t-2 border-dashed border-gray-300">
        <span className="text-blue-600 font-semibold text-lg">{props.code}</span>
        <ClipboardIcon className="w-5 h-5 ml-2 text-primary cursor-pointer" />
      </div>
    </div>
  );
}