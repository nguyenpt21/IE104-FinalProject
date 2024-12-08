"use client";
import { TOUR_HIGHLIGHTED_INFORMATION } from "@/constants/tour-detail";
import { BsQuestionCircleFill } from "react-icons/bs";
import { RiFileList3Fill } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { FaPhoneFlip } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
export default function TourGeneralInformarion() {
    const {
        isOpen: isOpenTop,
        onOpen: onOpenTop,
        onOpenChange: onOpenChangeTop,
    } = useDisclosure();

    const {
        isOpen: isOpenBottom,
        onOpen: onOpenBottom,
        onOpenChange: onOpenChangeBottom,
    } = useDisclosure();

    return (
        <div className="w-[60%] p-3 bg-[#f7f9fa] rounded-lg font-semibold flex flex-col gap-2">
            <div className="flex gap-2">
                <BsQuestionCircleFill className="text-blue_medium w-6 h-6 mt-[2px] flex-shrink-0"></BsQuestionCircleFill>
                <div className="flex flex-col text-blue_medium ">
                    <div className="relative">
                        <h3 className="">Bạn sẽ trải nghiệm</h3>
                        <ul className="text-gray-800 space-y-1">
                            {TOUR_HIGHLIGHTED_INFORMATION.slice(0, 2).map(
                                (info, key) => (
                                    <li
                                        key={key}
                                        className="flex gap-2 items-baseline"
                                    >
                                        <span className="dot"></span>
                                        {info}
                                    </li>
                                )
                            )}
                        </ul>
                        <div className="absolute bottom-5 left-0 w-full h-5 bg-gradient-to-t from-white to-transparent blur pointer-events-none"></div>
                        <p className="cursor-pointer text-sm -mt-1" onClick={onOpenTop}>
                            Đọc thêm
                        </p>
                        <Modal
                            isOpen={isOpenTop}
                            onOpenChange={onOpenChangeTop}
                            scrollBehavior="inside"
                            size="3xl"
                            className={{
                                base: "bg-white rounded-lg",
                            }}
                            backdrop="opaque"
                        >
                            <ModalContent>
                                {(onclose) => (
                                    <>
                                        <ModalHeader>
                                            Bạn sẽ trải nghiệm
                                        </ModalHeader>
                                        <ModalBody>
                                            {TOUR_HIGHLIGHTED_INFORMATION.map(
                                                (info, key) => (
                                                    <li
                                                        key={key}
                                                        className="flex items-baseline gap-2"
                                                    >
                                                        <span className="dot"></span>
                                                        <span className="text-base">
                                                            {info}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ModalBody>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <RiFileList3Fill className="w-6 h-6 text-blue_medium"></RiFileList3Fill>
                <p
                    className="text-blue_medium cursor-pointer"
                    onClick={onOpenBottom}
                >
                    Thông tin liên hệ, Tiện ích, Dịch vụ ngôn ngữ và nhiều thông
                    tin khác
                </p>
                <Modal
                    isOpen={isOpenBottom}
                    onOpenChange={onOpenChangeBottom}
                    scrollBehavior="inside"
                    size="2xl"
                    className={{
                        base: "bg-white rounded-lg",
                        body: "",
                    }}
                    backdrop="opaque"
                >
                    <ModalContent>
                        {(oncloseBottom) => (
                            <>
                                <ModalHeader>Thêm thông tin</ModalHeader>
                                <ModalBody>
                                    <div className="text-base py-4  border-t-1 border-t-gray-300">
                                        <div className="flex gap-3">
                                            <GrLanguage className="w-6 h-6 text-gray-500 mt-1"></GrLanguage>
                                            <div>
                                                <h3 className="text-lg font-bold">
                                                    Dịch vụ ngôn ngữ
                                                </h3>
                                                <ul className="mt-3">
                                                    <li>Tiếng Việt</li>
                                                    <li>Tiếng Anh</li>
                                                    <li>Tiếng Trung</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-base py-4  border-t-1 border-t-gray-300">
                                        <div className="flex gap-3">
                                            <AiFillLike className="w-6 h-6 text-gray-500  flex-shrink-0"></AiFillLike>
                                            <div>
                                                <h3 className="text-lg font-bold">
                                                    Phù hợp với
                                                </h3>
                                                <p>
                                                    Thời gian rảnh, Đam mê phiêu
                                                    lưu, Bữa trưa, Ẩm thực châu
                                                    Á
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-base py-4  border-t-1 border-t-gray-300">
                                        <div className="flex gap-3">
                                            <FaPhoneFlip className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0"></FaPhoneFlip>
                                            <div>
                                                <h3 className="text-lg font-bold">
                                                    Liên hệ đối tác:
                                                </h3>
                                                <p>+84922411088</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-base py-4  border-t-1 border-t-gray-300">
                                        <div className="flex gap-3">
                                            <GrNotes className="w-6 h-6 text-gray-500 mt-2 flex-shrink-0"></GrNotes>
                                            <div>
                                                <h3 className="text-lg font-bold">
                                                    Thông tin thêm
                                                </h3>
                                                <ul>
                                                    <li className="flex items-baseline gap-2">
                                                        <span className="dot"></span>
                                                        Vui lòng cung cấp địa
                                                        chỉ đón và/hoặc thông
                                                        báo trong phần Yêu cầu
                                                        đặc biệt của phần Thông
                                                        tin đặt chỗ thêm tại
                                                        trang thanh toán nếu bạn
                                                        có bất kỳ yêu cầu nào
                                                        khác.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
}
