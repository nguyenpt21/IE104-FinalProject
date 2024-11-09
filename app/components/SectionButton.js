import Link from "next/link"
import { HiOutlineExternalLink } from "react-icons/hi";
export default function SectionButton({href, text}) {
    return (
        <Link href={href} className="inline-flex gap-2 items-center px-8 py-2 border border-gray-500 rounded-md">
            <span className="font-semibold">{text}</span>
            <HiOutlineExternalLink className="h-5 w-5"></HiOutlineExternalLink>
        </Link>
    )
}