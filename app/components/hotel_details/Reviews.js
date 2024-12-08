import React, { useState } from 'react';
import OverallRating from './OverallRating'
import Image from 'next/image';

const RatingReviews = () => {
    const [reviews, setReviews] = useState([
        {
            name: "Ngô Thị Như Quỳnh",
            date: "28/09",
            rating: 5,
            comment: "Điều đầu tiên khiến mình thích nhất với một khách sạn 5 sao là novotel cho mình check in sớm điều rất ít thấy ở khách sạn lớn mặc dù mình không yêu cầu nhận phòng sớm. Giá phòng của mình được giảm giá khuyến mãi nhiều nên không gồm bữa sáng không đánh được bữa sáng, nhưng khi check in được tặng phiếu dùng nước uống miễn phí tại quầy, và phiếu giảm giá massage.",
            avatar: "/img/hotel_details/Demon King.jpg"
        },
        {
            name: "Ngô Thị Như Quỳnh",
            date: "28/09",
            rating: 5,
            comment: "Lễ tân và nhân viên rất nhiệt tình từ lúc mình check in đến check out đều rất hài lòng về thái độ phục vụ. Phòng đẹp, view đẹp nhiều tiện ích, đệm êm giấc ngủ được đánh giá cao.",
            avatar: "/img/hotel_details/Demon King.jpg"
        }
    ]);
    
    const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

    // Overall rating data
    const overallRating = 9.1;
    const totalReviews = 80;
    const ratingBreakdown = [
        { label: 'Tuyệt vời', count: 48, percentage: 94 },
        { label: 'Rất tốt', count: 28, percentage: 79 },
        { label: 'Thỏa mãn', count: 1, percentage: 65 },
        { label: 'Trung bình', count: 3, percentage: 20 },
        { label: 'Không tốt', count: 0, percentage: 0 },
    ];

    const starRatings = {
        "Sạch sẽ": 4.5,
        "Thoải mái": 4.0,
        "Bữa ăn": 3.5,
        "Vị trí": 4.5,
        "Dịch vụ": 4.0,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, { ...newReview, avatar: "/img/hotel_details/Demon King.jpg" }]);
        setNewReview({ name: "", rating: 0, comment: "" });
    };

    return (
        <div className="p-4">
            <OverallRating overallRating={overallRating} totalReviews={totalReviews} ratingBreakdown={ratingBreakdown} starRatings={starRatings} />
            <h2 className="text-2xl font-bold">Xếp hạng và đánh giá</h2>
            <h3 className="text-xl">{reviews.length > 0 ? reviews[0].rating : 0} / 5</h3>
            {reviews.map((review, index) => (
                <div key={index} className="flex p-4 mb-4 border rounded-lg bg-white shadow-md transition-transform transform hover:shadow-lg">
                    <div className="flex items-center">
                        <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4 border-2 border-blue-500" />
                        <div>
                            <h4 className="font-semibold text-lg">{review.name}</h4>
                            <p className="text-gray-500 text-sm">{review.date}</p>
                            <p className="text-yellow-500 text-lg mt-1">{review.rating} / 10</p>
                        </div> 
                    </div>
                    <div className="flex-1 text-left">
                        <p className="text-gray-700 mt-2 ml-[100px]">{review.comment}</p>
                        <div className="flex justify-end">
                            <button className="text-blue-500 text-sm mt-2 hover:underline">Like this review?</button>
                        </div>
                    </div>
                </div>
            ))}
            <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded-lg bg-blue-100 shadow-md">
                <h4 className="font-semibold">{newReview.name}</h4>
                <textarea 
                    value={newReview.comment} 
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} 
                    placeholder="Viết đánh giá của bạn"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                />
                <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Gửi</button>
            </form>
        </div>
    );
};

export default RatingReviews;
