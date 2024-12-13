import { AIRLINE_LIST } from "@/constants";
import HomeSection from "./HomeSection";
import Image from "next/image";
import SectionButton from "./SectionButton";
export default function AirlineList() {
    return (
        <HomeSection
            sectionHeader={"Các hãng máy bay hợp tác"}
            icon={
                <Image src={"/icons/plane.webp"} width={28} height={28} alt=""></Image>
            }
        >
            <div className="flex gap-2">
                {AIRLINE_LIST.map((airline, key) => (
                    <div key={key} className="flex-1 flex items-center justify-center h-20 border rounded-xl">
                        <Image
                            src={airline.img}
                            alt={airline.name}
                            width={120}
                            height={40}
                           
                        ></Image>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <SectionButton href="/flight" text={"Đặt vé máy bay ngay"}></SectionButton>
            </div>
        </HomeSection>
    );
}
