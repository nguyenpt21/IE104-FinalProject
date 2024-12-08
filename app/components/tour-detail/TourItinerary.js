import { TOUR_ITINERARY } from "@/constants/tour-detail";
import React from "react";
import { SlLocationPin } from "react-icons/sl";
import Image from "next/image";

const TourItinerary = () => {

    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-6 text-center">Lịch trình tour</h1>
            <div className="space-y-8 relative">
                <div className="h-full w-[2px] bg-[#99dbfc] absolute left-4"></div>
                {TOUR_ITINERARY.map((item, key) => (
                    <div key={key} className="flex items-start">
                        {/* Icon */}
                        <div className="flex flex-col items-center">
                            {item.type === "start" || item.type === "return" ? (
                                <div className="w-8 h-8 bg-white border border-gray-800 rounded-full flex items-center justify-center relative">
                                    <SlLocationPin className="w-5 h-5"></SlLocationPin>
                                </div>
                            ) : (
                                <div className="w-8 h-8 bg-blue_medium text-white rounded-full flex items-center justify-center relative">
                                    <span>{item.stopNumber}</span>
                                </div>
                            )}
                        </div>

                        <div className="ml-4">
                            <h2 className="font-bold text-base">
                                {item.title}
                            </h2>
                            {item.description && (
                                <p className="text-gray-600 mt-1">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourItinerary;
