import { LANG_SELECTION_DROPDOWN } from "@/constants/tour-list";
import { useState } from "react";
export default function LangSelectionDropdown({ open, handleToggle }) {
    const [selectedLangs, setSelectedLangs] = useState([]);
    const handleItemClick = (lang) => {
        setSelectedLangs((prev) => {
            if (prev.includes(lang)) {
                return prev.filter((l) => l !== lang);
            } else {
                return [...prev, lang];
            }
        });
    };

    const handleClear = () => {
        setSelectedLangs([]);
    };

    return (
        <>
            {open && (
                <div className="bg-white shadow-dropdown w-[700px] rounded-xl p-4">
                    <div className="flex flex-wrap gap-2">
                        {LANG_SELECTION_DROPDOWN.map((lang, key) => (
                            <div
                                key={key}
                                className={`cursor-pointer px-2 py-1 border rounded-lg ${
                                    selectedLangs.includes(lang)
                                        ? "border-blue_medium text-blue_medium"
                                        : "border-gray-400"
                                }`}

                                onClick={() => handleItemClick(lang)}
                            >
                                {lang}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="underline font-semibold"
                            onClick={handleClear}
                        >
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
            )}
        </>
    );
}
