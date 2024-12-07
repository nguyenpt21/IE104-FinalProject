import Link from "next/link";

export default function Dropdown({ data, href }) {
    return (
        <div className="absolute pt-1">
            <div className="py-2 bg-white z-10 rounded-xl shadow-lg">
                <ul>
                    {data.map((service, key) => (
                        <li key={key}>
                            <Link href={href} className="py-2 px-4 whitespace-nowrap block hover:text-blue-600 transition-colors">
                                {service}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
