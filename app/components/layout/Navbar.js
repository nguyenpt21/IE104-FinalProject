"use client";

import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import Dropdown from "./DropDown";
import SearchDropdown from "./SearchDrowdown";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";

export default function Navbar() {
    function NavItem({ icon, children, href, Dropdown, notLink }) {
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            if (href) {
                window.location.href = href;
            }
        };

        return (
            <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onClick={handleClick}
            >
                <div className="flex gap-2 items-center font-semibold px-3 py-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    {icon && <GrLocation></GrLocation>}
                    {notLink ? children : <Link href={href}>{children}</Link>}
                </div>
                {open && Dropdown}
            </div>
        );
    }

    return (
        <nav className="flex items-center ">
            <NavItem icon notLink Dropdown={<SearchDropdown></SearchDropdown>}>
                Địa điểm muốn đến
            </NavItem>

            {NAV_LINKS.map((nav, key) => (

                <NavItem
                    key={key}
                    href={nav.href}
                    Dropdown={<Dropdown data={nav.services} href={nav.href}></Dropdown>}
                >
                    {nav.title}
                </NavItem>
            ))}
        </nav>
    );
}
