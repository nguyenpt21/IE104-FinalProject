import { useState } from "react";
import { vi } from "date-fns/locale";
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Theme CSS file
import DateRangePicker from "./DateRangePicker";

export default function DateRangePickerDropdown({ open, handleToggle }) {
    const defaultRange = [
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ];
    const [range, setRange] = useState(defaultRange);

    const handleReset = () => {
        setRange(defaultRange); // Đặt lại state về khoảng ngày mặc định
    };

    return (
        <>
            {open && (
                <div className="flex flex-col px-4 pb-4 bg-white rounded-lg overflow-hidden shadow-dropdown">
                    <DateRangePicker></DateRangePicker>
                    <div className="flex items-center mt-1 justify-between flex-shrink-0">
                        <button
                            className="underline font-semibold text-base"
                            onClick={handleReset}
                        >
                            Xóa
                        </button>
                        <button
                            className="px-4 py-2 bg-[#27b5fc] text-white rounded-md"
                            onClick={handleToggle}
                        >
                            Chọn{" "}
                            {Math.ceil(
                                (range[0].endDate - range[0].startDate) /
                                    (1000 * 60 * 60 * 24)
                            ) + 1}{" "}
                            ngày
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
