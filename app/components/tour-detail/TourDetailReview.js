import { FaStar } from "react-icons/fa";

export default function TourDetailReview({ review }) {
    return (
        <div className="w-[800px] text-sm">
            <div className="flex items-center gap-2">
                <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center bg-[#8dbd8b] ">
                    U
                </div>
                <div className="flex flex-col gap-0.5">
                    <p className="font-semibold">{review.userName}</p>
                    <p className="text-gray-400">{review.time}</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400 gap-2">
                    {Array(5)
                        .fill(1)
                        .map((_, index) => (
                            <FaStar key={index} className="w-4 h-4"></FaStar>
                        ))}
                </div>
                <span>{review.comment}</span>
            </div>
            <p className=" mt-3">
                {review.review}
            </p>
        </div>
    );
}
