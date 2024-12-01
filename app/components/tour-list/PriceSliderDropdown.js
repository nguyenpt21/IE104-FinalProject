import PriceSlider from "./PriceSlider";

export default function PriceSliderDropdown({ open, handleToggle }) {
    return (
        <>
            {open && (
                <div className="w-[400px] bg-white p-4 shadow-dropdown rounded-lg">
                    <PriceSlider></PriceSlider>
                    <div className="text-right mt-5">
                        <button
                            className="px-4 py-2 bg-blue_medium text-white rounded-md"
                            onClick={handleToggle}
                        >
                            Xem kết quả
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
