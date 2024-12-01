import React from 'react'

export default function Heading(props) {
  return (
    <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold text-black">
            {props.title}
        </h1>
    </div>
  )
}
