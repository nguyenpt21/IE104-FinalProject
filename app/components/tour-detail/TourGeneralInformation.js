"use client"
import { TOUR_HIGHLIGHTED_INFORMATION } from "@/constants/tour-detail";
import { BsQuestionCircleFill } from "react-icons/bs";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
export default function TourGeneralInformarion() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="w-[60%] p-3 border rounded-lg font-semibold flex gap-2">
            <BsQuestionCircleFill className="text-primary w-5 h-5 mt-[2px] flex-shrink-0"></BsQuestionCircleFill>
            <div className="flex flex-col text-primary ">
                <h3 className="text-base">Bạn sẽ trải nghiệm</h3>
                <ul className="text-gray-800 text-sm space-y-1">
                    {TOUR_HIGHLIGHTED_INFORMATION.slice(0, 2).map(
                        (info, key) => (
                            <li key={key} className="flex gap-2 items-baseline">
                                <span className="dot"></span>
                                {info}
                            </li>
                        )
                    )}
                </ul>
                <p className="cursor-pointer" onClick={onOpen}>
                    Đọc thêm
                </p>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
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
                            <ModalHeader>Bạn sẽ trải nghiệm</ModalHeader>
                            <ModalBody>
                                {TOUR_HIGHLIGHTED_INFORMATION.map((info, key) => (
                                    <li key={key} className="flex items-baseline gap-2">
                                        <span className="dot">
                                        </span>
                                        {info}
                                    </li>
                                ))}
                            </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
}
