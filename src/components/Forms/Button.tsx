"use client"
import React from "react"

type Props = {
    buttonText: string
    className?: string
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export default function Button({ buttonText, className, onClick }: Props) {
    return (
        <button className={`${className}`} onClick={onClick}>
            {buttonText}
        </button>
    )
}
