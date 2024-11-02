import React from 'react'

export default function Heading(props) {
  return (
    <div class="flex justify-center items-center h-40 ">
        <h1 class="text-5xl font-bold text-black ">
            {props.title}
        </h1>
    </div>
  )
}
