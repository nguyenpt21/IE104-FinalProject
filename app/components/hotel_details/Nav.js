import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="nav fixed-nav" style={{ position: 'sticky', top: 0 }}>
            <ul className="navList">
                <li><Link href="#overview">Tổng quan</Link></li>
                <li><Link href="#rooms">Phòng</Link></li>
                <li><Link href="#location">Vị trí</Link></li>
                <li><Link href="#amenities">Tiện ích</Link></li>
                <li><Link href="#policies">Chính sách</Link></li>
                <li><Link href="#reviews">Đánh giá</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
