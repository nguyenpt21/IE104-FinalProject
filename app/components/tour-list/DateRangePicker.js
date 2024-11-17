import { useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { vi } from "date-fns/locale";
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Theme CSS file

export default function DateRangePicker({ open, handleToggle }) {
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
                    <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setRange([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        minDate={new Date()}
                        className="custom-date-range-picker"
                        showDateDisplay={false}
                        months={2}
                        direction="horizontal"
                        locale={vi}
                        rangeColors={["#27b5fc"]}
                    />
                    <div className="flex items-center mt-1 justify-between flex-shrink-0">
                        <button className="underline font-semibold text-base" onClick={handleReset}>
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
