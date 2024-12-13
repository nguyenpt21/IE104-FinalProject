import Link from "next/link";
import Image from "next/image";
import HomeSection from "./HomeSection";
import { DESTINATIONS_LIST } from "@/constants";
import SectionButton from "./SectionButton";

export default function DestionationList() {
    return (
        <HomeSection
            sectionHeader={"Bắt đầu hành trình của bạn"}
            icon={
                <Image
                    src={"/icons/destination.webp"}
                    width={28}
                    height={28}
                    alt=""
                ></Image>
            }
        >
            <div className="flex gap-2">
                {DESTINATIONS_LIST.map((dest, key) => (
                    <Link href="/tour" key={key} className="flex-1 translate-y">
                        <div className="relative rounded-t-md">
                            <Image src={dest.img} width={230} height={300} className="w-full object-cover rounded-t-md" alt={dest.city}></Image>
                            <div className="absolute bottom-0 left-0 px-6 py-10 text-white w-full bg-gradient-to-t from-[#2f2f2f] to-transparent">
                                <h4 className="font-semibold text">{dest.city}</h4>
                                <p className="text-xs mt-1">{dest.country}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-6">
                <SectionButton href="/tour" text={"Xem tất cả"}></SectionButton>
            </div>
        </HomeSection>
    );
}
