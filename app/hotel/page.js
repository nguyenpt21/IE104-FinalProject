'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineStar, AiFillHeart, AiFillStar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { BsCalendar3 } from 'react-icons/bs';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function HotelPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 adult, 1 room');

  const featuredDestinations = [
    { 
      id: 1, 
      name: 'Sea Hotel', 
      image: '/img/hotel_home/sea_hotel.svg', 
      rating: 4.93, 
      price: 990,
      timeAgo: '2 phút ago',
      views: '24km'
    },
    { 
      id: 2, 
      name: 'Paradise Hotel', 
      image: '/img/hotel_home/paradise_hotel.svg', 
      rating: 4.93, 
      price: 990,
      timeAgo: '2 phút ago',
      views: '24km'
    },
    { id: 3, name: 'Road Hotel', image: '/img/hotel_home/road_hotel.svg', rating: 4.93, price: 990 },
    { id: 4, name: 'Lake Hotel', image: '/img/hotel_home/lake_hotel.svg', rating: 4.93, price: 990 },
    { id: 5, name: 'White Hotel', image: '/img/hotel_home/white_hotel.svg', rating: 4.93, price: 990 },
  ];

  const popularCategories = [
    { id: 1, name: 'Beaches', image: '/images/beaches.jpg' },
    { id: 2, name: 'Mountains', image: '/images/mountains.jpg' },
    { id: 3, name: 'Cities', image: '/images/cities.jpg' },
    { id: 4, name: 'Countryside', image: '/images/countryside.jpg' },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="relative h-[620px] rounded-lg overflow-hidden mb-4">
        <Image
          src="/img/hotel_home/background_hotel.svg"
          alt="Hotel Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-start pt-32">
          <h1 className="text-white text-4xl font-bold mb-8 text-center">
            Tìm và đặt phòng khách sạn giá rẻ
          </h1>
          <div className="w-full max-w-4xl px-4 mt-8">
            <div className="bg-white rounded-lg p-2 grid grid-cols-5 gap-2">
              <div className="col-span-2 flex items-center gap-2 bg-gray-50 rounded p-2">
                <IoLocationOutline className="text-gray-500 text-xl" />
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-transparent flex-1 outline-none text-sm font-normal"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded p-2">
                <BsCalendar3 className="text-gray-500" />
                <input
                  type="date"
                  className="bg-transparent outline-none text-sm font-normal text-gray-600"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="Check-in"
                />
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded p-2">
                <BsCalendar3 className="text-gray-500" />
                <input
                  type="date"
                  className="bg-transparent outline-none text-sm font-normal text-gray-600"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder="Check-out"
                />
              </div>
              <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <section className="mb-20 relative">
        {/* Title and Slide Indicators */}
        {/* Slide Indicators */}
        <div className="flex justify-center items-center gap-1.5">
            <div className="w-4 h-2 rounded-full bg-gray-300"></div>
            <div className="w-4 h-2 rounded-full bg-gray-300"></div>
            <div className="w-8 h-2 rounded-full bg-blue-600"></div> {/* Active indicator */}
            <div className="w-4 h-2 rounded-full bg-gray-300"></div>
            <div className="w-4 h-2 rounded-full bg-gray-300"></div>
        </div>
        <div className="text-center mb-20 mt-20">
          <h2 className="text-3xl font-bold mb-4">Top những khách sạn được yêu thích nhất</h2>
        </div>

        {/* Hotel Cards Container */}
        <div className="px-8">
          <div className="flex justify-center items-center" style={{ gap: '16px' }}>
            {/* Sea Hotel */}
            <div className="w-[240px]">
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-[2/3] relative">
                    <Image
                      src="/img/hotel_home/sea_hotel.svg"
                      alt="Sea Hotel"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1 flex items-center gap-1">
                      <AiFillStar className="text-yellow-400 text-sm" />
                      <span className="text-white text-sm">4.93</span>
                    </div>
                    <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                      <AiFillHeart className="text-gray-400 text-xl" />
                    </button>
                  </div>
                  {/* Slide Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">Sea Hotel</h3>
                    <span className="text-gray-900">$ 990</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                      2 phút ago
                    </span>
                    <span className="mx-1">•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      </svg>
                      24km
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Paradise Hotel */}
            <div className="w-[280px]">
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-[2.5/4] relative">
                    <Image
                      src="/img/hotel_home/paradise_hotel.svg"
                      alt="Paradise Hotel"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1 flex items-center gap-1">
                      <AiFillStar className="text-yellow-400 text-sm" />
                      <span className="text-white text-sm">4.93</span>
                    </div>
                    <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                      <AiFillHeart className="text-gray-400 text-xl" />
                    </button>
                  </div>
                  {/* Slide Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">Paradise Hotel</h3>
                    <span className="text-gray-900">$ 990</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                      2 phút ago
                    </span>
                    <span className="mx-1">•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      </svg>
                      24km
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Road Hotel */}
            <div className="w-[320px]">
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-[1.7/3] relative">
                    <Image
                      src="/img/hotel_home/road_hotel.svg"
                      alt="Road Hotel"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1 flex items-center gap-1">
                      <AiFillStar className="text-yellow-400 text-sm" />
                      <span className="text-white text-sm">4.93</span>
                    </div>
                    <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                      <AiFillHeart className="text-gray-400 text-xl" />
                    </button>
                  </div>
                  {/* Slide Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">Road Hotel</h3>
                    <span className="text-gray-900">$ 990</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                      2 phút ago
                    </span>
                    <span className="mx-1">•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      </svg>
                      24km
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lake Hotel */}
            <div className="w-[280px]">
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-[2.5/4] relative">
                    <Image
                      src="/img/hotel_home/lake_hotel.svg"
                      alt="Lake Hotel"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1 flex items-center gap-1">
                      <AiFillStar className="text-yellow-400 text-sm" />
                      <span className="text-white text-sm">4.93</span>
                    </div>
                    <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                      <AiFillHeart className="text-gray-400 text-xl" />
                    </button>
                  </div>
                  {/* Slide Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">Lake Hotel</h3>
                    <span className="text-gray-900">$ 990</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                      2 phút ago
                    </span>
                    <span className="mx-1">•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      </svg>
                      24km
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* White Hotel */}
            <div className="w-[240px]">
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="/img/hotel_home/white_hotel.svg"
                      alt="White Hotel"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1 flex items-center gap-1">
                      <AiFillStar className="text-yellow-400 text-sm" />
                      <span className="text-white text-sm">4.93</span>
                    </div>
                    <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                      <AiFillHeart className="text-gray-400 text-xl" />
                    </button>
                  </div>
                  {/* Slide Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">White Hotel</h3>
                    <span className="text-gray-900">$ 990</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                      2 phút ago
                    </span>
                    <span className="mx-1">•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      </svg>
                      24km
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Popular categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularCategories.map((category) => (
            <div key={category.id} className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-white font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
