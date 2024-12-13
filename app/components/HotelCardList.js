"use client";
import Image from "next/image";
import Link from "next/link";

import { FaStar } from "react-icons/fa";

import HomeSection from "./HomeSection";
import GeneralCarousel from "./GeneralCarousel";
import { HOTEL_CARD_LIST } from "@/constants";
import SectionButton from "./SectionButton";

export default function HotelCardList() {
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

    function HotelCard({ card }) {
        const oldPrice = parseInt(card.oldPrice.replace(/\./g, ""));
        const newPrice = parseInt(card.newPrice.replace(/\./g, ""));
        console.log(oldPrice, newPrice)
        const discountPercentage = Math.round(
            ((oldPrice - newPrice) / oldPrice) * 100
        );

        console.log(discountPercentage)

        return (
            <Link href="/hotel-details">
                <div className="rounded-xl border h-[350px] flex flex-col shadow-md">
                    <div className="h-[200px] rounded rounded-t-xl relative">
                        <Image
                            src={card.img}
                            width={280}
                            height={182}
                            className="w-full h-full object-cover rounded-t-xl"
                            alt={card.title}
                        ></Image>
                        <div className="absolute left-0 bottom-5 flex">
                            <div className="pr-1 py-1 pl-2 text-xs text-white bg-orange_primary font-semibold">
                                Tiết kiệm {discountPercentage} %
                            </div>
                            <div className="border-x-[12px] border-y-[12px] border-y-orange_primary border-l-orange_primary border-r-transparent"></div>
                        </div>
                    </div>
                    <div className="px-4 py-2 flex flex-col flex-1">
                        <h3 className="text-md font-semibold pr-1">
                            {card.title}
                        </h3>
                        <div className="flex gap-1 text-yellow-400">
                            {Array(card.numStar)
                                .fill(1)
                                .map((_, index) => (
                                    <FaStar key={index}></FaStar>
                                ))}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 mt-1">
                            <span className="px-2 inline-flex items-baseline text-white bg-blue-500 rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm">
                                <span className="text-lg inline-block align-baseline">
                                    {card.rating}
                                </span>
                                <span>/5</span>
                            </span>
                            <span className="text-blue-500 font-semibold">
                                {card.review}
                            </span>
                            <span>{card.numReview} Bình luận</span>
                        </div>
                        <p className="text-gray-600 line-through mt-auto">
                            {card.oldPrice}
                        </p>
                        <p className="text-lg text-orange-500 font-semibold">
                            {card.newPrice}
                        </p>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <HomeSection
            sectionHeader={"Đa dạng sự lựa chọn khách sạn"}
            icon={
                <Image src={"/icons/hotel.webp"} width={28} height={28} alt="hotel-icon"></Image>
            }
        >
            <GeneralCarousel responsive={responsive}>
                {HOTEL_CARD_LIST.map((card, key) => (
                    <HotelCard card={card} key={key}></HotelCard>
                ))}
            </GeneralCarousel>
            <div className="text-center mt-6">
                <SectionButton href={"/hotel"} text="Đặt khách sạn ngay"></SectionButton>
            </div>
        </HomeSection>
    );
}
