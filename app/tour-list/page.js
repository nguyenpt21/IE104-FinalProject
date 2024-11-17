"use client";
import SearchBar from "../components/SearchBar";
import { BsSearch } from "react-icons/bs";
import { TbCategory } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import DateRangePicker from "../components/tour-list/DateRangePicker";
import FilterSelection from "../components/tour-list/FilterSelection";
import CateSelectionDropdown from "../components/tour-list/CateSelectionDropdown";
import PriceSlider from "../components/tour-list/PriceSlider";
import LangSelectionDropdown from "../components/tour-list/LangSelectionDropdown";

export default function TourList() {
    return (
        <>
            {/* Hero */}
            <div className="bg-[url('/img/activity-list/hero_background.jpg')] bg-no-repeat bg-center bg-cover py-14">
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

            {/* Filter */}
            <div className="container mx-auto">
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
                            dropdown={<DateRangePicker></DateRangePicker>}
                        ></FilterSelection>
                        <FilterSelection
                            icon={
                                <IoPricetagsOutline className="w-5 h-5"></IoPricetagsOutline>
                            }
                            text={"Giá"}
                            dropdown={<PriceSlider></PriceSlider>}
                        ></FilterSelection>
                        <FilterSelection
                        icon={<IoLanguage className="w-5 h-5"></IoLanguage>}
                        text={"Ngôn ngữ hướng dẫn"}
                        dropdown={<LangSelectionDropdown></LangSelectionDropdown>}
                        >

                        </FilterSelection>
                    </div>
                    <button className="flex items-center gap-2 rounded-lg border-2 border-gray-900 px-4 py-2">
                        <IoFilterSharp className="w-5 h-5"></IoFilterSharp>
                        Lọc
                    </button>
                </div>
            </div>
            <div className="mt-20"></div>
        </>
    );
}
