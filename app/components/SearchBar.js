
export default function SearchBar({className, Icon, placeholder, Button }) {

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            <button>
                {Icon}
            </button>
            <input
                type="text"
                placeholder={placeholder}
                className="flex-1 h-full px-1 outline-none border-none bg-transparent"
            />
            {Button}
        </div>
    );
}
