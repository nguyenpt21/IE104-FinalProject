"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";

import { PROMOTIONS } from "@/constants";

export default function Promotion() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(PROMOTIONS.slice(0, 3));


    const nextSlide = () => {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);

        if (nextIndex < PROMOTIONS.length - 3) {
            setVisibleImages(PROMOTIONS.slice(nextIndex, nextIndex + 3));
        } else if (nextIndex < PROMOTIONS.length - 2) {
            setVisibleImages(PROMOTIONS.slice(nextIndex, PROMOTIONS.length));
        }
    };

    const prevSlide = () => {
        const prevIndex = currentIndex - 1;
        setCurrentIndex(prevIndex);
        setVisibleImages(PROMOTIONS.slice(prevIndex, prevIndex + 3));
    };

    return (
        <div
            className="container mx-auto relative overflow-hidden"

        >
            <div
                className="flex gap-2 transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${0}%)` }}
            >
                {visibleImages.map((image, index) => (
                    <div
                        key={index}
                        className="flex-1 flex-shrink-0 h-[195px] rounded-lg "
                    >
                        <Image
                            src={image.img}
                            width={390}
                            height={195}
                            className="rounded-lg w-full h-full object-cover"
                        ></Image>
                    </div>
                ))}
            </div>
            {currentIndex > 0 && (
                <div className="absolute inset-y-0 left-0 z-10 flex items-center px-4">
                    <button
                        onClick={prevSlide}
                        className="bg-white text-blue-600 p-2 rounded-full opacity-70 hover:opacity-100 rotate-180"
                    >
                        <MdKeyboardArrowRight className="w-6 h-6"></MdKeyboardArrowRight>
                    </button>
                </div>
            )}
            {currentIndex < PROMOTIONS.length - 3 && (
                <div className="absolute inset-y-0 right-0 z-10 flex items-center px-4">
                    <button
                        onClick={nextSlide}
                        className="bg-white text-blue-600 p-2 rounded-full opacity-70 hover:opacity-100 outline-none"
                    >
                        <MdKeyboardArrowRight className="w-6 h-6"></MdKeyboardArrowRight>
                    </button>
                </div>
            )}
        </div>
    );
}
