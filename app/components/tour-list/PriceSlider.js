import { Slider } from "@nextui-org/react";
import { useState } from "react";
export default function PriceSlider() {
    const [value, setValue] = useState([0, 10000000]);
    return (
        <div>
            <div className="flex justify-between mb-2 font-semibold text-gray-800">
                {Array.isArray(value) &&
                    value.map((b) => (
                        <span>{b.toLocaleString("vi-VN")} VND</span>
                    ))}
            </div>
            <Slider
                label=" "
                step={1}
                size="sm"
                maxValue={10000000}
                minValue={0}
                defaultValue={[0, 10000000]}
                showSteps={false}
                showOutline={true}
                hideValue={true}
                value={value}
                classNames={{
                    base: "w-full",
                    filler: "", //màu đường line khoảng chọn
                    labelWrapper: "mb-2",
                    track: "bg-gray-200", //màu khoảng ngoài
                    value: "text-[15px] text-secondary tracking-wider pt-2",
                }}
                onChange={setValue}
            />
        </div>
    );
}
