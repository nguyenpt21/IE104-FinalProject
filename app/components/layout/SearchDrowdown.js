"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

import { DESTINATIONS_BY_CITIES, TOP_DESTINATIONS } from "@/constants";

function DropdownRight({ children, first }) {
    return (
        <div
            className={`absolute right-0 top-0 bottom-0 left-[230px] px-6 py-4 overflow-auto`}
        >
            {!first && (
                <p className="font-semibold text-inherit">
                    Chọn quốc gia hay điểm đến
                </p>
            )}
            {children}
        </div>
    );
}

export default function SearchDropdown() {
    const [hoveredIndex, setHoveredIndex] = useState(TOP_DESTINATIONS.id);

    return (
        <div className="absolute pt-1">
            <div className="min-h-[406px] w-[860px] bg-white rounded-xl relative overflow-hidden border border-blue-500 shadow">
                <div className="w-[230px]">
                    <ul className="border-r ">
                        <li
                            className={`cursor-pointer ${
                                hoveredIndex === TOP_DESTINATIONS.id
                                    ? "bg-blue-400 text-white"
                                    : ""
                            }`}
                            key={TOP_DESTINATIONS.id}
                            onMouseEnter={() =>
                                setHoveredIndex(TOP_DESTINATIONS.id)
                            }
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="flex flex-col pl-6 justify-center min-h-[58px]">
                                <p className="uppercase font-semibold">
                                    {TOP_DESTINATIONS.title}
                                </p>
                            </div>
                            {hoveredIndex === TOP_DESTINATIONS.id && (
                                <DropdownRight first className="hidden">
                                    <ul className="grid grid-cols-4 gap-4">
                                        {TOP_DESTINATIONS.destinations.map(
                                            (destination, key) => (
                                                <li key={key}>
                                                    <Link href="/">
                                                        <div className="relative rounded-md overflow-hidden">
                                                            <Image
                                                                src={
                                                                    destination.img
                                                                }
                                                                width={130}
                                                                height={74}
                                                                className="rounded-md object-cover w-full"
                                                            ></Image>
                                                            <div className="absolute bottom-0 w-full font-normal bg-gradient-to-t from-[#2f2f2f] to-transparent text-white p-1">
                                                                <p className="text-sm text-center">
                                                                    {
                                                                        destination.label
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </DropdownRight>
                            )}
                        </li>
                        {DESTINATIONS_BY_CITIES.map((row) => (
                            <li
                                key={row.id}
                                className="cursor-pointer hover:bg-blue-400 group pr-4"
                                onMouseEnter={() => setHoveredIndex(row.id)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="flex flex-col min-h-[58px] justify-center pl-6 font-semibold">
                                    <h3 className="group-hover:text-white transition-colors">
                                        {row.title}
                                    </h3>
                                    <div className="flex gap-2 text-gray-400 group-hover:text-white ml-2 transition-colors">
                                        {row.subtitles.map((subtitle, key) => (
                                            <h4 key={key}>{subtitle}</h4>
                                        ))}
                                    </div>
                                </div>

                                {hoveredIndex === row.id && (
                                    <DropdownRight>
                                        <div className="mt-6 w-full">
                                            {row.destinations.map(
                                                (destination, key) => (
                                                    <div
                                                        key={key}
                                                        className="flex gap-6 w-full"
                                                    >
                                                        <div className="w-[26%] shrink-0">
                                                            <Link
                                                                href="/"
                                                                className="hover:text-blue-600 transition-colors"
                                                            >
                                                                {
                                                                    destination.country
                                                                }
                                                            </Link>
                                                        </div>
                                                        <div className="flex flex-wrap ">
                                                            {destination.cities.map(
                                                                (city, key) => (
                                                                    <Link
                                                                        href="/"
                                                                        key={
                                                                            key
                                                                        }
                                                                        className="pl-4 pb-4 hover:text-blue-600 text-gray-400"
                                                                    >
                                                                        {city}
                                                                    </Link>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </DropdownRight>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
