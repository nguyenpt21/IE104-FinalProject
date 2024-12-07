"use client";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import TourTicketInfo from "./TourTicketInfo";

import TicketSelectionModal from "./TicketSelectionModal";


export default function TourTicket({ ticket, isSmall = false }) {
    const {
        isOpen: isOpenInfo,
        onOpen: onOpenInfo,
        onOpenChange: onOpenChangeInfo,
    } = useDisclosure();
    const {
        isOpen: isOpenSelection,
        onOpen: onOpenSelection,
        onOpenChange: onOpenChangeSelection,
    } = useDisclosure();

    return (
        <div
            className={`flex items-center justify-between p-4 border rounded-lg ${
                isSmall ? "gap-[80px]" : "gap-[100px]"
            } `}
        >
            <div className="w-[65%] ">
                <h2
                    className={`text-xl font-bold ${
                        isSmall ? "line-clamp-2 " : ""
                    }`}
                >
                    {ticket.title}
                </h2>
                <p
                    className="mt-1 text-blue_medium font-semibold cursor-pointer"
                    onClick={onOpenInfo}
                >
                    Xem thêm
                </p>
                <Modal
                    isOpen={isOpenInfo}
                    onOpenChange={onOpenChangeInfo}
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
                        <ModalHeader>{ticket.title}</ModalHeader>
                        <ModalBody>
                            <div className="flex justify-between items-center sticky top-0 -mt-[2px] bg-white px-6 border-t-2 pt-2 border-dashed">
                                <span className="text-lg text-[#fd5d1c] font-bold">
                                    {ticket.price}
                                </span>
                                <button
                                    href="/tour-ticket"
                                    className="bg-blue_medium text-white rounded-lg py-2 px-3"
                                    onClick={onOpenChangeSelection}
                                >
                                    Chọn vé
                                </button>
                            </div>
                            <TourTicketInfo></TourTicketInfo>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>
            <div className="flex-1 flex flex-col gap-5 font-semibold">
                <span className="text-lg text-[#fd5d1c]">{ticket.price}</span>
                <button
                    onClick={onOpenSelection}
                    className="bg-blue_medium text-white rounded-lg py-2"
                >
                    Chọn vé
                </button>
            </div>
            <TicketSelectionModal isOpen={isOpenSelection} onOpenChange={onOpenChangeSelection}></TicketSelectionModal>
        </div>
    );
}
