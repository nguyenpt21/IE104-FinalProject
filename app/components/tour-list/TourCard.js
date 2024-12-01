import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";

export default function TourCard({ card }) {
    return (
        <Link href="/">
            <div className="rounded-xl border h-[350px] flex flex-col shadow-md overflow-hidden translate-y">
                <div className="h-[200px] relative">
                    <Image
                        src={card.img}
                        width={280}
                        height={182}
                        className="w-full h-full object-cover rounded-t-xl"
                        alt={card.title}
                    ></Image>
                </div>
                <div className="px-4 py-2 flex flex-col flex-1">
                    <h3 className="line-clamp-2 text-md font-semibold pr-1">
                        {card.title}
                    </h3>
                    <div className="flex gap-2">
                        {card.tags.map((tag, key) => (
                            <span
                                key={key}
                                className="text-[12px] px-1 bg-gray-100 text-gray-400 font-light"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="mt-[6px] text-gray-400 flex gap-2">
                        <div className="flex gap-1">
                            <div className="text-primary flex items-center gap-1">
                                <IoIosStar></IoIosStar>
                                {card.rating}
                            </div>
                            <span>({card.numRating})</span>
                        </div>
                        - <span>{card.bookings}</span>
                    </div>
                    <p className="mt-auto text-lg font-semibold text-orange_primary">
                        {card.price}
                    </p>
                </div>
            </div>
        </Link>
    );
}
