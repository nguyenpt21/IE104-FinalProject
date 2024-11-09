"use client";
import React from 'react'
import Image from 'next/image'
import SearchFlight from '@/app/components/flight/SearchFlight'
import PromotionCard from '@/app/components/flight/Promo'
import GeneralCarousel from "@/app/components/GeneralCarousel"
import { PROMO_FLIGHT_CODE } from '@/constants/flight'
import WhyChooseItem from '@/app/components/flight/WhyChooseItem';
import { WHY_CHOOSE_FLIGHT } from '@/constants/flight'

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
  return (
    <div>
      {/* search flight */}
      <div className='relative h-[400px]'>
        <Image
          src="/img/flight/plane.jpg"
          height={240}
          width={1440}
          alt=''
        />

        <div className='absolute text-2xl text-white font-semibold p-2 top-[47%] left-[10%] '>
          <p>Vé máy bay</p>
        </div>

        <div className='absolute top-[60%] left-[10%] w-[80%]'>
          <SearchFlight/>
        </div>
      </div>
      {/* why choose */}
      <div className='grid grid-cols-4 gap-2 mx-36'>
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

      {/* promotion */}
      <div className='mx-36 my-12'>
        <div className='text-2xl font-semibold  mb-6'>
          <p>Đi chơi thả ga không lo về giá</p>
        </div>

        <div className=''>
          <GeneralCarousel responsive={responsive}>
            {PROMO_FLIGHT_CODE.map((col, key) => (
              <div key={key}>
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
      



    </div>
  )
}
