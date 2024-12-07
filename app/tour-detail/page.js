"use client";
import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa";

import TourGeneralInformarion from "../components/tour-detail/TourGeneralInformation";
import CalendarSelection from "../components/tour-detail/CalendarSelection";
import { TOUR_DETAIL_REVIEW, TOUR_TAGS, TOUR_TICKETS } from "@/constants/tour-detail";
import TourTicket from "../components/tour-detail/TourTicket";
import TourTicketSection from "../components/tour-detail/TourTicketSection";
import TourItinerary from "../components/tour-detail/TourItinerary";
import { FaStar } from "react-icons/fa";
import TourDetailReview from "../components/tour-detail/TourDetailReview";

export default function TourDetail() {
    return (
        <>
            <div className="w-[82%] mx-auto text-base">
                <h1 className="text-4xl font-semibold mt-6">
                    Tour Ngày Cao Cấp Khám Phá Địa Đạo Củ Chi & Đồng Bằng Sông
                    Cửu Long
                </h1>
                <div className="w-[800px] flex gap-1 flex-wrap mt-2">
                    {TOUR_TAGS.map((tag, key) => (
                        <span
                            key={key}
                            className="p-1 text-[#757575] rounded-md text-sm bg-[#f5f5f5]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {/* Banner */}
                <div className="flex gap-2 mt-4">
                    <div className="w-[70%]">
                        <Image
                            src={"/img/tour-detail/banner/banner-1.webp"}
                            height={470}
                            width={800}
                            className="w-full h-full object-cover rounded-l-xl"
                        ></Image>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image
                            src={"/img/tour-detail/banner/banner-2.webp"}
                            height={470}
                            width={200}
                            className="w-full h-[50%] object-cover rounded-tr-xl"
                        ></Image>
                        <Image
                            src={"/img/tour-detail/banner/banner-3.webp"}
                            height={470}
                            width={200}
                            className="w-full h-[50%] object-cover rounded-br-xl"
                        ></Image>
                    </div>
                </div>
                {/* Thông tin chung của tour */}
                <div className="flex mt-4 gap-2">
                    <TourGeneralInformarion></TourGeneralInformarion>
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="flex items-center justify-between p-3  rounded-lg bg-[#fff4ef]">
                            <div>
                                <p className="text-sm">Bắt đầu từ</p>
                                <p className="text-xl font-bold text-[#fd5d1c]">
                                    1.071.395 VND
                                </p>
                            </div>
                            <a
                                href=""
                                className="px-8 py-2 bg-[#fd5d1c] rounded-full text-white"
                            >
                                Tìm Tour
                            </a>
                        </div>
                        <div className="flex-1 flex items-center justify-center flex-col bg-[#f7f9fa] rounded-lg">
                            <FaRegCommentDots></FaRegCommentDots>
                            <p className="font-bold">
                                Để lại đánh giá khi bạn có thể!
                            </p>
                            <p className="text-sm text-center">
                                Điều này sẽ giúp các du khách khác khi họ lên kế
                                hoạch du lịch.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-6 border rounded-lg overflow-hidden">
                    <CalendarSelection></CalendarSelection>
                    <TourTicketSection></TourTicketSection>
                </div>
                <div className="mt-4">
                    <TourItinerary></TourItinerary>
                </div>
                <div className="mt-6">
                    <p className="text-2xl font-bold">Đánh giá</p>
                    <div className="flex mt-4 gap-4 items-center">
                        <div className="text-3xl font-bold">
                            5<span className="text-gray-400 text-sm ">/5</span>
                        </div>
                        <div className="flex text-yellow-400 gap-2">
                            {Array(5)
                                .fill(1)
                                .map((_, index) => (
                                    <FaStar key={index} className="w-8 h-8"></FaStar>
                                ))}
                        </div>
                        <p className="text-base">Dựa trên 1K+ lượt đánh giá</p>
                    </div>
                    <div className="flex flex-col gap-5 mt-10">
                        {TOUR_DETAIL_REVIEW.map((review, key) => (
                            <TourDetailReview review={review}></TourDetailReview>
                        ))}
                    </div>
                </div>
                <div className="mb-20"></div>
            </div>
        </>
    );
}
