import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";
import { FLIGHT_REVIEW } from '@/constants/flight';
import ReviewFlightItem from '@/app/components/flight/ReviewFlightItem';

export default function ModalReview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-center my-3'>
        <button onClick={() => setIsOpen(!isOpen)} 
          className="px-4 py-2 font-medium border border-secondary text-gray-500 rounded-md hover:border-primary hover:bg-sky-100 hover:text-primary">
          Xem tất cả đánh giá
        </button>
      </div>

      <Modal 
        isOpen={isOpen} 
        onOpenChange={setIsOpen} 
        hideCloseButton={true}
        placement="top"
        size='xl'
        classNames={{
          wrapper: "items-center justify-end m-0",
          base: "sm:mx-0 sm:my-0 rounded-none",
        }}
      >
        <ModalContent className="m-0 bg-white">
          {/* header modal */}
          <ModalHeader className="flex m-0 justify-between items-center py-4 px-6">
            Tất cả đánh giá
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="px-2 py-1 text-[14px] text-gray-600 rounded flex items-center"
            >
              <IoClose className='text-2xl' />
              Đóng
            </button>
          </ModalHeader>

          <ModalBody className="m-0 px-4 py-0">
            {FLIGHT_REVIEW.map((review, key) => (
              <ReviewFlightItem
                key={key}
                review={review}
              ></ReviewFlightItem>
            ))}
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </div>
  );
}