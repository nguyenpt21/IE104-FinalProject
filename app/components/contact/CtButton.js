"use client"; 

import React from 'react';
import { useRouter } from 'next/navigation';

export default function CtButton(props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(props.hr);
  };

  return (
    <div>
      <button
        className="inline-flex items-center whitespace-nowrap px-5 py-2 font-semibold text-primary 
        duration-300 bg-transparent border-sky-500 border-2 rounded-lg  
        hover:text-white hover:bg-sky-500 hover:shadow-custom"
        type="button"
        onClick={handleClick}
      >
        <div className="flex">
          <span className="justify-center text-base">{props.title}</span>
        </div>
      </button>
    </div>
  );
}