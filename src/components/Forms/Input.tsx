import React from "react"

type Props = {
    labelText: string
    name: string
    placeholder?: string
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void
    type: string
    labelClassName?: string
    fieldsetClassName?: string
    inputClassName?: string
}
export default function Input({
    labelText,
    name,
    placeholder,
    value,
    onChange,
    type,
    fieldsetClassName,
    labelClassName,
    inputClassName
}: Props) {
    return (
        <fieldset
            className={`${fieldsetClassName} flex flex-col items-stretch gap-2 w-75`}
        >
            <label className={`${labelClassName}`} htmlFor={name}>
                {labelText}
            </label>
            <input
                type={type}
                className={`${inputClassName} bg-foreground text-background rounded-2xl pl-4`}
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
            />
        </fieldset>
    )
}
