"use client";
import dayjs from "dayjs";
import { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
import DateRangePicker from "../tour-list/DateRangePicker";
import { MdOutlineCalendarMonth } from "react-icons/md";
export default function CalendarSelection({
    isSmall = false,
    hasDayDisplay = false,
}) {
    const today = dayjs();
    const days = Array.from({ length: 9 }, (_, i) => today.add(i, "day"));

    const [selectedDay, setSelectedDay] = useState(today);
    const handleSelectedDay = (day) => setSelectedDay(day);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <div className="flex gap-3 cursor-pointer overflow-x-hidden flex-nowrap">
                <div
                    onClick={onOpen}
                    className={`flex items-center justify-center border rounded-lg gap-2 bg-white shadow text-blue_medium flex-shrink-0 ${
                        isSmall ? "w-[110px] h-[76px] p-2" : "w-30 h-20 p-3"
                    }`}
                >
                    <MdOutlineCalendarMonth className="w-6 h-6"></MdOutlineCalendarMonth>
                    <span className="font-semibold">Xem lịch</span>
                </div>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    scrollBehavior="inside"
                    size="3xl"
                    backdrop="opaque"
                >
                    <ModalContent>
                        {(onclose) => (
                            <>
                                <ModalHeader>Chọn ngày</ModalHeader>
                                <ModalBody>
                                    <div className="min-h-[300px]">
                                        <DateRangePicker></DateRangePicker>
                                    </div>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center border rounded-lg ${
                            isSmall
                                ? "w-[90px] h-[76px] p-2"
                                : "w-[98px] h-20 p-3 "
                        }  bg-white shadow flex-shrink-0
                        ${
                            day.isSame(selectedDay, "day")
                                ? "border-blue_medium text-blue_medium"
                                : ""
                        }`}
                        onClick={() => handleSelectedDay(day)}
                    >
                        <span className="text-sm font-medium">
                            {index === 0
                                ? "Hôm nay"
                                : day.day() === 0
                                ? "Chủ Nhật"
                                : `Thứ ${day.day() + 1}`}
                        </span>
                        <span className="text-base font-bold">
                            {day.format("D [thg] M")}
                        </span>
                    </div>
                ))}
            </div>
            {hasDayDisplay ?? (
                <div className="mt-4 py-4 bg-[#ecf8ff] flex flex-col items-center justify-center rounded-lg">
                    <p className="font-bold text-secondary">
                        Ngày tham gia đã chọn
                    </p>
                    <p className="font-bold text-lg">
                        {selectedDay.format("D [thg] M YYYY")}
                    </p>
                </div>
            )}
        </div>
    );
}
