// components/SliderButton.js
const SliderButton = () => {
    return (
        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-white shadow-lg cursor-pointer transition duration-300 hover:bg-gray-200">
            <span className="text-blue-500 text-2xl">▶️</span>
        </div>
    );
};

export default SliderButton;