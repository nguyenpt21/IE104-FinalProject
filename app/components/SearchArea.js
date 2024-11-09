
import SearchBar from "./SearchBar";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

export default function SearchArea() {
    const RECOMMENDED_DESTINATIONS = [
        "Thái Lan",
        "Singapore",
        "Phú Quốc",
        "The Amazing Bay",
        "Đà Lạt",
        "Suối tiên",
        "Đà Nẵng",
        "Phú Quốc",
        "Phuket",
        "Nhật Bản",
    ];

    return (
        <div className="w-[940px] px-10 py-6 bg-white shadow-custom mx-auto mt-12 rounded-xl">
            <SearchBar
                placeholder="Bạn có ý tưởng gì cho chuyến đi không?"
                className="border rounded-lg h-14 pl-4 pr-1 py-1 text-lg hover:border-blue-400 caret-primary"
                Icon={<BsSearch className="text-gray-400 w-5 h-5"></BsSearch>}
                Button={
                    <button className="h-full w-[120px] text-lg bg-blue-700 text-white rounded-lg">
                        Khám phá
                    </button>
                }
            ></SearchBar>
            <div className="flex flex-wrap gap-2 items-center justify-center mt-4 px-4">
                {RECOMMENDED_DESTINATIONS.map((dest, key) => (
                    <Link
                        href="/"
                        key={key}
                        className="px-4 py-2 inline-block border rounded-full"
                    >
                        {dest}
                    </Link>
                ))}
            </div>
        </div>
    );
}
