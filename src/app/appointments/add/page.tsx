"use client"
import Button from "@/components/Forms/Button"
import Input from "@/components/Forms/Input"
import { useState } from "react"

export default function Page() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    return (
        <form className="flex flex-col gap-20 min-h-screen items-center pt-50">
            <Input
                name="firstName"
                labelText="Customer First Name"
                placeholder="First Name"
                value={""}
                onChange={() => {}}
                type="text"
            />
            <Input
                name="lastName"
                labelText="Customer Last Name"
                placeholder="Last Name"
                value={""}
                onChange={() => {}}
                type="text"
            />
            <Input
                name="email"
                labelText="Customer Email"
                placeholder="Email"
                value={""}
                onChange={() => {}}
                type="email"
            />
            <Button buttonText="Submit" onClick={() => {}} className="" />
        </form>
    )
}
