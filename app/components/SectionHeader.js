export default function SectionHeader({ header, icon }) {
    return (
        <div className="flex items-center gap-4 justify-center">
            {icon}
            <h2 className="font-bold text-2xl">{header}</h2>
        </div>
    );
}
