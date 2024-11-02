import Link from "next/link";
import { BsSearch } from "react-icons/bs";

import Navbar from "./Navbar";
import SearchBar from "../SearchBar";
export default function MainHeader() {
    return (
        <header className="top-0 sticky bg-white border-b z-50">
            <div className="container mx-auto flex items-center py-3">
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
                    <button href="/" className="hover:text-blue-500">
                        Xem gần đây
                    </button>
                    <Link href="/sign-in" className="hover:text-blue-500">
                        Đăng ký
                    </Link>

                    <button className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600">
                        Đăng nhập
                    </button>
                </nav>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="bg-white">
                <div className="container mx-auto py-2">
                    <Navbar></Navbar>
                </div>
            </div>
        </header>
    );
}
