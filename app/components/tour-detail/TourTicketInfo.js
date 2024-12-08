import {
    CHANGE_TICKET_WAY,
    CHILDREN_POLICIES,
    EXCLUDED_SERVICES,
    INCLUDED_SERVICES,
} from "@/constants/tour-detail";
import { MdOutlineCalendarMonth } from "react-icons/md";
export default function TourTicketInfo() {
    return (
        <div>
            <div className="font-semibold border-y-2 py-3 px-6">
                <p className="text-xl font-bold">Tổng quan</p>
                <div>
                    <div>
                        <p className="font-bold pl-3 text-[15px] mt-2">
                            Giá vé đã bao gồm
                        </p>
                        <ul className="pl-8 flex flex-col gap-[6px] mt-2">
                            {INCLUDED_SERVICES.map((service, key) => (
                                <li
                                    key={key}
                                    className="flex items-baseline gap-2 font-semibold "
                                >
                                    <span className="dot"></span>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold pl-2 text-[15px] mt-2">
                            Giá vé không bao gồm
                        </p>
                        <ul className="pl-6 flex flex-col gap-[6px] mt-2">
                            {EXCLUDED_SERVICES.map((service, key) => (
                                <li
                                    key={key}
                                    className="flex items-baseline gap-2 font-semibold "
                                >
                                    <span className="dot"></span>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="font-semibold mt-2 py-3 border-b-2 px-6">
                <p className="text-xl font-bold">Hiệu lực của voucher</p>
                <div className="flex gap-2 items-center mt-2 text-[#d99800]">
                    <MdOutlineCalendarMonth className="w-6 h-6"></MdOutlineCalendarMonth>
                    <p className="">Sử dụng vào ngày đã chọn</p>
                </div>
            </div>
            <div className="font-semibold py-3 px-6">
                <p className="text-xl font-bold">Phương thức quy đổi</p>
                <div className="mt-3 border-dashed border-t-2 py-3">
                    <p className="text-xl">Cách đổi phiếu</p>
                    <ul className="pl-6 flex flex-col gap-[6px] mt-2">
                        {CHANGE_TICKET_WAY.map((way, key) => (
                            <li
                                key={key}
                                className="flex items-baseline gap-2 font-semibold "
                            >
                                <span className="dot"></span>
                                <span>{way}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="font-semibold py-3 border-t-2 px-6">
                <div>
                    <p className="text-xl font-bold">Chính sách đổi lịch</p>
                    <div className="flex items-baseline gap-2 font-semibold mt-2 pl-6">
                        <span className="dot"></span>
                        <span>Đặt chỗ này không thể thay đổi lịch</span>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="text-xl font-bold">Chính sách hoàn tiền</p>
                    <div className="flex items-baseline gap-2 font-semibold mt-2 pl-6">
                        <span className="dot"></span>
                        <span>Đặt chỗ này không được hoàn tiền.</span>
                    </div>
                </div>
            </div>
            <div className="font-semibold py-3 border-t-2 px-6">
                <p className="text-xl font-bold">Điều khoản & Điều kiện</p>
                <div>
                    <div>
                        <p className="font-bold pl-3 text-[15px] mt-2">
                            Thông tin chung
                        </p>
                        <p className="font-semibold pl-3 text-[15px] mt-2">
                            [Chính sách trẻ em]
                        </p>
                        <ul className="pl-8 flex flex-col gap-[6px] mt-2">
                            {CHILDREN_POLICIES.map((policy, key) => (
                                <li
                                    key={key}
                                    className="flex items-baseline gap-2 font-semibold "
                                >
                                    <span className="dot"></span>
                                    <span>{policy}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
