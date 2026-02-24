"use client"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"

type NavItemProps = {
    ulClass: string
    linkClass: string
    setIsVisible: Dispatch<SetStateAction<boolean>>
}

export default function NavItems({
    ulClass,
    linkClass,
    setIsVisible
}: NavItemProps) {
    return (
        <ul className={`${ulClass} nav tracking-widest md:flex-row`}>
            <Link
                onClick={() => setIsVisible(false)}
                className={`${linkClass}`}
                href={"/"}
            >
                <li>Home</li>
            </Link>
            <Link
                onClick={() => setIsVisible(false)}
                className={`${linkClass}`}
                href={"/customers"}
            >
                <li>Customers</li>
            </Link>
            <Link
                onClick={() => setIsVisible(false)}
                className={`${linkClass}`}
                href={"/appointments"}
            >
                <li>Appointments</li>
            </Link>

            {/* Use same height as Link */}
            <li
                onClick={() => setIsVisible(false)}
                className="flex h-15 w-screen items-center justify-center hover:cursor-pointer md:hidden"
            >
                <FontAwesomeIcon icon={faX} />
            </li>
        </ul>
    )
}
