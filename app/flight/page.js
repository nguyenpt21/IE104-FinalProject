"use client";
import React from 'react'
import Image from 'next/image'
import SearchFlight from '@/app/components/flight/SearchFlight'
import PromotionCard from '@/app/components/flight/Promo'
import GeneralCarousel from "@/app/components/GeneralCarousel"
import { FLIGHT_POPULAR, PROMO_FLIGHT_CODE } from '@/constants/flight'
import WhyChooseItem from '@/app/components/flight/WhyChooseItem';
import { WHY_CHOOSE_FLIGHT } from '@/constants/flight'
import FlightItem from '@/app/components/flight/FlightItem';
import ModalReview from '@/app/components/flight/ModalReview';
import ReviewFlightItem from '@/app/components/flight/ReviewFlightItem';
import { FLIGHT_REVIEW } from '@/constants/flight'

export default function Flight() {
  const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024,
        },
        items: 3,
    },
  }
  const responsiveReviewCardList = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024,
        },
        items: 3,
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0,
        },
        items: 1,
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464,
        },
        items: 1,
    },
  };

  return (
    <div>

      {/* search flight */}
      <div className=' relative h-[400px]'>
        <Image
          src="/img/flight/plane.jpg"
          height={240}
          width={1440}
          alt=''
        />

        <div className='absolute text-2xl text-white font-semibold p-2 top-[47%] left-[8%] '>
          <p>Vé máy bay</p>
        </div>

        <div className='absolute w-full bottom-[30px]'>
          <div className='container mx-auto  px-5 bg-white py-7 rounded-xl shadow-custom'>
            <SearchFlight/>
          </div>
        </div>
      </div>

      {/* why choose */}
      <div className='container mx-auto grid grid-cols-4 gap-2 px-7'>
        {WHY_CHOOSE_FLIGHT.map((col, key) => (
          <div key={key}>
            <WhyChooseItem
              img = {col.img}
              title = {col.title}
              desc = {col.desc}
            />
          </div>
        ))}
      </div>

      {/* banner */}
      <div className='container mx-auto flex justify-center'>
        <Image
          className='rounded-lg'
          src='/img/flight/promo-banner.jpg'
          width={1100}
          height={100}
          alt=''
        />

      </div>

      {/* mã giảm giá */}
      <div className='container mx-auto my-12'>
        <div className='text-2xl font-semibold  mb-6'>
          <p>Đi chơi thả ga không lo về giá</p>
        </div>

        <div className=''>
          <GeneralCarousel responsive={responsive}>
            {PROMO_FLIGHT_CODE.map((col, key) => (
              <div className='mx-3' key={key}>
                <PromotionCard
                  label = {col.label}
                  title = {col.title}
                  desc = {col.desc}
                  code = {col.code}
                />
              </div>
            ))}
          </GeneralCarousel>
        </div>

      </div>

      {/* popular flight */}
      <div className='container mx-auto my-7'>
        <div className='text-2xl font-semibold  mb-6'>
          <p>Các tuyến phổ biến</p>
        </div>
        <div className='grid grid-cols-4 gap-5'>
          {FLIGHT_POPULAR.map((item, key) => (
              <div key={key}>
                <FlightItem
                  title = {item.title}
                  time = {item.time}
                  money = {item.money}
                />
              </div>
          ))}
        </div>
      </div>

      {/* review */}
      <div className='container mx-auto my-7'>

        <div className='mb-6'>
          <p className='text-2xl font-semibold mb-5'>Đánh giá</p>

          <div className='flex items-end py-1'>
            <p className='text-yellow-500 text-xl px-2'>
              <span className='text-5xl'>4.7</span>/5
            </p>

            <div className=''>
              <p className='text-[18px] font-semibold pb-1'>Hài lòng</p>
              <p className='text-xs text-secondary pb-1'>4 đánh giá</p>
            </div>
          </div>
        </div>
        
        <GeneralCarousel responsive={responsiveReviewCardList}>
          {FLIGHT_REVIEW.map((review, key) => (
            <ReviewFlightItem
              key={key}
              review={review}
            ></ReviewFlightItem>
          ))}
        </GeneralCarousel>
        
        <ModalReview></ModalReview>
      </div>

    </div>
  )
}
