import Image from "next/image";
export default function Hero() {
    return (
        <div className="container mx-auto pt-10">
            <div className="flex items-center gap-10">
                <div className="w-[46%]">
                    <h2 className="text-6xl">
                        Discover Your Next Adventure With Us
                    </h2>
                    <p className="w-[360px] mt-6 text-gray-400">
                        Khám phá niềm vui của bạn mọi lúc, mọi nơi - từ chuyến
                        du lịch ngẫu hứng tới những cuộc phiêu lưu khắp thế giớ
                    </p>
                </div>
                <div className="relative -z-10 flex-1">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/img/hero/hero-1.png"
                            width={400}
                            height={400}
                        ></Image>
                    </div>

                    <Image
                        src="/img/hero/map.png"
                        width={770}
                        height={390}
                        className="absolute top-20 left-0 -z-10"
                    ></Image>

                    <Image
                        src="/img/hero/plane.png"
                        width={55}
                        height={64}
                        className="absolute top-0 left-9"

                    ></Image>

                    <Image
                        src="/img/hero/boat.png"
                        width={55}
                        height={64}
                        className="absolute bottom-32 right-9"

                    ></Image>
                </div>
            </div>
        </div>
    );
}
