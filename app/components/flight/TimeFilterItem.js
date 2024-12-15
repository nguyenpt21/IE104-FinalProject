"use client"; 
import { TIME_FILTER } from '@/constants/flight'
import React, { useState } from 'react'

export default function TimeFilterItem(props) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      onClick={() => setSelected(!selected)}
      className={`text-center rounded-md border-[1.5px] py-2 w-full 
        duration-300 group  hover:bg-primary 
        ${selected ? 'bg-primary border-primary text-white' : 'border-gray-300'}
      `}
    >
      <p className={`text-[11px] font-medium ${selected ? 'text-white' : 'text-gray-400'} group-hover:text-white`}>
        {props.title}
      </p>
      <p className={`text-[14px] font-bold ${selected ? 'text-white' : 'text-primary'} group-hover:text-white`}>
        {props.time}
      </p>
    </button>
  );
}