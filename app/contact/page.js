import React from "react";
import Image from "next/image";

import Banner from "@/app/components/contact/Banner";
import Link from "next/link";
import { CONTACT_INFO } from "@/constants/contact";
import ContactItem from "@/app/components/contact/CtItem";
import ContactForm from "@/app/components/contact/CtForm";
import GetInTouch from "@/app/components/contact/GetInTouch";
import Heading from "@/app/components/contact/Heading";
import Accod from "@/app/components/contact/Accod";

export default function Contact() {
    return (
        <div className="">
            {/* Banner */}
            <Banner />

            {/* Thông tin liên hệ */}
            <div className="container mx-auto my-2">
                <div className="grid grid-cols-3">
                    {CONTACT_INFO.map((row, key) => (
                        <div key={key} className="w-[80%]">
                            <ContactItem
                                icon={row.icon}
                                title={row.title}
                                desc={row.desc}
                                info={row.info}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Form liên hệ */}
            <div className="container mx-auto my-10">
                <div className="grid grid-cols-two_col_custom">
                    <GetInTouch></GetInTouch>
                    <ContactForm></ContactForm>
                </div>
            </div>

            {/* Câu hỏi thường gặp */}
            <div className="container mx-auto">
                <Heading title="Các câu hỏi thường gặp" />
                <div className="my-5 grid grid-cols-2 gap-2">
                    <Accod />
                    <Accod />
                </div>
            </div>

            
        </div>
    );
}
