import React from 'react'
import {Slider} from "@nextui-org/react";

export default function RangeSliderFilter() {
  return (
    <div className=''>
        <Slider 
            label = " "
            step={1} 
            size='sm'
            maxValue={6962591} 
            minValue={1549215} 
            defaultValue={[1549215, 6962591]}
            showSteps={false}
            showTooltip={true} //hiện ô giá trị khi kéo
            showOutline={true}
            formatOptions={{style: "currency", currency: "VND"}}
            tooltipValueFormatOptions={{style: "currency", currency: "VND"}}
            classNames={{
                base: "max-w-md",
                filler: "", //màu đường line khoảng chọn
                labelWrapper: "mb-2",
                track: "bg-gray-200", //màu khoảng ngoài
                value: "text-[15px] text-secondary tracking-wider pt-2",
            }}
            tooltipProps={{
                offset: 10,
                placement: "bottom",
                classNames: {
                    base: [
                        "before:bg-sky-50",
                    ], //mũi tên
                    content: "py-2 shadow-xl text-secondary bg-sky-50 text-[12px] rounded-lg",
                },
            }}
        />
    </div>
  )
}