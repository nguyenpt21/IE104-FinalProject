import { TOUR_TICKETS } from "@/constants/tour-detail";
import TourTicket from "./TourTicket";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import CalendarSelection from "./CalendarSelection";

export default function TourTicketSection() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="mt-4 ">
            <div className="flex flex-col gap-4">
                {TOUR_TICKETS.slice(0, 5).map((ticket, key) => (
                    <TourTicket ticket={ticket} key={key}></TourTicket>
                ))}
            </div>
            <div className="mt-3 text-center ">
                <button
                    onClick={onOpen}
                    className="text-lg shadow-md font-bold text-blue_medium bg-[#f7f9fa] py-2 px-3 rounded-md"
                >
                    XEM TẤT CẢ
                </button>
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                size="3xl"
                classNames={{
                    base: "bg-white rounded-lg",
                    body: "py-4"
                }}
                backdrop="opaque"
            >
                <ModalContent>
                    <ModalHeader>Tất cả vé</ModalHeader>
                    <ModalBody>
                        <div>
                            <CalendarSelection isSmall></CalendarSelection>
                        </div>
                        {TOUR_TICKETS.map((ticket, key) => (
                            <TourTicket
                                key={key}
                                ticket={ticket}
                                isSmall
                            ></TourTicket>
                        ))}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}
