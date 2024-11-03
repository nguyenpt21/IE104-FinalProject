import React from 'react'

export default function ContactInput(props) {
  return (
    <div className="relative">
      <input
        type={props.type}
        id={props.id}
        placeholder=" "
        className="block w-full p-3  text-base text-gray-900 border-2 border-gray-300 rounded-md appearance-none 
            focus:outline-none focus:ring-0 focus:border-sky-500 peer"
      />
      <label
        // nhấn vào nhãn là ok
        htmlFor={props.id}
        className="absolute text-base text-gray-500 duration-200 top-4 left-3 z-10 
            transform  origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-90 peer-focus:-translate-y-6 bg-white px-1"
      >
        {props.title}
      </label>
    </div>
  )
}