import Link from "next/link";
import { BsSearch } from "react-icons/bs";
export default function MainHeader() {
    return (
        <header className="border-b top-0 sticky bg-white">
            <div className="container mx-auto flex items-center p-3">
                <div className="flex items-center">
                    <h1 className="ml-2 font-bold text-xl">vagabond</h1>
                </div>

                <div className="w-[360px] mx-4 flex items-center gap-1 rounded-full px-4 h-10 border">
                    <button>
                        <BsSearch></BsSearch>
                    </button>
                    <input
                        type="text"
                        placeholder="Tìm theo điểm đến, hoạt động"
                        className="flex-1 h-full px-1 outline-none border-none bg-transparent"
                    />
                </div>

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
        </header>
    );
}
