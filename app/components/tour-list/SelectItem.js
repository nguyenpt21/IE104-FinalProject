import { useState, useEffect, useRef } from "react";
import { PiCheckFatFill } from "react-icons/pi";
export default function SelectItem({ selectTitle, optionList }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(optionList[0]);

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(!open);
    };

    const wrapperRef = useRef(null); 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex gap-4 items-baseline">
            <p className="font-semibold">{selectTitle}</p>
            <div className="relative w-60 flex-1 cursor-pointer" ref={wrapperRef}>
                <div
                    className="p-2 border border-gray-400 rounded-lg"
                    onClick={() => setOpen(!open)}
                >
                    {selected}
                </div>
                {open && (
                    <ul className="bg-white p-2 shadow-dropdown rounded-lg mt-2 absolute top-9 right-0 z-10 w-full">
                        {optionList.map((option, key) => (
                            <li
                                key={key}
                                className={`py-2 px-3 hover:bg-gray-100 rounded-lg flex items-center justify-between ${
                                    selected == option
                                        ? "text-blue_medium font-medium"
                                        : "text-gray-900"
                                }`}
                                onClick={() => handleSelect(option)}
                            >
                                <span>{option}</span>
                                {selected == option && (
                                    <div className="p-1 rounded-full bg-[#e1f6fc]">
                                        <PiCheckFatFill className="text-blue_medium w-2 h-2"></PiCheckFatFill>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
