import React, { useState, useRef, useEffect } from "react";

export default function FilterSelection({ icon, text, dropdown }) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    const handleToggle = () => {
        setOpen(!open);
    };

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
        <div className="relative" ref={wrapperRef}>
            <button
                className="flex items-center gap-1 px-4 py-2 border border-gray-500 rounded-full"
                onClick={handleToggle}
                id="toggle-button"
            >
                {icon}
                {text}
            </button>
            {open && (
                <div className="absolute top-12">
                    {React.cloneElement(dropdown, { open, handleToggle})}
                </div>
            )}
        </div>
    );
}
