import React from 'react'

export default function ContactTexarea(props) {
  return (
    <div className="relative">
      <textarea
        id={props.id}
        rows= "4"
        placeholder=" "
        className="block w-full p-3  text-base text-gray-900 border-2 border-gray-300 rounded-md appearance-none 
            focus:outline-none focus:ring-0 focus:border-sky-500 peer"
      />
      <label
        // nhấn vào nhãn là ok
        htmlFor={props.id} 
        className="absolute bg-white px-1 text-base text-gray-500 duration-200 top-4 left-3 z-10 
            transform peer-focus:scale-90 peer-focus:-translate-y-6 "
      >
        {props.title}
      </label>
    </div>
  )
}