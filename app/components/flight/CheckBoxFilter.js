import React from 'react';
import { Checkbox } from "@nextui-org/react";
import Image from 'next/image';

export default function CheckBoxFilter(props) {
  return (
    <div className="w-full box-border"> 
      <Checkbox
        disableAnimation = "true" 
        aria-label={props.name}
        size="md"
        classNames={{
          wrapper: [ //ô checkbox ban đầu
            "before:border-secondary",
            "before:border-[1.5px]",
            "before:!rounded-md", //border box
            "after:!rounded-md", //border check
          ],
          icon: "bg-primary text-white", //icon check
        }}
        className="p-0 my-1 mx-3 w-full box-border" 
      >
        <div className="flex items-center">
          <div className="w-[20%] flex-shrink-0"> 
            <Image
              src={props.img}
              objectFit="cover"
              height={100} 
              width={200} 
              alt=""
              
            />
          </div>
          <div className="pl-4">
            <p className="text-[14px] font-medium">{props.name}</p>
            <p className="text-xs text-secondary">{props.price}</p>
          </div>
        </div>
      </Checkbox>
    </div>
  );
}