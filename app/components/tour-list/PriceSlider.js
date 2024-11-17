import { useState } from "react";
import ReactSlider from "react-slider";

export default function PriceSlider({ open, handleToggle }) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);

    const handleSliderChange = (values) => {
        setMinPrice(values[0]);
        setMaxPrice(values[1]);
    };

    return (
        <>
            {open && (
                <div className="w-[400px] bg-white p-4 shadow-dropdown rounded-lg">
                    <div className="flex justify-between mb-2  font-semibold text-gray-800">
                        <span>{minPrice.toLocaleString("vi-VN")} VND</span>
                        <span>{maxPrice.toLocaleString("vi-VN")} VND</span>
                    </div>
                    <ReactSlider
                        className="custom-slider"
                        defaultValue={[0, 10000000]}
                        min={0}
                        max={10000000}
                        step={100000}
                        onChange={handleSliderChange}
                    />
                    <div className="text-right mt-5">
                        <button
                            className="px-4 py-2 bg-blue_medium text-white rounded-md"
                            onClick={handleToggle}
                        >
                            Xem kết quả
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
