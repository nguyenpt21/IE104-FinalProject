import React from 'react'
import Image from 'next/image'
export default function CtButton(props) {
  return (
    <div className=''>
        <button 
            className="inline-flex items-center px-5 py-2  font-semibold text-primary 
            duration-300 bg-transparent border-sky-500 border-2 rounded-lg  
            hover:text-white hover:bg-sky-500 hover:shadow-custom"
            type='button'
        >
            <div className="flex">
                <span className="justify-center text-base">{props.title}</span>
            </div>
        </button>
    </div>
  )
}
