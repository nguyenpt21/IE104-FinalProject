import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import CalendarSelection from "./CalendarSelection";
import Image from "next/image";
import TourTicketInfo from "./TourTicketInfo";
export default function TicketSelectionModal({ isOpen, onOpenChange }) {
    const {
        isOpen: isOpenTicket,
        onOpen: onOpenTicket,
        onOpenChange: onOpenChangeTicket,
    } = useDisclosure();

    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const adultPrice = 1070927;
    const childPrice = 803148;
    const totalPrice = adultCount * adultPrice + childCount * childPrice;
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            hideCloseButton={true}
            scrollBehavior="inside"
            size="full"
            classNames={{
                base: "bg-white rounded-lg",
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody>
                            <div className="">
                                <div
                                    className="flex gap-3 items-center cursor-pointer"
                                    onClick={onClose}
                                >
                                    <FaArrowLeft></FaArrowLeft>
                                    <p className="text-lg font-semibold">
                                        Tìm phiếu du lịch khác
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between gap-5">
                                <div>
                                    <div className="border rounded-lg overflow-hidden">
                                        <Image
                                            src={
                                                "/img/tour-detail/banner/banner-1.webp"
                                            }
                                            width={276}
                                            height={166}
                                            className="w-full object-cover"
                                        ></Image>
                                        <div className="p-3">
                                            <h2 className="font-semibold ">
                                                Tour Ghép Đoàn (kèm Hướng dẫn
                                                viên tiếng Anh/tiếng Việt)
                                            </h2>
                                            <div className="flex flex-col gap-2 my-4">
                                                <div className="bg-gray-100 p-1 rounded-lg font-semibold">
                                                    Không thể đổi lịch
                                                </div>
                                                <div className="bg-gray-100 p-1 rounded-lg font-semibold">
                                                    Không thể hoàn tiền
                                                </div>
                                            </div>
                                            <div className="pt-2 text-center border-t-2 border-dashed">
                                                <button
                                                    onClick={onOpenTicket}
                                                    className="text-base shadow-sm font-bold text-blue_medium bg-[#f7f9fa] py-2 px-3 rounded-md"
                                                >
                                                    Xem thông tin vé
                                                </button>
                                                <Modal
                                                    isOpen={isOpenTicket}
                                                    onOpenChange={
                                                        onOpenChangeTicket
                                                    }
                                                    scrollBehavior="inside"
                                                    size="3xl"
                                                    classNames={{
                                                        base: "bg-white rounded-lg",
                                                        body: "p-0",
                                                        header: "pr-8",
                                                    }}
                                                    backdrop="opaque"
                                                >
                                                    <ModalContent>
                                                        <ModalHeader>
                                                            Tour Ghép Đoàn (kèm
                                                            Hướng dẫn viên tiếng
                                                            Anh/tiếng Việt)
                                                        </ModalHeader>
                                                        <ModalBody>
                                                            <div className="flex justify-between items-center sticky top-0 -mt-[2px] bg-white px-6 border-t-2 pt-2 border-dashed">
                                                                <span className="text-lg text-[#fd5d1c] font-bold">
                                                                    1.071.385
                                                                    VND
                                                                </span>
                                                            </div>
                                                            <TourTicketInfo></TourTicketInfo>
                                                        </ModalBody>
                                                    </ModalContent>
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[75%]">
                                    <div>
                                        <CalendarSelection
                                            isSmall hasDayDisplay
                                        ></CalendarSelection>
                                    </div>
                                    <div className="p-6 mx-auto bg-white rounded-lg border border-gray-200 shadow-md mt-4">
                                        <div className="pb-3 border-b-1">
                                            <h2 className="text-xl font-bold">
                                                Nguời lớn
                                            </h2>
                                            <p className="text-gray-600 text-sm">
                                                (Từ 8 tuổi trở lên, cao trên
                                                130cm)
                                            </p>
                                            <div className="flex items-center justify-between mt-4">
                                                <p className="text-xl font-bold">
                                                    1.070.927 VND
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-300"
                                                        onClick={() =>
                                                            setAdultCount(
                                                                Math.max(
                                                                    0,
                                                                    adultCount -
                                                                        1
                                                                )
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                    <div className="px-4 py-2 border rounded-md">
                                                        {adultCount}
                                                    </div>
                                                    <button
                                                        className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-300"
                                                        onClick={() =>
                                                            setAdultCount(
                                                                adultCount + 1
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3 mt-3">
                                            <h2 className="text-xl font-bold">
                                                Trẻ em
                                            </h2>
                                            <p className="text-gray-600 text-sm">
                                                (Từ 4-7 tuổi, cao từ 100-130 cm)
                                            </p>
                                            <div className="flex items-center justify-between mt-4">
                                                <p className="text-xl font-bold">
                                                    803.148 VND
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-300"
                                                        onClick={() =>
                                                            setChildCount(
                                                                Math.max(
                                                                    0,
                                                                    childCount -
                                                                        1
                                                                )
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                    <div className="px-4 py-2 border rounded-md">
                                                        {childCount}
                                                    </div>
                                                    <button
                                                        className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-300"
                                                        onClick={() =>
                                                            setChildCount(
                                                                childCount + 1
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h2 className="text-lg font-bold">
                                                Tổng giá tiền
                                            </h2>
                                            <div className="flex items-center justify-between">
                                                <p className="text-2xl font-bold text-[#fd5d1c] mt-2">
                                                    {totalPrice.toLocaleString()}{" "}
                                                    VND
                                                </p>
                                                <button
                                                    className={`mt-4 px-6 py-3 font-semibold rounded ${
                                                        totalPrice > 0
                                                            ? "bg-[#fd5d1c] text-white "
                                                            : "bg-gray-200 text-gray-400 pointer-events-none"
                                                    }`}
                                                    onClick={onClose}
                                                >
                                                    Đặt ngay
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
