"use client";
import React from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGift, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function HotelCard(props) {
  return (
    <div className="border rounded-lg p-4 bg-gray-100 shadow-lg mx-auto my-4 flex" style={{ height: '230px' }}>
      {/* Image on the left */}
      <Image src={props.image} height={240} width={300} alt={props.name} className="rounded mr-4 object-cover" />

      {/* Hotel Details on the right */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[16px] font-bold text-black">{props.name}</p>
          <div className="flex items-center mb-2">
            {[...Array(Math.round(props.rating))].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400 ml-0.5 text-[12px]" />
            ))}
            <p className="text-gray-500 ml-2 text-[12px]">({props.reviews} Đánh giá)</p>
          </div>
          <p className="text-gray-700 mr-4 mb-1 text-[11px]">{props.description}</p>
          <div className="flex justify-between items-center  w-full">
            {/* Extra Benefit Notification */}
            <div >
              <div className="bg-pink-100 text-gray-600 font-semibold px-2 py-1 rounded mb-1 text-xs">
              <FontAwesomeIcon icon={faGift} className="mr-1 text-red-500" />
              Một số phòng có Extra Benefit!
              </div>
             
              <div className="mt-2">
                <p className="text-green-600 text-[12px] mt-1 flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="mr-1" />
                  Không thanh toán ngay
                </p>
              </div>
            </div>

            {/* Discount and Price Section */}
            <div className="flex flex-col items-end">
              <span className="bg-orange-300 text-orange-700 font-semibold px-2 py-1 rounded mb-1 text-xs">{props.discount}% off</span>
              <p className="text-gray-600 text-xs">Chưa bao gồm thuế và phí</p>
              <p className="text-orange-600 font-bold line-through text-xs">{props.originalPrice} VND</p>
              <p className="text-orange-600 font-bold text-xs">{props.price} VND</p>
            </div>
          </div>

          {/* Payment Information Section */}
          
        </div>
      </div>
    </div>
  );
}

