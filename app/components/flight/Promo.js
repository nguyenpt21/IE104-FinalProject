import React from 'react';
import { MdOutlineContentCopy } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import {Snippet} from "@nextui-org/react";

export default function PromotionCard(props) {
  return (
    <div className="rounded-lg shadow-md hover:bg-sky-50 duration-300">
      {/* Label */}
      <div className="flex items-center mb-2 pt-5">
        <span className=" py-1 pl-4 pr-2 text-[10px] font-semibold text-white bg-orangee rounded-r-xl">
          {props.label}
        </span>
      </div>

      {/* Main content */}
      <div className="mb-4  pt-3 px-4">
        <p className="text-base font-bold text-gray-800">{props.title}</p>
        <p className="text-secondary text-[14px]">
          {props.desc}
        </p>
      </div>

      {/* Code section */}
      <div className="flex items-center justify-center p-1 border-t-2 border-dashed border-gray-300">
        <Snippet
          symbol = ""
          timeout={5000} //thời gian chuyển icon
          copyIcon={<MdOutlineContentCopy />}
          checkIcon={<IoCheckmarkDoneSharp />}
          classNames={{
            base: "bg-inherit",
            copyButton: "text-blue-600 text-xl"
          }}
          tooltipProps={{
            offset: 3,
            placement: "bottom",
            content: "Copy to clipboard", // Add this line to set the tooltip content
            classNames: {
              content: "py-2 shadow-xl text-black bg-white text-[12px] rounded-lg border rounded-md",
            },
            delay: 0,
            closeDelay: 0,
          }}
        >
          <span className="text-blue-600 font-semibold text-base">{props.code}</span>
        </Snippet>
      </div>
    </div>
  );
}