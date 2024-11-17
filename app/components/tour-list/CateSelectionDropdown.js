import { useState } from "react";
import { CATE_SELECTION_DROPDOWN } from "@/constants/tour-list";

export default function CateSelectionDropdown({ open, handleToggle }) {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemClick = (item) => {
        setSelectedItems((prev) => {
            if (prev.includes(item)) {
                return prev.filter((i) => i !== item);
            } else {
                return [...prev, item];
            }
        });
    };

    const handleClear = () => {
        setSelectedItems([])
    }
    return (
        <>
            {open && (
                <div className="bg-white shadow-dropdown w-[700px] h-[420px] rounded-xl overflow-hidden">
                    <div className="h-full overflow-y-auto p-4 flex flex-col gap-6">
                        {CATE_SELECTION_DROPDOWN.map((cate, key) => (
                            <div key={key}>
                                <h3 className="font-semibold">{cate.cate}</h3>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {cate.list.map((item, key) => (
                                        <div
                                            key={key}
                                            className={`cursor-pointer px-2 py-1 border rounded-lg ${
                                                selectedItems.includes(item)
                                                    ? "border-blue_medium text-blue_medium"
                                                    : "border-gray-400"
                                            }`}
                                            onClick={() =>
                                                handleItemClick(item)
                                            }
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="flex items-center justify-between">
                            <button className="underline font-semibold" onClick={handleClear}>
                                Xóa
                            </button>
                            <button
                                className="px-4 py-2 bg-blue_medium text-white rounded-md"
                                onClick={handleToggle}
                            >
                                Xem kết quả
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
