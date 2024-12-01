// app/components/hotel_list/FilterSidebar.js
import React from 'react';

const priceRanges = [
    { label: "VND 0 - VND 200", value: 200, count: 200 },
    { label: "VND 200 - VND 500", value: 500, count: 100 },
    { label: "VND 500 - VND 1,000", value: 1000, count: 15 },
    { label: "VND 1,000 - VND 2,000", value: 2000, count: 12 },
    { label: "VND 2,000 - VND 5,000", value: 5000, count: 230 },
];

export default function FilterSidebar({ priceRange, setPriceRange }) {
    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPriceRange(prev => 
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    return (
        <div className="filter-sidebar">
            <h2>Tìm kiếm địa điểm cụ thể</h2>
            <h3>Bộ lọc</h3>
            <h4>Ngân sách mỗi ngày của bạn</h4>
            {priceRanges.map((range, index) => (
                <div key={index} className="price-range">
                    <input 
                        type="checkbox" 
                        value={range.value} 
                        onChange={handlePriceChange} 
                    />
                    <label>{range.label} - {range.count}</label>
                </div>
            ))}
            <button className="submit-button">Đặt ngân sách của bạn</button>
        </div>
    );
}