import React from "react";
import Heading from "@/app/components/Heading";
import Image from "next/image";
import {WHY_CHOOSE, ABOUT, TEAM} from "@/constants/about";
import Line from "@/app/components/about/LineInAbout"
import ScrollRevealEffect from '@/app/components/about/ScrollRevealEff';
import ProfileCard from '@/app/components/about/ProfileCard';


export default function About() {
    return (
        <>
            <ScrollRevealEffect />

            {/* section 1 */}
            <Heading title="Về chúng tôi" />
            <div className="flex items-center justify-between px-10 mb-10">
                <div className="w-1/2 pr-10 flex items-center justify-end">
                    <Image
                        src={WHY_CHOOSE.picture}
                        width={550}
                        height={400}
                        className="filter contrast-125 saturate-150 brightness-75"
                    />
                </div>

                <div className="w-1/2 pr-28 pl-10">
                    <p className="text-2xl font-bold my-3">
                        {WHY_CHOOSE.title}
                    </p>
                    <p className="text-base text-gray-400">{WHY_CHOOSE.desc}</p>
                    <ul>
                        {WHY_CHOOSE.reason.map((row, key) => (
                            <li
                                key={key}
                                className="my-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg p-4 overflow-hidden"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="pl-5">
                                        <Image
                                            src={row.img}
                                            height={30}
                                            width={30}
                                            alt = ''
                                        />
                                    </div>

                                    <span className="text-xl font-medium">
                                        {row.label}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* section 2 */}
            <div className="mx-36 grid grid-cols-three_col_custom">
                <div className="mx-auto flex flex-col w-96">
                    <div className="px-5 mb-16 left-element">
                        <p className="text-2xl font-bold py-5">
                            {ABOUT.text[0].title}
                        </p>
                        <p className="pl-3 leading-6 text-base">
                            {ABOUT.text[0].desc}
                        </p>
                    </div>

                    <div className="px-5 my-16 left-element">
                        <Image
                            src={ABOUT.img[1]}
                            width={400}
                            height={200}
                            className="rounded-xl"
                        />
                    </div>

                    <div className="px-5 left-element">
                        <p className="text-2xl font-bold py-5">
                            {ABOUT.text[2].title}
                        </p>
                        <p className="pl-3 leading-6 text-base">
                            {ABOUT.text[2].desc}
                        </p>
                    </div>
                </div>

                <Line />

                <div className="mx-auto flex flex-col w-96">
                    <div className="px-5 mb-8 right-element">
                        <Image
                            src={ABOUT.img[0]}
                            height={200}
                            width={400}
                            className="rounded-xl"
                        />
                    </div>

                    <div className="px-5 my-16 right-element text-right">
                        <p className="text-2xl font-bold py-5">
                            {ABOUT.text[1].title}
                        </p>
                        <p className="pr-3 text-base">{ABOUT.text[1].desc}</p>
                    </div>

                    <div className="px-5 mt-16 right-element">
                        <Image
                            src={ABOUT.img[2]}
                            height={200}
                            width={400}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
            {/* section 3 */}
            <Heading title="Team & Founder" />
            <div className="mx-36 m-20">
                <div className="grid grid-cols-3">
                    {TEAM.map((row, key) => (
                        <div key={key}>
                            <ProfileCard
                                img={row.img}
                                name={row.name}
                                role={row.role}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}