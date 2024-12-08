import Link from "next/link";
import Image from "next/image";

import { FaStar } from "react-icons/fa6";

export default function TourCard({card}) {
    return (
        <Link href="/tour-detail" className="flex-1">
            <div className="rounded-lg overflow-hidden border flex flex-col translate-y bg-white h-[264px]">
                <div className="h-[150px]">
                    <Image
                        src={card.img}
                        width={200}
                        height={150}
                        className="h-full w-full object-cover"
                        alt={card.title}
                    ></Image>
                </div>
                <div className="p-2 flex flex-col flex-1">
                    <h3 className="line-clamp-2 font-semibold">{card.title}</h3>
                    <div className="flex items-center text-primary gap-1">
                        <FaStar></FaStar>
                        <span>{card.rating}</span>
                        <span className="text-gray-400">
                            ({card.numRating})
                        </span>
                    </div>
                    <p className="mt-auto text-orange_primary font-semibold text-base">
                        {card.price}
                    </p>
                </div>
            </div>
        </Link>
    );
}
