import React from 'react';
import Image from 'next/image';

const PopularCategories = ({ categories }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 ml-20">Tìm kiếm theo nguyên mẫu</h2>
      <p className="mb-4 text-md ml-28 mr-80">Tìm kiếm khách sạn, villa hay cottage dễ dàng chỉ với vài bước: nhập địa điểm, chọn loại hình và ngày nhận phòng. Hệ thống nhanh chóng trả về các lựa chọn phù hợp với nhu cầu của bạn.</p>
      <div className="flex justify-around mt-20 mb-20">
        {categories.map((category) => (
          <div key={category.id} className="aspect-[2.3/4] w-[200px] relative rounded-lg overflow-hidden">
            {category.image && (
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black/30 p-2">
              <h3 className="text-white font-semibold text-center">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-1.5 mb-20">
            <div className="w-4 h-2 rounded-full bg-gray-300"></div>
            <div className="w-4 h-2 rounded-full bg-gray-300"></div>
            <div className="w-8 h-2 rounded-full bg-blue-600"></div> {/* Active indicator */}
            <div className="w-4 h-2 rounded-full bg-gray-300"></div>
            <div className="w-4 h-2 rounded-full bg-gray-300"></div>
      </div> 
    </section>
  );
};

export default PopularCategories; 