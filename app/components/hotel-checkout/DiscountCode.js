// app/hotel-checkout/components/DiscountCode.js
"use client";
import React, { useState } from 'react';

const DiscountCode = () => {
    const [code, setCode] = useState('');

    const handleApply = () => {
        // Logic to apply discount code
        console.log(`Applying discount code: ${code}`);
    };

    return (
        <div>
            <h2>Thêm mã giảm giá</h2>
            <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Nhập mã giảm giá"
            />
            <button onClick={handleApply}>Áp dụng</button>
        </div>
    );
};

export default DiscountCode;