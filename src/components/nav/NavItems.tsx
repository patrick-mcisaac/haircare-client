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
            {localStorage.getItem("Project_Name") ?
                <>
                    <Link
                        onClick={() => setIsVisible(false)}
                        className={`${linkClass}`}
                        href={"/"}
                    >
                        <li>Home</li>
                    </Link>
                    <Link
                        className={`${linkClass} md:mr-10 md:ml-auto`}
                        href={"/login"}
                        onClick={() => {
                            localStorage.removeItem("Project_Name")
                            setIsVisible(false)
                        }}
                    >
                        <li>Logout</li>
                    </Link>
                    {/* Use same height as Link */}
                    <li
                        onClick={() => setIsVisible(false)}
                        className="flex h-15 w-screen items-center justify-center hover:cursor-pointer md:hidden"
                    >
                        <FontAwesomeIcon icon={faX} />
                    </li>
                </>
            :   <Link
                    onClick={() => setIsVisible(false)}
                    className={`${linkClass}`}
                    href={"/login"}
                >
                    <li>Login</li>
                </Link>
            }
        </ul>
    )
}

