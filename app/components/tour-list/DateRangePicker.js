import { DateRange } from "react-date-range";
import { useState } from "react";
import { vi } from "date-fns/locale";
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Theme CSS file
export default function DateRangePicker() {
    const defaultRange = [
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ];
    const [range, setRange] = useState(defaultRange);

    return (
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
    );
}
