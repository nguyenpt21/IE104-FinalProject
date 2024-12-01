import React from 'react';
import Image from 'next/image';

const HotelImageGallery = () => {
    return (
        <div className="hotel-image-gallery">
            <div className="main-image">
                <img src="/img/hotel_details/background.png" alt="Main Hotel" />
            </div>
            <div className="thumbnail-images">
                <img src="/img/hotel_details/hotel_15.jpeg" alt="Thumbnail 1" className="thumbnail-large" />
                <img src="/img/hotel_details/hotel_12.jpeg" alt="Thumbnail 2" className="thumbnail-small" />
                <img src="/img/hotel_details/hotel_13.jpeg" alt="Thumbnail 3" className="thumbnail-small" />
            </div>
        </div>
    );
};

export default HotelImageGallery;
