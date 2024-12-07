import React from 'react';
import { faStar, faGift, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OverallRating = ({ overallRating, totalReviews, ratingBreakdown, starRatings }) => {
    return (
        <div className="mb-6 p-4 border rounded-lg bg-white shadow-md max-w-full overflow-hidden">
            <h2 className="text-2xl font-bold">Đánh giá & Nhận xét chung</h2>
            <p className='text-gray-500'>Từ {totalReviews} đánh giá đã xác minh của khách</p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col items-center md:w-1/6">
                    <div className="rating-circle">
                        <div className="rating-number">{overallRating}</div>
                    </div>
                    <span className="text-xl">Tuyệt vời</span>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0">
                {ratingBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center mt-2">
                        <span className="flex-1">{item.label}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${item.percentage}%`, maxWidth: '100%' }}
                            />
                        </div>
                        <span className="ml-2">{item.count}</span>
                    </div>
                ))}
            </div>
                <div className="md:w-1/3 mt-4 md:mt-0">
                    {Object.entries(starRatings).map(([category, rating], index) => (
                        <div key={index} className="flex items-center mt-2">
                            <span className="flex-1">{category}</span>
                            <div className="flex mr-[120px]">
                                {[...Array(5)].map((_, starIndex) => (
                                    <span key={starIndex} className={starIndex < Math.round(rating) ? "text-blue-500" : "text-gray-300"}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OverallRating;
