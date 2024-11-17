import React from "react";
import Image from "next/image";

import Banner from "@/app/components/contact/Banner";
import Link from "next/link";
import { CONTACT_INFO } from "@/constants/contact";
import ContactItem from "@/app/components/contact/CtItem";
import ContactForm from "@/app/components/contact/CtForm";
import GetInTouch from "@/app/components/contact/GetInTouch";
import Heading from "@/app/components/Heading";
import Accod from "@/app/components/contact/Accod";

export default function Contact() {
    return (
        <div className="">
            {/* Banner */}
            <Banner />

            {/* Thông tin liên hệ */}
            <div className="mx-36 my-5">
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
            <div className="mx-28 my-10">
                <div className="grid grid-cols-two_col_custom">
                    <GetInTouch></GetInTouch>
                    <ContactForm></ContactForm>
                </div>
            </div>

            {/* Câu hỏi thường gặp */}
            <Heading title="Các câu hỏi thường gặp" />
            <div className="grid grid-cols-2 gap-2 mx-10">
                <Accod />
                <Accod />
            </div>
        </div>
    );
}
