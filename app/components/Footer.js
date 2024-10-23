import Link from "next/link";
import Image from "next/image";

import { FOOTER_SOCIALS, FOOTER_LINKS, FOOTER_PAYMENT } from "@/constants";
export default function Footer() {
    return (
        <footer className="bg-blue-950 pt-14 mb-10">
            <div className="container mx-auto grid grid-cols-footer">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <span className="ml-2 font-bold text-2xl text-white">
                            vagabond
                        </span>
                    </div>
                    <div className="flex gap-6 items-center mt-7">
                        <div>
                            <Image
                                src="/img/footer/certificate-2.webp"
                                width={73}
                                height={35}
                            ></Image>
                        </div>
                        <Link href="/">
                            <Image
                                src="/img/footer/certificate-3.webp"
                                width={112}
                                height={38}
                            ></Image>
                        </Link>
                    </div>
                    <FooterColumn
                        title={FOOTER_SOCIALS.title}
                        variant={"mt-10"}
                    >
                        <ul className="mt-4 flex flex-col gap-2">
                            {FOOTER_SOCIALS.links.map((link) => (
                                <li key={link}>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2"
                                    >
                                        <div
                                            className={`w-6 h-6 flex items-center justify-center bg-[${link.bg}]`}
                                        >
                                            <Image
                                                src={link.img}
                                                width={20}
                                                height={20}
                                            ></Image>
                                        </div>
                                        <span className="text-white hover:underline">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FooterColumn>
                </div>
                {FOOTER_LINKS.map((column, key) => (
                    <FooterColumn title={column.title} key={key}>
                        <ul className="mt-4 flex flex-col gap-2">
                            {column.links.map((link, key) => (
                                <li key={key} className="text-white">
                                    <Link href="/" className="hover:underline">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FooterColumn>
                ))}

                <FooterColumn title={FOOTER_PAYMENT.title}>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {FOOTER_PAYMENT.payments.map((payment) => (
                            <div
                                key={payment}
                                className="bg-white w-[80px] h-14 flex items-center justify-center rounded-md"
                            >
                                <Image
                                    src={payment}
                                    width={59}
                                    height={21}
                                ></Image>
                            </div>
                        ))}
                    </div>
                </FooterColumn>
            </div>
            <div className="w-full h-[1px] mt-[80px] bg-gray-500"></div>
            <div className="pt-6 pb-4">
                <p className="text-white text-center">Copyright © 2024 VagaBond. All rights reserved</p>
            </div>
        </footer>
    );

    function FooterColumn({ title, children, variant }) {
        return (
            <div className={`${variant}`}>
                <h4 className="font-bold text-white text-base">{title}</h4>
                {children}
            </div>
        );
    }
}
