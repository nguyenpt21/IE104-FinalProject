"use client";
import SearchBar from "../components/SearchBar";
import { BsSearch } from "react-icons/bs";
import { TbCategory } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import DateRangePickerDropdown from "../components/tour-list/DateRangePickerDropdown";
import FilterSelection from "../components/tour-list/FilterSelection";
import CateSelectionDropdown from "../components/tour-list/CateSelectionDropdown";
import LangSelectionDropdown from "../components/tour-list/LangSelectionDropdown";
import {
    OPTION_SORT,
    TOUR_LIST,
    TOUR_REVIEWS,
    TREND_TOUR,
} from "@/constants/tour-list";
import TourCard from "../components/tour-list/TourCard";
import SelectItem from "../components/tour-list/SelectItem";
import Pagination from "../components/tour-list/Pagination";
import GeneralCarousel from "../components/GeneralCarousel";
import TourReviewCard from "../components/tour-list/TourReviewCard";
import FrequentQuestions from "../components/tour-list/FrequentQuestions";
import Image from "next/image";
import FilterModal from "../components/tour-list/FilterModal";
import PriceSliderDropdown from "../components/tour-list/PriceSliderDropdown";

export default function TourList() {
    const responsiveReviewCardList = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024,
            },
            items: 2,
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0,
            },
            items: 1,
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464,
            },
            items: 1,
        },
    };

    const responsiveTrendTourList = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024,
            },
            items: 5,
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0,
            },
            items: 3,
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464,
            },
            items: 2,
        },
    };

    return (
        <>
            {/* Hero */}
            <div className="bg-[url('/img/tour-list/hero_background.jpg')] bg-no-repeat bg-center bg-cover py-14">
                <div className="container mx-auto rounded-full pl-4">
                    <h2 className="text-white font-semibold text-3xl">
                        Trải nghiệm vui vẻ cho những chuyến đi khó quên
                    </h2>
                    <SearchBar
                        Icon={<BsSearch className="w-4 h-4"></BsSearch>}
                        placeholder={"Tìm kiếm"}
                        className="bg-white px-6 py-4 w-[400px] rounded-full mt-6"
                    ></SearchBar>
                </div>
            </div>
            <div className="container mx-auto mb-20">
                {/* Filter */}
                <div className="flex py-5 mt-2 justify-between items-center">
                    <div className="flex gap-2">
                        <FilterSelection
                            icon={<TbCategory className="w-5 h-5"></TbCategory>}
                            text={"Phân loại"}
                            dropdown={
                                <CateSelectionDropdown></CateSelectionDropdown>
                            }
                        ></FilterSelection>
                        <FilterSelection
                            icon={
                                <FaRegCalendarAlt className="w-5 h-5"></FaRegCalendarAlt>
                            }
                            text={"Ngày khả dụng"}
                            dropdown={<DateRangePickerDropdown></DateRangePickerDropdown>}
                        ></FilterSelection>
                        <FilterSelection
                            icon={
                                <IoPricetagsOutline className="w-5 h-5"></IoPricetagsOutline>
                            }
                            text={"Giá"}
                            dropdown={<PriceSliderDropdown></PriceSliderDropdown>}
                        ></FilterSelection>
                        <FilterSelection
                            icon={<IoLanguage className="w-5 h-5"></IoLanguage>}
                            text={"Ngôn ngữ hướng dẫn"}
                            dropdown={
                                <LangSelectionDropdown></LangSelectionDropdown>
                            }
                        ></FilterSelection>
                    </div>
                    <FilterModal></FilterModal>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-base">10K+ Dịch vụ</p>
                    <SelectItem
                        optionList={OPTION_SORT}
                        selectTitle={"Sắp xếp theo"}
                    ></SelectItem>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-6">
                    {TOUR_LIST.map((tour, key) => (
                        <TourCard key={key} card={tour}></TourCard>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-8">
                    <Pagination></Pagination>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold">
                        Mọi người nói gì về các tour trải nghiệm
                    </h2>
                    <GeneralCarousel responsive={responsiveReviewCardList}>
                        {TOUR_REVIEWS.map((review, key) => (
                            <TourReviewCard
                                key={key}
                                review={review}
                            ></TourReviewCard>
                        ))}
                    </GeneralCarousel>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold">Xu hướng</h2>
                    <GeneralCarousel responsive={responsiveTrendTourList}>
                        {TREND_TOUR.map((tour, key) => (
                            <div key={key}>
                                <Image
                                    src={tour.img}
                                    width={216}
                                    height={162}
                                    className="w-full object-cover rounded-lg"
                                ></Image>
                                <div className="mt-2">
                                    <p className="font-semibold">
                                        {tour.destination}
                                    </p>
                                    <p className="text-gray-400">{tour.city}</p>
                                </div>
                            </div>
                        ))}
                    </GeneralCarousel>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold">
                        Câu hỏi thường gặp về hoạt động ở điểm đến phổ biến
                    </h2>
                    <div className="mt-4">
                        <FrequentQuestions></FrequentQuestions>
                    </div>
                </div>
            </div>
        </>
    );
}
