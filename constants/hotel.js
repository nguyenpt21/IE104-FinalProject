import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const hotels = [
  { 
    id: 1, 
    name: 'Sea Hotel', 
    image: '/img/hotel_home/hotel_1.jpg', 
    rating: 4.93, 
    price: '990000 VND',
    timeAgo: '2 phút ago',
    views: '24km'
  },
  { 
    id: 2, 
    name: 'Paradise Hotel', 
    image: '/img/hotel_home/hotel_2.jpg', 
    rating: 4.93, 
    price: '990000 VND',
    timeAgo: '2 phút ago',
    views: '24km'
  },
  { id: 3, name: 'Road Hotel', image: '/img/hotel_home/hotel_3.jpg', rating: 4.93, price: '990000 VND' },
  { id: 4, name: 'Lake Hotel', image: '/img/hotel_home/hotel_4.jpg', rating: 4.93, price: '990000 VND' },
  { id: 5, name: 'White Hotel', image: '/img/hotel_home/hotel_5.avif', rating: 4.93, price: '990000 VND' },
];

export default hotels;

export const HOTEL_FILTER_POPULAR = [
  { name: "Miễn phí đổi trả (105)", value: "105" },
  { name: "Spa (97)", value: "97" },
  { name: "Ven biển (70)", value: "70" },
  { name: "Bồn tắm thư giãn (167)", value: "167" },
  { name: "Không yêu cầu trả trước (190)", value: "190" },
];

export const HOTEL_FILTER_ACCOMMODATION = [
  { name: "Khách sạn (273)", value: "273" },
  { name: "Nhà nghỉ (109)", value: "109" },
  { name: "Resort (55)", value: "55" },
  { name: "Homestay (97)", value: "97" },
  { name: "Villa (132)", value: "132" },
];

// export const HOTEL_FILTER_STAR = [
//   {name: }
// ]

export const HOTEL_CARD = [
  { 
    image: "/img/hotel_list/hotel_4.jpeg",
    description: "Cung cấp không gian nghỉ dưỡng thoải mái, phòng ốc hiện đại và dịch vụ chuyên nghiệp. Vị trí thuận lợi, gần các điểm tham quan, chắc chắn sẽ mang đến cho bạn kỳ nghỉ tuyệt vời.",
    price: "2Tr040",
    originalPrice: "2Tr400",
    rating: 4,
    reviews: 1232,
    discount: "15",
    name: "Khách sạn Grand Sunrise", 
    room: "Chưa bao gồm thuế và phí" 
  },
  { 
    image: "/img/hotel_list/hotel_6.jpg",
    description: "Cung cấp không gian nghỉ dưỡng thoải mái, phòng ốc hiện đại và dịch vụ chuyên nghiệp. Vị trí thuận lợi, gần các điểm tham quan, chắc chắn sẽ mang đến cho bạn kỳ nghỉ tuyệt vời.",
    price: "2Tr300",
    originalPrice: "2Tr750",
    rating: 4.5,
    reviews: 1200,
    discount: "15",
    name: "TDMAISON Hotel & Apartment", 
    room: "Chưa bao gồm thuế và phí" 
  },
  { 
    image: "/img/hotel_list/hotel_6.jpeg",
    description: "Cung cấp không gian nghỉ dưỡng thoải mái, phòng ốc hiện đại và dịch vụ chuyên nghiệp. Vị trí thuận lợi, gần các điểm tham quan, chắc chắn sẽ mang đến cho bạn kỳ nghỉ tuyệt vời.",
    price: "1Tr399",
    originalPrice: "1Tr700",
    rating: 3,
    reviews: 1200,
    discount: "15",
    name: "Angsana Ho Tram", 
    room: "Chưa bao gồm thuế và phí" 
  },
  { 
    image: "/img/hotel_list/hotel_7.jpeg",
    description: "Cung cấp không gian nghỉ dưỡng thoải mái, phòng ốc hiện đại và dịch vụ chuyên nghiệp. Vị trí thuận lợi, gần các điểm tham quan, chắc chắn sẽ mang đến cho bạn kỳ nghỉ tuyệt vời.",
    price: "1Tr099",
    originalPrice: "1Tr450",
    rating: 3,
    reviews: 435,
    discount: "15",
    name: "Varia Resort & Spa", 
    room: "Chưa bao gồm thuế và phí" 
  },
  { 
    image: "/img/hotel_list/hotel_1.jpeg",
    description: "Cung cấp không gian nghỉ dưỡng thoải mái, phòng ốc hiện đại và dịch vụ chuyên nghiệp. Vị trí thuận lợi, gần các điểm tham quan, chắc chắn sẽ mang đến cho bạn kỳ nghỉ tuyệt vời.",
    price: "2Tr530",
    originalPrice: "2Tr990",
    rating: 5,
    reviews: 743,
    discount: "15",
    name: "Khách sạn Ven Hồ", 
    room: "Chưa bao gồm thuế và phí" 
  },
  { 
    image: "/img/hotel_list/hotel_3.jpeg",
    description: "Cung cấp không gian nghỉ dưỡng thoải mái, phòng ốc hiện đại và dịch vụ chuyên nghiệp. Vị trí thuận lợi, gần các điểm tham quan, chắc chắn sẽ mang đến cho bạn kỳ nghỉ tuyệt vời.",
    price: "2Tr240",
    originalPrice: "2Tr600",
    rating: 4,
    reviews: 957,
    discount: "15",
    name: "Khách sạn Trung Tâm", 
    room: "Chưa bao gồm thuế và phí" 
  },
]

export const HOTEL_FILTER_ACTIVITY = [
  {name: "Leo núi (32)"},
  {name: "Đạp xe (46)"},
  {name: "Tiệc tối (12)"},
  {name: "Khu nướng BBQ (10)"},
];

export const HOTEL_FILTER_STAR = [
  { name: <>1  <FontAwesomeIcon icon={faStar} className='text-yellow-400 ml-0.5 text-[15px]' /> (7)</> },
  { name: <>2 <FontAwesomeIcon icon={faStar} className='text-yellow-400 ml-0.5 text-[15px]' /> (16)</> },
  { name: <>3 <FontAwesomeIcon icon={faStar} className='text-yellow-400 ml-0.5 text-[15px]' /> (58)</> },
  { name: <>4 <FontAwesomeIcon icon={faStar} className='text-yellow-400 ml-0.5 text-[15px]' /> (147)</> },
  { name: <>5 <FontAwesomeIcon icon={faStar} className='text-yellow-400 ml-0.5 text-[15px]' /> (186)</> },
];
