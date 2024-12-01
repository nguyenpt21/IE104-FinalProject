import { TREND_TOUR } from "@/constants/tour-list";
import { CATE_SELECTION_DROPDOWN } from "@/constants/tour-list";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import PriceSlider from "./PriceSlider";
export default function FilterModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemClick = (item) => {
        setSelectedItems((prev) => {
            if (prev.includes(item)) {
                return prev.filter((i) => i !== item);
            } else {
                return [...prev, item];
            }
        });
    };

    function ModelContentSection({ title, children }) {
        return (
            <div>
                <div className="flex gap-2 items-center">
                    <div className="h-6 w-2 rounded-lg bg-primary"></div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div>{children}</div>
            </div>
        );
    }

    function SelectionItem({ item }) {
        return (
            <div
                className={`cursor-pointer px-2 py-2 rounded-lg ${
                    selectedItems.includes(item)
                        ? "border border-blue_medium text-blue_medium bg-white"
                        : "bg-gray-100"
                }`}
                onClick={() => handleItemClick(item)}
            >
                {item}
            </div>
        );
    }

    return (
        <>
            <button
                className="flex items-center gap-2 rounded-lg border-2 border-gray-900 px-4 py-2"
                onClick={onOpen}
            >
                <IoFilterSharp className="w-5 h-5"></IoFilterSharp>
                Lọc
            </button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                size="3xl"
                className={{
                    base: "bg-white rounded-lg"
                }}
                backdrop="opaque"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Lọc</ModalHeader>
                            <ModalBody>
                                <ModelContentSection
                                    title={"Điểm đến phổ biến"}
                                >
                                    <div className="flex gap-3 flex-wrap mt-4">
                                        {TREND_TOUR.map((tour, key) => (
                                            <SelectionItem
                                                key={key}
                                                item={tour.destination}
                                            ></SelectionItem>
                                        ))}
                                    </div>
                                </ModelContentSection>
                                <ModelContentSection title={"Danh mục"}>
                                    <div className="flex flex-col gap-4">
                                        {CATE_SELECTION_DROPDOWN.map(
                                            (cate, key) => (
                                                <div key={key}>
                                                    <h3 className="font-semibold">
                                                        {cate.cate}
                                                    </h3>
                                                    <div className="mt-2 flex flex-wrap gap-3">
                                                        {cate.list.map(
                                                            (item, key) => (
                                                                <SelectionItem
                                                                    key={key}
                                                                    item={item}
                                                                ></SelectionItem>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </ModelContentSection>
                                <ModelContentSection title={"Lọc theo giá"}>
                                    <div className="mt-4">
                                        <PriceSlider></PriceSlider>
                                    </div>
                                </ModelContentSection>
                            </ModalBody>
                            <ModalFooter>
                                <button
                                    className="underline font-semibold mr-auto"
                                    onClick={onClose}
                                >
                                    Xóa
                                </button>
                                <button
                                    className="px-4 py-2 bg-blue_medium text-white rounded-md"
                                    onClick={onClose}
                                >
                                    Xem kết quả
                                </button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
