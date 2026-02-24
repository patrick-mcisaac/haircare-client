"use client"
import { useState } from "react"
import HamburgerToggle from "./HamburgerToggle"
import NavItems from "./NavItems"

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <nav className="absolute w-screen">
            <NavItems
                ulClass="md:flex h-25 gap-10 pl-10 justify-around items-center text-4xl flex-row hidden"
                linkClass=""
                setIsVisible={setIsVisible}
            />

            {/* Mobile Nav */}
            {isVisible ?
                <NavItems
                    ulClass={`md:hidden h-fit w-full flex-col`}
                    linkClass="flex h-15 w-full  items-center justify-center"
                    setIsVisible={setIsVisible}
                />
            :   <HamburgerToggle
                    className={`text-4xl md:hidden`}
                    setIsVisible={setIsVisible}
                />
            }
        </nav>
    )
}
