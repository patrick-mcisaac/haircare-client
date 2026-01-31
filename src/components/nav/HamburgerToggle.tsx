"use client"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, SetStateAction } from "react"

type NavItemProps = {
    className: string
    setIsVisible: Dispatch<SetStateAction<boolean>>
}

export default function HamburgerToggle({
    className,
    setIsVisible
}: NavItemProps) {
    return (
        <div className={`${className} mr-3 flex h-15 items-center justify-end`}>
            <button onClick={() => setIsVisible(true)}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    )
}
