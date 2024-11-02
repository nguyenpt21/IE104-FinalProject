import Image from "next/image";

import Hero from "./components/Hero";
import SearchArea from "./components/SearchArea";
import Promotion from "./components/Promotion";

export default function Home() {
    
    return (
        <>
            <Hero></Hero>
            <SearchArea></SearchArea>
            <Promotion></Promotion>
            <div className="mt-20"></div>
        </>
    );
}