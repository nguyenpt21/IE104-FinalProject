"use client";
import Image from "next/image";
import Link from "next/link";

import { IoIosStar } from "react-icons/io";

import HomeSection from "./HomeSection";
import GeneralCarousel from "./GeneralCarousel";
import { ACTIVITY_CARD_LIST } from "@/constants";
import SectionButton from "./SectionButton";

export default function ActivityCardList() {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024,
            },
            items: 4,
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0,
            },
            items: 2,
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464,
            },
            items: 3,
        },
    };

    function ActivityCard({ card }) {
        return (
            <Link href="/tour-detail">
                <div className="rounded-xl border h-[380px] flex flex-col shadow-md overflow-hidden">
                    <div className="h-[200px] relative flex-1">
                        <Image
                            src={card.img}
                            width={280}
                            height={182}
                            className="w-full h-full object-cover rounded-t-xl"
                            alt={card.title}
                        ></Image>
                        {Object.keys(card.discount).length > 0 && (
                            <div className="absolute top-0 left-0 ">
                                <div className="inline-flex overflow-hidden text-xs font-semibold h-full">
                                    <span className="px-2 py-1 m-0 bg-white ">
                                        {card.discount.type}
                                    </span>
                                    <span className="bg-orange_primary h-full m-0 px-2 py-1 text-white">
                                        {card.discount.how}
                                    </span>
                                    <div className="border-x-[12px] border-y-[12px] border-y-orange_primary border-l-orange_primary border-r-transparent"></div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="px-4 py-2 flex flex-col flex-1">
                        <div className="text-gray-400">
                            {card.type} - {card.location}
                        </div>
                        <h3 className="line-clamp-2 text-md font-semibold pr-1">
                            {card.title}
                        </h3>
                        <div className="flex gap-2">
                            {card.tags.map((tag, key) => (
                                <span
                                    key={key}
                                    className="text-[12px] px-1 bg-gray-100 text-gray-400 font-light"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-[6px] text-gray-400 flex gap-2">
                            <div className="flex gap-1">
                                <div className="text-blue-600 flex items-center gap-1">
                                    <IoIosStar></IoIosStar>
                                    {card.rating}
                                </div>
                                <span>({card.reviews})</span>
                            </div>
                            - <span>{card.bookings}</span>
                        </div>
                        <p className="mt-auto text-lg font-semibold text-orange_primary">
                            {card.price}
                        </p>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <HomeSection
            sectionHeader={"Các hoạt động hàng đầu"}
            icon={
                <Image
                    src="/icons/activity.webp"
                    width={28}
                    height={28}
                    alt=""
                ></Image>
            }
        >
            <GeneralCarousel responsive={responsive}>
                {ACTIVITY_CARD_LIST.map((card, key) => (
                    <ActivityCard card={card} key={key}></ActivityCard>
                ))}
            </GeneralCarousel>
            <div className="text-center mt-6">
                <SectionButton href={"/tour"} text="Xem tất cả"></SectionButton>
            </div>
        </HomeSection>
    );
}
