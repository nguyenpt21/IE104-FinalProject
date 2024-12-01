
"use client";

import Earth from "@/app/components/three-model/Earth";
import RenderModel from "@/app/components/three-model/RenderModel";

export default function Hero() {
    return (
        <div className="bg-gradient-to-b from-blue-300 to-white pt-10">
            <div className="container mx-auto pt-10">
                <div className="flex items-center gap-10">
                    <div className="w-[48%]">
                        <h2 className="text-6xl font-bold drop-shadow-lg">
                            Discover Your Next Adventure With Us 
                        </h2>
                        <p className="text-[18px] mt-6 text-gray-400 font-medium">
                            Khám phá niềm vui của bạn mọi lúc, mọi nơi - từ chuyến
                            du lịch ngẫu hứng tới những cuộc phiêu lưu khắp thế giới
                        </p>
                    </div>
                    <div className="relative z-0 flex-1 h-[450px]">
                        <RenderModel>
                            <Earth />
                        </RenderModel>
                    </div>
                </div>
            </div>
        </div>
    );
}
