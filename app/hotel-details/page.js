"use client";

import HotelGallery from '../components/hotel-details/HotelGallery';
import HotelOverview from '../components/hotel-details/HotelOverview';
// import Amenities from './components/Amenities';
import RoomOptions from '../components/hotel-details/RoomOptions';
import Reviews from '../components/hotel-details/Reviews';
import Nav from '../components/hotel-details/Nav';
import SearchBar from '../components/hotel-details/SearchBar';


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
