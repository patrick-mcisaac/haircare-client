"use client"
import Button from "@/components/Forms/Button"
import { GetAppointments } from "@/data/AppointmentFetch"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import React from "react"

export default function Page() {
    const { data: appointments } = useQuery({
        queryKey: ["appointments"],
        queryFn: GetAppointments
    })

    const router = useRouter()
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1>Appointments</h1>
            <Button
                buttonText="Add Appointment"
                onClick={(e) => {
                    e.preventDefault()
                    router.push("/appointments/add")
                }}
            />
        </div>
    )
}
