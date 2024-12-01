import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
export default function Pagination() {
    const pages = [1, 2, 3, 4, 5, 6, 10];
    const [currentPage, setCurrentPage] = useState(pages[0]);

    console.log(pages[0])
    return (
        <div className="flex gap-2 items-center">
            <button
                className={`w-9 h-9 flex items-center justify-center border border-gray-400 rounded-lg ${currentPage === pages[0] ? '' : 'hover:text-primary hover:border-primary transition-colors duration-200'}`}
                onClick={() =>  setCurrentPage(currentPage - 1)}
                disabled={currentPage === pages[0]}
            >
                <MdOutlineArrowForwardIos className={`w-4 h-4 rotate-180 ${currentPage == pages[0] ? 'opacity-50' : ''}`}></MdOutlineArrowForwardIos>
            </button>
            {pages.slice(0, -1).map((page, key) => (
                <button
                    key={key}
                    className={`min-w-9 px-3 py-2 border rounded-lg ${currentPage == page ? 'bg-primary text-white' : 'border-gray-400 hover:text-primary hover:border-primary transition-colors duration-200'}`}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
            <span className="text-base"><BsThreeDots></BsThreeDots></span>
            {pages.slice(-1).map((page, key) => (
                <button
                    key={key}
                    className={`min-w-9 px-3 py-2 border rounded-lg ${currentPage == page ? 'bg-primary text-white' : 'border-gray-400 hover:text-primary hover:border-primary transition-colors duration-200'}`}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className={`w-9 h-9 flex items-center justify-center border border-gray-400 rounded-lg ${currentPage === pages[pages.length - 1] ? '' : 'hover:text-primary hover:border-primary transition-colors duration-200'}`}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === pages[pages.length - 1]}
            >
                <MdOutlineArrowForwardIos className={`w-4 h-4 ${currentPage ==pages[pages.length - 1] ? 'opacity-50' : ''}`}></MdOutlineArrowForwardIos>
            </button>
        </div>
    );
}
