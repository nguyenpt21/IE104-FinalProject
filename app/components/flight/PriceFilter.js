'use client';
import React from 'react'
import { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";

export default function PriceFilter({ selectTitle, optionList }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(optionList[0]);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(!open);
  };
  const handleClickOutside = (event) => {
    if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
    ) {
        setOpen(false);
    }
  };

  const wrapperRef = useRef(null); 
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
  });

  return (
    <div className='flex items-baseline'>
      {/* sap sep */}
      <p className='text-[15px] font-normal text-gray-500 pr-3'>
        {selectTitle}
      </p>
      {/* ô select */}
      <div ref={wrapperRef} className='relative mr-1'>
        <div 
          className={`w-[200px] flex items-center justify-between border-2 border-gray-300 py-1 px-2 rounded-md text-gray-500
            ${open ? 'border-primary text-primary duration-300' : ''}  
          `}
          onClick={() => setOpen(!open)}
        >
          {selected} 
          {open ? (
                      <RiArrowDropDownLine className='rotate-180 transition-transform duration-300 text-2xl text-primary' />
                    ) : (
                      <RiArrowDropDownLine className='text-2xl' />
          )}
        </div>
        
        {open && (
          <div className='bg-white p-2 shadow-dropdown rounded-md absolute right-0 z-10 w-full '>
            {optionList.map((option, key) => (
              <div 
                key={key} 
                className={`py-2 px-2 my-1 text-gray-500 rounded-md flex items-center justify-between hover:bg-sky-50
                  ${selected == option ? 'bg-sky-50 text-primary' : ''}
                `}
                onClick={() => handleSelect(option)}
              >
                {option}
                {selected == option ? <IoMdCheckmark /> : ''}
              </div>
            ))}
          </div>

        )}
      </div>
      
         
    </div>
  )
}
