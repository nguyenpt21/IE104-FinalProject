import React, { useState } from 'react';

const RatingReviews = () => {
    const [reviews, setReviews] = useState([
        {
            name: "Ngô Thị Như Quỳnh",
            date: "28/09",
            rating: 5,
            comment: "Tour tham những điểm mới, hướng dẫn viên chuyên nghiệp, bác tài chạy cẩn thận, mọi thứ ok!",
            avatar: "path/to/avatar1.png"
        },
        {
            name: "Ngô Thị Như Quỳnh",
            date: "28/09",
            rating: 5,
            comment: "Tour tham những điểm mới, hướng dẫn viên chuyên nghiệp, bác tài chạy cẩn thận, mọi thứ ok!",
            avatar: "path/to/avatar2.png"
        }
    ]);
    
    const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, { ...newReview, avatar: "path/to/default-avatar.png" }]);
        setNewReview({ name: "", rating: 0, comment: "" });
    };

    return (
        <div className="p-4">
            <div className="flex justify-between mb-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">◀️</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">▶️</button>
            </div>
            <h2 className="text-2xl font-bold">Xếp hạng và đánh giá</h2>
            <h3 className="text-xl">{reviews.length > 0 ? reviews[0].rating : 0} / 5</h3>
            {reviews.map((review, index) => (
                <div key={index} className="flex p-3 mb-4 border rounded-lg bg-blue-50 shadow-md transition-transform transform hover:scale-105">
                    <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full mr-3" />
                    <div className="flex-1">
                        <h4 className="font-semibold">{review.name} <span className="text-gray-500 text-sm">{review.date}</span></h4>
                        <p className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                        <p className="text-gray-700">{review.comment}</p>
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
