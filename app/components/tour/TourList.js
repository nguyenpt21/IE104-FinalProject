import Link from "next/link";

import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function TourList({ className, Header, Content }) {
    return (
        <div className={`w-full p-5 rounded-2xl ${className}`}>
            <div className="flex justify-between items-center">
                {Header}
                <Link href="/">
                    <div className="flex gap-1 items-center">
                        <p className="text-base underline font-semibold">Xem tất cả</p>
                        <MdOutlineArrowForwardIos className="w-4 h-4"></MdOutlineArrowForwardIos>
                    </div>
                </Link>
            </div>
            <div className="mt-3">
                {Content}
            </div>
        </div>
    );
}
