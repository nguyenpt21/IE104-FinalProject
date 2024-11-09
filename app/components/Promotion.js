"use client";

import Image from "next/image";
import Link from "next/link";

import { PROMOTIONS } from "@/constants";
import GeneralCarousel from "./GeneralCarousel";
import HomeSection from "./HomeSection";

export default function Promotion() {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024,
            },
            items: 3,
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
            items: 2,
        },
    };

    return (
        <HomeSection sectionHeader={"Ưu đãi cho bạn"}>
            <GeneralCarousel responsive={responsive}>
                {PROMOTIONS.map((promotion, index) => (
                    <Link key={index} href={promotion.link}>
                        <div
                            key={index}
                            className="h-[195px] rounded-lg"
                        >
                            <Image
                                src={promotion.img}
                                width={390}
                                height={195}
                                className="rounded-lg w-full h-full object-cover"
                                alt="promotion"
                            ></Image>
                        </div>
                    </Link>
                ))}
            </GeneralCarousel>
        </HomeSection>
    );
}
