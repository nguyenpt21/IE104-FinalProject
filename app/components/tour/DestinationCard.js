import Link from "next/link";
import Image from "next/image";

export default function DestinationCard({ card }) {
    return (
        <Link href="/" className="flex-1 ">
            <div className="p-3 bg-white rounded-3xl h-full border">
                <Image src={card.img} width={150} height={150} className="w-full rounded-3xl" alt={card.dest}></Image>
                <h3 className="font-semibold text-base mt-3">{card.dest}</h3>
                <p className="text-gray-400">{card.numAct} hoạt động</p>
            </div>
        </Link>
    );
}
