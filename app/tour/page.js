import {
    BOAT_TOURS,
    DESTINATIONS_WITH_ACTIVITIES,
    RECOMMENDED_TOURS,
    SPA_ACTIVITIES,
} from "@/constants/tour";
import SearchBar from "../components/SearchBar";
import { CiSearch } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { TiThSmall } from "react-icons/ti";
import DestinationCard from "../components/tour/DestinationCard";
import TourList from "../components/tour/TourList";
import Image from "next/image";
import Link from "next/link";
import TourCard from "../components/tour/TourCard";

export default function Tour() {
    return (
        <>
            {/* Hero */}
            <div
                className="bg-[url('/img/tour/hero_background.jpg')] bg-center bg-no-repeat h-[500px] relative bg-cover"
            >
                <div className="container mx-auto py-10 ">
                    <h2 className="text-white text-[60px] font-semibold">
                        Tour & Trải nghiệm
                    </h2>
                    <p className="text-white text-xl font-semibold">
                        Tour du lịch, trải nghiệm khám phá, spa và hơn thế nữa
                    </p>
                    <SearchBar
                        placeholder="Địa điểm"
                        className={
                            "w-[700px] bg-white h-16 rounded-full pl-4 text-lg font-semibold pr-2 py-2 caret-primary mt-6"
                        }
                        Icon={<GrLocation className="w-6 h-6"></GrLocation>}
                        Button={
                            <button className="bg-primary h-full w-[100px] text-center flex items-center justify-center text-white rounded-full">
                                <CiSearch className="w-[28px] h-[28px]"></CiSearch>
                            </button>
                        }
                    ></SearchBar>
                    {/* Destination List */}
                    <div className="flex gap-4 absolute -bottom-20 container mx-auto">
                        {DESTINATIONS_WITH_ACTIVITIES.map((card, key) => (
                            <DestinationCard
                                card={card}
                                key={key}
                            ></DestinationCard>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-40 ">
                <h2 className="text-2xl font-semibold">
                    Trải nghiệm không thể bỏ lỡ
                </h2>
                <div className="mt-8 flex flex-col gap-10">
                    <TourList
                        className={"bg-[#e1f6fc]"}
                        Header={
                            <div className="flex gap-2 items-center">
                                <Image
                                    src={"/img/tour/tour-icon.webp"}
                                    width={36}
                                    height={36}
                                ></Image>
                                <p className="text-lg font-semibold">
                                    Tour trong ngày
                                </p>
                            </div>
                        }
                        Content={
                            <div className="flex gap-4">
                                {RECOMMENDED_TOURS.map((card, key) => (
                                    <TourCard key={key} card={card}></TourCard>
                                ))}
                            </div>
                        }
                    ></TourList>
                    <TourList
                        className={"bg-[#ddfff0]"}
                        Header={
                            <div className="flex gap-2 items-center">
                                <Image
                                    src={"/img/tour/boat-icon.png"}
                                    width={36}
                                    height={36}
                                ></Image>
                                <p className="text-lg font-semibold">
                                    Tour đi thuyền
                                </p>
                            </div>
                        }
                        Content={
                            <div className="flex gap-4">
                                {BOAT_TOURS.map((card, key) => (
                                    <TourCard key={key} card={card}></TourCard>
                                ))}
                            </div>
                        }
                    ></TourList>
                    <TourList
                        className={"bg-[#e1f6fc]"}
                        Header={
                            <div className="flex gap-2 items-center">
                                <Image
                                    src={"/img/tour/spa-icon.webp"}
                                    width={36}
                                    height={36}
                                ></Image>
                                <p className="text-lg font-semibold -mt-1">
                                    Spa và thư giãn
                                </p>
                            </div>
                        }
                        Content={
                            <div className="flex gap-4">
                                {SPA_ACTIVITIES.map((card, key) => (
                                    <TourCard key={key} card={card}></TourCard>
                                ))}
                            </div>
                        }
                    ></TourList>
                </div>
                <div className="text-center mt-6 mb-20" >
                    <Link
                        href="/tour-list"
                        className="inline-flex gap-2 items-center px-12 py-2 border border-gray-500 rounded-md"
                    >
                        <TiThSmall className="h-5 w-5 text-primary"></TiThSmall>
                        <span className="font-semibold text-lg">
                            Xem tất cả
                        </span>
                        <MdOutlineArrowForwardIos className="h-5 w-5"></MdOutlineArrowForwardIos>
                    </Link>
                </div>
            </div>

        </>
    );
}
