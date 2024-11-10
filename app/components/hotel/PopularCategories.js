import React from 'react';
import Image from 'next/image';

const PopularCategories = ({ categories }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Popular categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <h3 className="text-white font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories; 