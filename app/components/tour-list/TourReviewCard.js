import Link from "next/link";

import { FaStar } from "react-icons/fa6";
export default function TourReviewCard({ review }) {
    return (
        <div className="h-[200px] p-6 border border-gray-200 rounded-lg">
            <div className="flex gap-1 text-yellow-400">
                {Array(5)
                    .fill(1)
                    .map((_, index) => (
                        <FaStar key={index}></FaStar>
                    ))}
            </div>
            <p className="text-gray-400 mt-2">Đánh giá cho: <Link href={"/"} className="text-blue-400">{review.tour}</Link></p>
            <div className="flex gap-2 text-gray-400">
                <span>{review.reviewer}</span>
                <span>{review.reviewTime}</span>
            </div>
            <p className="mt-2">
                {review.content}
            </p>
        </div>
    );
}
