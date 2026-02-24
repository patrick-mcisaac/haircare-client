"use client"
import { GetCustomers } from "@/data/CustomerFetch"
import { CustomerType } from "@/types/CustomerType"
import { useQuery } from "@tanstack/react-query"
import React from "react"

export default function CustomerList() {
    const { data: customers, isSuccess } = useQuery({
        queryKey: ["customers"],
        queryFn: GetCustomers
    })
    return (
        isSuccess && (
            <table className="w-75 md:w-150">
                <thead>
                    <tr>
                        <th className="tableHeader tableData">Name</th>

                        <th className="tableHeader tableData">Phone Number</th>
                    </tr>
                </thead>

                <tbody>
                    {customers.map((c: CustomerType) => {
                        return (
                            <tr key={c.id}>
                                <td className="tableData">
                                    {c.firstName} {c.lastName}
                                </td>
                                <td className="tableData">{c.phoneNumber}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    )
}
