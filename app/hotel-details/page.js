"use client";

import HotelGallery from '../components/hotel_details/HotelGallery';
import HotelOverview from '../components/hotel_details/HotelOverview';
// import Amenities from './components/Amenities';
import RoomOptions from '../components/hotel_details/RoomOptions';
import Reviews from '../components/hotel_details/Reviews';
import Nav from '../components/hotel_details/Nav';
import SearchBar from '../components/hotel_details/SearchBar';


function HotelDetailsPage() {
    return (
        <div>
            {/* <Nav/>
            <SearchBar/> */}
            <HotelGallery/>
            <HotelOverview />
            {/* <Amenities /> */}
            <RoomOptions />
            <Reviews />
        </div>
    );
}

export default HotelDetailsPage;
