import Link from "next/link";
import { BsSearch } from "react-icons/bs";

import Navbar from "./Navbar";

import SearchBar from "../SearchBar";

export default function MainHeader() {

    return (
        <header className="top-0 sticky bg-white border-b z-50">
            <div className="container mx-auto flex items-center py-2">
                <Link href="/">
                    <div className="flex items-center">
                        <h1 className="ml-2 font-bold text-xl">vagabond</h1>
                    </div>
                </Link>
                <SearchBar
                    className="w-[360px] mx-4 rounded-full px-4 h-10 border"
                    Icon={<BsSearch className="w-[18px] h-[18px]"></BsSearch>}
                    placeholder="Tìm theo điểm đến, hoạt động"
                ></SearchBar>

                <nav className="flex space-x-4 items-center ml-auto font-semibold">
                    <button href="/" className="hover:text-primary transition-colors">
                        Xem gần đây
                    </button>
                    <Link href="/sign-up" className="hover:text-primary transition-colors">
                        Đăng ký
                    </Link>

                    <button className="bg-primary text-white rounded-full px-4 py-2 hover:bg-primary">
                        <Link href="/sign-in">Đăng nhập</Link>
                    </button>
                </nav>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="bg-white">
                <div className="container mx-auto py-1">
                    <Navbar></Navbar>
                </div>
            </div>
        </header>
    );
}
