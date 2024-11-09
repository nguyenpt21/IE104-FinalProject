import Image from "next/image";

import Hero from "./components/layout/Hero";
import SearchArea from "./components/SearchArea";
import Promotion from "./components/Promotion";
import ActivityCardList from "./components/ActivityCardList";
import HotelCardList from "./components/HotelCardList";
import DestionationList from "./components/DestinationList";
import AirlineList from "./components/AirlineList";

export default function Home() {
    
    return (
        <>
            <Hero></Hero>
            <SearchArea></SearchArea>
            <Promotion></Promotion>
            <ActivityCardList></ActivityCardList> 
            <HotelCardList></HotelCardList>
            <DestionationList></DestionationList>
            <AirlineList></AirlineList>
            <div className="mt-20"></div>
        </>
    );
}