import Image from "next/image";

import TourGeneralInformarion from "../components/tour-detail/TourGeneralInformation";
export default function TourDetail() {
    return (
        <>
            <div className="w-[85%] mx-auto">
                <h1 className="text-[34px] font-semibold mt-6">
                    Tour Ngày Cao Cấp Khám Phá Địa Đạo Củ Chi & Đồng Bằng Sông
                    Cửu Long
                </h1>
                {/* Banner */}
                <div className="flex gap-2 mt-4">
                    <div className="w-[70%]">
                        <Image
                            src={"/img/tour-detail/banner/banner-1.webp"}
                            height={470}
                            width={800}
                            className="w-full h-full object-cover rounded-l-xl"
                        ></Image>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image
                            src={"/img/tour-detail/banner/banner-2.webp"}
                            height={470}
                            width={200}
                            className="w-full h-[50%] object-cover rounded-tr-xl"
                        ></Image>
                        <Image
                            src={"/img/tour-detail/banner/banner-3.webp"}
                            height={470}
                            width={200}
                            className="w-full h-[50%] object-cover rounded-br-xl"
                        ></Image>
                    </div>
                </div>
                <div className="flex">
                    <TourGeneralInformarion></TourGeneralInformarion>
                </div>
                <div className="mb-20"></div>
            </div>
        </>
    );
}
