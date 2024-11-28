'use client';
import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";

export default function PriceFilter() {
  return (
    <div className='w-[330px]'>
         <Select
            label="Sắp xếp theo"
            size='sm'
            defaultSelectedKeys={["Vagabond giới thiệu"]}
            labelPlacement="outside-left"
            className="max-w-xs flex justify-center items-center"
            classNames={{
                label: "whitespace-nowrap text-[14px] text-gray-500",
                innerWrapper: "text-gray-500", //giá trị được chọn
                selectorIcon: "text-gray-500 data-[open=true]:text-primary", //icon dropdown
                //ô input
                trigger: "border-2 border-gray-200 rounded-lg data-[open=true]:border-primary",
            }}
            scrollShadowProps={{
                isEnabled: true
            }}
            // wrap dropdown
            popoverProps={{
                classNames: {
                  base: "bg-white ",
                  content: "p-0 border rounded-lg",
                },
            }}

            // dropdown list
            listboxProps={{
                itemClasses: {
                  base: [
                    "rounded-md",
                    "text-gray-500",
                    "data-[hover=true]:text-primary",
                    "data-[hover=true]:bg-sky-50",
                   
                  ],
                },
            }}
        >
            <SelectItem key="Vagabond giới thiệu">Vagabond giới thiệu</SelectItem>
            <SelectItem key="Giá (thấp đến cao)">Giá (thấp đến cao)</SelectItem>
            <SelectItem key="Giá (cao đến thấp)">Giá (cao đến thấp)</SelectItem>
        </Select>
    </div>
  )
}
